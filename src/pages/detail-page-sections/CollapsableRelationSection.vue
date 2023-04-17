<script setup lang="ts">
import useOpenDetail from '@/composables/useOpenDetail';
const props = defineProps(['header', 'data', 'isCollapsed']);
const orderedKeys = ['relation_type', 'target.name', 'start_date', 'end_date'];
</script>
<template>
  <div class="border-2 rounded px-10">
    <div class="flex justify-between pr-10">
      <div>
        <h2
          class="my-auto py-5"
          :class="{ 'text-gray-300 cursor-not-allowed': !data, 'hover:cursor-pointer': data }"
          @click="
            () => {
              isCollapsed = !isCollapsed;
            }
          "
        >
          {{ header }}
        </h2>
      </div>
      <div>
        <button
          v-if="data"
          @click="
            () => {
              isCollapsed = !isCollapsed;
            }
          "
          class="my-auto py-5"
        >
          Toggle
        </button>
      </div>
    </div>
    <ul :class="{ hidden: isCollapsed }">
      <li v-for="el in data" :key="el.id">
        <div class="grid grid-cols-4 justify-items-start auto-cols-max">
          <template v-for="key in orderedKeys" :key="el + '_' + key">
            <!-- TODO: make this grid -->
            <span
              v-if="key === 'target.name'"
              class="hover:cursor-pointer"
              @click="useOpenDetail(el.target.model, el.target.object_id)"
            >
              {{ el['target']['name'] }}</span
            >
            <span v-else class="mx-2"> {{ el[key] }}</span>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
