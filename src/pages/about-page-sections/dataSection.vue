<script setup lang="ts">
import { ref, watch, onBeforeMount, onMounted } from "vue";

const props = defineProps([]);
const tB = ref("pages.about-page.data.");
</script>
<template>
  <h1>{{ $t("pages.about-page.data.header") }}</h1>
  <p>PLACEHOLDER INTRODUCTION DATA</p>
  <div>
    <h1>{{ $t(tB + "overview.header") }}</h1>
    <p>{{ $t(tB + "overview.t1") }}</p>
    <p>{{ $t(tB + "overview.t2") }}</p>
    <p>{{ $t(tB + "overview.t3") }}</p>
    <p>{{ $t(tB + "overview.t4") }}</p>
    <p>{{ $t(tB + "overview.t5") }}</p>
    <p>{{ $t(tB + "overview.t6") }}</p>
    <p>{{ $t(tB + "overview.t7") }}</p>
  </div>
  <div>
    <h1>{{ $t(tB + "status.header") }}</h1>
    <p>{{ $t(tB + "status.t1") }}</p>
  </div>

  <div>
    <h1>{{ $t(tB + "provenance.header") }}</h1>
    <p>{{ $t(tB + "provenance.t1") }}</p>
    <div class="ul-wrapper">
      <ul>
        <li>{{ $t(tB + "provenance.t1-l1") }}</li>
        <li>{{ $t(tB + "provenance.t1-l2") }}</li>
        <li>{{ $t(tB + "provenance.t1-l3") }}</li>
      </ul>
    </div>
    <h2>{{ $t(tB + "provenance.h-overview") }}</h2>
    <h3>{{ $t(tB + "provenance.overview-sh1") }}</h3>
    <p>{{ $t(tB + "provenance.d1-t1") }}</p>
    <p>{{ $t(tB + "provenance.d1-t2") }}</p>
    <div class="ul-wrapper">
      <ul>
        <li>{{ $t(tB + "provenance.d1-l1") }}</li>
        <li>{{ $t(tB + "provenance.d1-l2") }}</li>
      </ul>
    </div>
    <p>{{ $t(tB + "provenance.d1-t3") }}</p>
    <p>{{ $t(tB + "provenance.d1-t4") }}</p>

    <p>{{ $t(tB + "provenance.d1-t5") }}</p>

    <p>{{ $t(tB + "provenance.d1-t6") }}</p>
    <div class="ul-wrapper">
      <ul>
        <li>
          <span>{{ $t(tB + "provenance.d1-l1-1") }}</span>
          <span>{{ $t(tB + "provenance.d1-l1-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d1-l2-1") }}</span>
          <span>{{ $t(tB + "provenance.d1-l2-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d1-l3-1") }}</span>
          <p>{{ $t(tB + "provenance.d1-l3-2") }}</p>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d1-l4-1") }}</span>
          <span>{{ $t(tB + "provenance.d1-l4-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d1-l5-1") }}</span>
          <span>{{ $t(tB + "provenance.d1-l5-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d1-l6-1") }}</span>
          <span>{{ $t(tB + "provenance.d1-l6-2") }}</span>
        </li>
      </ul>
    </div>

    <h3>{{ $t(tB + "provenance.overview-sh2") }}</h3>

    <p>{{ $t(tB + "provenance.d2-t1") }}</p>
    <div class="ul-wrapper">
      <ul>
        <li>{{ $t(tB + "provenance.d2-l1") }}</li>
        <li>{{ $t(tB + "provenance.d2-l2") }}</li>
      </ul>
    </div>
    <p>{{ $t(tB + "provenance.d2-t2") }}</p>
    <p>{{ $t(tB + "provenance.d2-t3") }}</p>
    <p>{{ $t(tB + "provenance.d2-t4") }}</p>

    <div class="ul-wrapper">
      <ul>
        <li>
          <span>{{ $t(tB + "provenance.d2-t4-l1-1") }}</span
          ><span>{{ $t(tB + "provenance.d2-t4-l1-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d2-t4-l2-1") }}</span
          ><span>{{ $t(tB + "provenance.d2-t4-l2-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d2-t4-l3-1") }}</span
          ><span>{{ $t(tB + "provenance.d2-t4-l3-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d2-t4-l4-1") }}</span
          ><span>{{ $t(tB + "provenance.d2-t4-l4-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d2-t4-l5-1") }}</span
          ><span>{{ $t(tB + "provenance.d2-t4-l5-2") }}</span>
        </li>
      </ul>
    </div>

    <h3>{{ $t(tB + "provenance.overview-sh3") }}</h3>
    <p>{{ $t(tB + "provenance.d3-t1") }}</p>
    <p>{{ $t(tB + "provenance.d3-t2") }}</p>
    <p>{{ $t(tB + "provenance.d3-t3") }}</p>
    <p>{{ $t(tB + "provenance.d3-t4") }}</p>
    <div class="ul-wrapper">
      <ul>
        <li>
          <span>{{ $t(tB + "provenance.d3-l1-1") }}</span
          ><span>{{ $t(tB + "provenance.d3-l1-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d3-l2-1") }}</span
          ><span>{{ $t(tB + "provenance.d3-l2-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d3-l3-1") }}</span
          ><span>{{ $t(tB + "provenance.d3-l3-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d3-l4-1") }}</span
          ><span>{{ $t(tB + "provenance.d3-l4-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d3-l5-1") }}</span
          ><span>{{ $t(tB + "provenance.d3-l5-2") }}</span>
        </li>
        <li>
          <span>{{ $t(tB + "provenance.d3-l6-1") }}</span
          ><span>{{ $t(tB + "provenance.d3-l6-2") }}</span>
        </li>
      </ul>
    </div>
  </div>

  <div>
    <h1>{{ $t(tB + "status.header") }}</h1>
    <p>{{ $t(tB + "status.t1") }}</p>
    <p>PLACEHOLDER GRAPHIK BEARBEITUNGSSTAND</p>
  </div>
</template>
<style scoped>
.ul-wrapper {
  @apply pl-4;
}

ul {
  @apply pl-5;
}
h1,
h2,
h3 {
  @apply text-2xl my-8;
}
p {
  @apply py-2 pl-4;
}
li {
  @apply list-disc list-outside pl-4;
}

span {
  @apply block;
}
</style>
