<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps(["headers", "data"]);

const data_ = ref([]);
onMounted(() => {
  data_.value = props.data;
});

function sortColumn(column) {
  console.log("clicked:", column);
  console.log("data", data_.value);
  data_.value.sort((a, b) => {
    let res = a[column] <= b[column];
    console.log(res);

    res = res ? 1 : -1;
    return res;
  });

  console.log("data after", data_.value);
}

console.log("generic table called");
</script>
<template>
  <div v-if="props.headers.length > 0" class="bg-white p-5">
    <table>
      <tr>
        <th
          v-for="header in headers"
          :key="header"
          @click="sortColumn(header)"
          class="text-left pr-4 border-b-2"
        >
          {{ header }}
        </th>
      </tr>
      <tr v-for="entry in data_" :key="entry.id">
        <td
          v-for="header in headers"
          :key="entry.id.toString() + '_' + header"
          class="pr-4"
        >
          {{
            header == "target.name"
              ? entry["target"]["name"]
              : entry[header]
          }}
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped></style>
