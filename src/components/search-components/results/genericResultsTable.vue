<script setup lang="ts">
import { watch, onMounted } from "vue";
import useOpenDetail from "../../../composables/useOpenDetail.ts";
const props = defineProps(["headers", "items"]);
const redirectToEntity = useOpenDetail();

const tB = "search-result-table-headers."
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
        <th
          v-for="header in headers"
          :key="header"
          class="text-start capitalize pr-8 border-b-2"
        >
          {{ $t(tB+header) }}
        </th>
      </tr>
      <tr
        v-for="item in items"
        :key="item.id"
        align="left"
        style="min-width: 50%"
        class="hover:bg-gray-100"
      >
        <td v-for="header in headers" :key="header" class="text-sm py-1 pr-4 ">
          <ais-highlight
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline"
            @click="redirectToEntity('entities', item.object_id, item.model)"
          ></ais-highlight>
          <!--                     @click="redirectToEntity('entities', item.id, item.model)"
 -->
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped></style>
