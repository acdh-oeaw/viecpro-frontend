<script setup lang="ts">
import useOpenDetail from '@/composables/useOpenDetail';
const props = defineProps(['header', 'data', 'isCollapsed']);
const orderedKeys = ['relation_type', 'target.name', 'start_date', 'end_date'];
</script>
<template>
  <div
    class="border-2 rounded transition-all duration-200 ease-out"
    :class="{ 'shadow-md': data && !isCollapsed, 'shadow-0': !data || isCollapsed }"
  >
    <div
      class="flex justify-between px-10 font-light transition-all duration-100 ease-out"
      :class="{
        'bg-gray-100 border-b-2 border-gray-200 text-gray-900 hover:cursor-pointer ':
          data && !isCollapsed,
        'text-gray-400 hover:cursor-not-allowed': !data,
        'text-gray-800 hover:cursor-pointer': data && isCollapsed,
      }"
      @click="
        () => {
          if (data) {
            isCollapsed = !isCollapsed;
          }
        }
      "
    >
      <h2 class="py-2">
        {{ header }}
      </h2>
      <div>
        <button class="my-auto py-2" v-if="data">
          <i v-if="isCollapsed" class="fas fa-sm fa-arrow-down text-gray-400"></i>
          <i v-else class="fas fa-sm fa-arrow-up text-gray-500"></i>
        </button>
        <!-- <p v-else class="box text-gray-400 font-mono my-auto py-5">KEINE DATEN</p> -->
      </div>
    </div>
    <ul :class="{ hidden: isCollapsed }" class="flex-col px-10 my-4">
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
            <span v-else class="mr-2"> {{ el[key] }}</span>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
