<script setup lang="ts">
import { watch, onMounted } from 'vue';
import useOpenDetail from '../../../composables/useOpenDetail.js';
const props = defineProps(['headers', 'items', 'tB']);

//const tB = props.model == "Person"? "search-result-table-headers.person" : "search-result-table-headers."
// onMounted(() => {
//   watch(props.headers, () => {
//     console.log(props.headers.value);
//   });
// });
</script>
<template>
  <div>
    <table>
      <tr>
        <th v-for="header in headers" :key="header" class="text-start capitalize pr-8 border-b-2">
          {{ $t(tB + header) }}
        </th>
      </tr>
      <tr
        v-for="item in items"
        :key="item.id"
        align="left"
        style="min-width: 50%"
        class="hover:bg-gray-100"
      >
        <td v-for="header in headers" :key="header" class="text-sm py-1 pr-4">
          <ais-highlight
            v-if="['name', 'first_name'].includes(header)"
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenDetail(item.model, item.object_id)"
          ></ais-highlight>
          <ais-highlight
            v-else-if="header == 'target.name'"
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenDetail(item.target.model, item.target.object_id)"
          ></ais-highlight>
          <ais-highlight
            v-else-if="header == 'source.name'"
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenDetail(item.source.model, item.source.object_id)"
          ></ais-highlight>
          <ais-highlight v-else :hit="item" :attribute="header" class="entity_tag"></ais-highlight>

          <!--                     @click="redirectToEntity('entities', item.id, item.model)"
 -->
        </td>
      </tr>
    </table>
  </div>
  <div class="flex justify-content-between"><ais-pagination /></div>
</template>
<style>
.ais-Pagination-list {
  @apply rounded-lg px-4 py-2 flex self-center;
}
.ais-Pagination-item {
  /* @apply bg-gray-100 px-3 mx-2 text-gray-600 rounded hover:bg-primary-100 hover:text-white; */
}

.ais-Pagination-link {
  @apply bg-gray-100 px-3  py-1 mx-2 text-gray-600 rounded hover:bg-primary-100 hover:text-white;
}
</style>
