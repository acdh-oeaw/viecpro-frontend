// landing page, should be the default route on loading the app. // reachable
via the home navlink in the main navbar and by clicking on the viecpro logo in
the main navbar
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-screen top-20 bg-white main-container">
    <h1 class="text-5xl" id="header-viecpro">
      {{ $t("words.title") }}
    </h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nulla
      sunt sed iusto unde, est error doloremque facere eos asperiores aspernatur
      dolor quasi esse at tenetur earum quas neque. Doloribus, laudantium. Neque
      aspernatur nostrum, id amet ea exercitationem in architecto, quas ratione
      ipsum animi sed impedit blanditiis accusamus illum labore similique
      voluptatum expedita eos praesentium perferendis fuga? Exercitationem,
      distinctio, harum reprehenderit sit culpa deserunt non, enim consequatur
      praesentium maxime laborum at vitae ad aut quibusdam. Sapiente laboriosam
      tempore est nobis voluptatem voluptatibus aut repudiandae officiis
      necessitatibus, ducimus perferendis voluptatum, deserunt, culpa eveniet
      sequi totam voluptas mollitia nostrum? Voluptatum, obcaecati similique!
    </p>
    <div class="flex-col" id="section-database">
      <h1 class="text-5xl">Database</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ab
        deserunt quas dignissimos voluptatem totam veniam! Sint modi iure esse
        obcaecati itaque omnis animi vel, voluptatem et dolor dicta laboriosam
        architecto nihil explicabo iste quo pariatur nisi doloribus, adipisci,
        aut ratione. Doloremque dolorum, mollitia maiores aliquid illo sapiente
        tenetur distinctio, fuga et, commodi voluptatem vitae tempore eligendi
        a? Atque, veritatis praesentium. Aliquid ex possimus laborum, pariatur
        sunt doloribus voluptates officiis, esse rerum accusantium cum
        blanditiis illo ipsa dolorum facere, quidem quas ea unde omnis nemo!
        Quaerat fugiat sed hic incidunt veniam. Quos, odio repellendus. Voluptas
        delectus, eum adipisci corporis est ipsam neque aliquid repudiandae
        assumenda quia aperiam commodi quibusdam dolore voluptate excepturi quae
        nobis dolor saepe iste placeat velit. Illo quam explicabo molestias
        quisquam vel mollitia doloribus sunt error tenetur, velit ad fugiat
        incidunt beatae! Velit veritatis quo blanditiis laudantium? Incidunt
        doloribus ex officiis aliquid, rerum esse nostrum non cupiditate!
      </p>
      <div class="flex justify-center content-center py-10">
        <routerLink to="search" class="bg-primary-100 rounded-xl p-2 text-white"
          >Database</routerLink
        >
      </div>
    </div>

    <h1 class="text-5xl">Project</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad nihil
      repellat ullam nam voluptate, quae repudiandae veniam quibusdam accusamus,
      rerum natus? Dolorum at ea autem cumque, amet voluptatem mollitia,
      dignissimos rerum debitis reprehenderit nihil facere voluptates esse
      praesentium sunt quo libero tempore consequuntur. Dicta sed nam tenetur
      nemo dolore doloribus. Quia quos sequi eius sapiente iste dignissimos
      inventore? Inventore accusantium blanditiis sunt enim veritatis
      consectetur tenetur dolores quia labore repellat quisquam suscipit magnam
      temporibus pariatur non eveniet, odit veniam! Eveniet facere quisquam
      omnis adipisci? Officia accusantium deleniti sunt?
    </p>

    <h1 class="text-5xl">Project</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad nihil
      repellat ullam nam voluptate, quae repudiandae veniam quibusdam accusamus,
      rerum natus? Dolorum at ea autem cumque, amet voluptatem mollitia,
      dignissimos rerum debitis reprehenderit nihil facere voluptates esse
      praesentium sunt quo libero tempore consequuntur. Dicta sed nam tenetur
      nemo dolore doloribus. Quia quos sequi eius sapiente iste dignissimos
      inventore? Inventore accusantium blanditiis sunt enim veritatis
      consectetur tenetur dolores quia labore repellat quisquam suscipit magnam
      temporibus pariatur non eveniet, odit veniam! Eveniet facere quisquam
      omnis adipisci? Officia accusantium deleniti sunt?
    </p>

    <h1 class="text-5xl">Project</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad nihil
      repellat ullam nam voluptate, quae repudiandae veniam quibusdam accusamus,
      rerum natus? Dolorum at ea autem cumque, amet voluptatem mollitia,
      dignissimos rerum debitis reprehenderit nihil facere voluptates esse
      praesentium sunt quo libero tempore consequuntur. Dicta sed nam tenetur
      nemo dolore doloribus. Quia quos sequi eius sapiente iste dignissimos
      inventore? Inventore accusantium blanditiis sunt enim veritatis
      consectetur tenetur dolores quia labore repellat quisquam suscipit magnam
      temporibus pariatur non eveniet, odit veniam! Eveniet facere quisquam
      omnis adipisci? Officia accusantium deleniti sunt?
    </p>

    <h1 class="text-5xl">Project</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad nihil
      repellat ullam nam voluptate, quae repudiandae veniam quibusdam accusamus,
      rerum natus? Dolorum at ea autem cumque, amet voluptatem mollitia,
      dignissimos rerum debitis reprehenderit nihil facere voluptates esse
      praesentium sunt quo libero tempore consequuntur. Dicta sed nam tenetur
      nemo dolore doloribus. Quia quos sequi eius sapiente iste dignissimos
      inventore? Inventore accusantium blanditiis sunt enim veritatis
      consectetur tenetur dolores quia labore repellat quisquam suscipit magnam
      temporibus pariatur non eveniet, odit veniam! Eveniet facere quisquam
      omnis adipisci? Officia accusantium deleniti sunt?
    </p>
  </div>
</template>
<style scoped>
div.main-container {
  padding-top: 5rem;
}

h1,
p {
  margin: 0 20rem;
}

h1 {
  margin-bottom: 2rem;
  margin-top: 4rem;
  @apply text-gray-600;
}

#header-viecpro {
  @apply text-black;
}

p {
  padding-left: 4rem;
  @apply text-gray-600;
}
</style>
