<script setup lang="ts">
import useOpenDetail from '../../../composables/useOpenDetail.js';
import useOpenRegister from '@/composables/redirection-utils/useOpenRegister';
const props = defineProps(['headers', 'items', 'tB']);


</script>
<template>
  <div class="flex-col">
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
            v-else-if="header == 'owner'"
            :hit="item"
            attribute="main_owner.name"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenDetail(item.main_owner.model, item.main_owner.object_id)"

          ></ais-highlight>
          <ais-highlight
            v-else-if="header == 'related_doc.name'"
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenDetail(item.related_doc.model, item.related_doc.object_id)"
          ></ais-highlight>
          <ais-highlight
            v-else-if="header == 'relation_type' && item.model === 'PersonInstitution'"
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenRegister('Function', item.relation_type_id)"
          ></ais-highlight>
          <ais-highlight
            v-else-if="header == 'source.name'"
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenDetail(item.source.model, item.source.object_id)"
          ></ais-highlight>
          <ais-highlight
            v-else-if="['shortTitle', 'title'].includes(header)"
            :hit="item"
            :attribute="header"
            class="entity_tag hover:cursor-pointer hover:underline hover:text-red-800"
            @click="useOpenRegister('Reference', item.id)"
          ></ais-highlight>
          <ais-highlight v-else :hit="item" :attribute="header" class="entity_tag"></ais-highlight>

          <!--                     @click="redirectToEntity('entities', item.id, item.model)"
 -->
        </td>
      </tr>
    </table>
    <div class="w-full h-fit flex justify-center my-10">
      <div class="flex justify-content-between"><ais-pagination /></div>
</div>

  </div>
</template>
<style>
.ais-Pagination-list {
  @apply rounded-lg flex;
}
.ais-Pagination-item {
  /* @apply bg-gray-100 px-3 mx-2 text-gray-600 rounded hover:bg-primary-100 hover:text-white; */
}

.ais-Pagination-link {
  @apply bg-gray-100 px-3  py-1 mx-2 text-gray-600 rounded hover:bg-primary-100 hover:text-white;
}
</style>
