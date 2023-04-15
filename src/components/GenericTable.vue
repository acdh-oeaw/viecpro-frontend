<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import useOpenDetail from '@/composables/useOpenDetail';
const props = defineProps(['headers', 'data']);

const data_ = ref([]);
onMounted(() => {
  data_.value = props.data;
});

function sortColumn(column) {
  console.log('clicked:', column);
  console.log('data', data_.value);
  data_.value.sort((a, b) => {
    let res = a[column] <= b[column];
    console.log(res);

    res = res ? 1 : -1;
    return res;
  });

  console.log('data after', data_.value);
}
const getHeaderValue = (header, entry) => {
  let res = '';

  if (header && entry) {
    console.log('computing header', header, entry);
    switch (header) {
      case 'target.name':
        res = entry['target']['name'];
        break;

      case 'source.name':
        res = entry['source']['name'];
        break;
      default:
        res = entry[header];
    }
  }
  return res;
};
// TODO: also implement using lang -file to overwrite header names.
console.log('generic table called');
</script>
<template>
  <div v-if="props.headers.length > 0" class="bg-white p-5">
    <table class="">
      <tr>
        <th
          v-for="header in headers"
          :key="header"
          @click="sortColumn(header)"
          class="text-left pr-4 border-b-2"
        >
          <span v-if="header == 'target.name'">
            {{ $t(`entity-detail.relations-table-headers.target-name`) }}</span
          >
          <span v-else>{{ $t(`entity-detail.relations-table-headers.${header}`) }}</span>
        </th>
      </tr>
      <tr v-for="entry in data_" :key="entry.object_id" class="hover:bg-gray-100">
        <td v-for="header in headers" :key="entry.object_id.toString() + '_' + header" class="pr-4">
          <!-- {{ header == 'target.name' ? entry['target']['name'] : entry[header] }} -->
          <span
            v-if="['target.name'].includes(header)"
            @click="useOpenDetail(entry.target.model, entry.target.object_id)"
            class="hover:cursor-pointer hover:text-red-600 hover:underline"
          >
            {{ getHeaderValue(header, entry) }}</span
          >
          <span v-else> {{ getHeaderValue(header, entry) }} </span>
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped></style>
