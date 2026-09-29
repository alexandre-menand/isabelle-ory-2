<template>
  <div>
    <Nav />
    <!-- header du site -->
    <header class="bg-[url('/img/photos/header-bg.jpg')] h-screen flex flex-col justify-center items-center bg-top bg-cover">
      <div class="flex flex-col items-center justify-center mt-16">
        <!-- image header -->
        <div>
          <img src="/img/logos/logo-header.png" alt="" class="w-96"/>
        </div>

        <!-- cta du header -->
        <div class="grid grid-cols-3 gap-x-4 mt-12">
          <NuxtLink class="btn-header"><img src="/img/icons/icone-pin-rose.png" alt="" class="h-8">20 Av. Gabriel Dordain, 18400 Saint-Florent-sur-Cher</NuxtLink>

          <NuxtLink class="btn-header text-rose">UNIQUEMENT SUR RENDEZ-VOUS</NuxtLink>

          <NuxtLink class="btn-header"><img src="/img/icons/icone-tel-rose.png" alt="" class="h-8">06 70 70 72 40</NuxtLink>
        </div>
        <div>
          <p class="text-white mt-4 text-chaire font-bold text-sm">Informations légales - N° SIRET : 489 875 294 00022</p>
        </div>
      </div>
    </header>
    <main>
      <section class=" container-layout gap-16 my-32 flex items-end">
        <div class="space-y-12 w-1/2 ">
          <h1 class="text-4xl text-center text-rose font-bold font-display">Les Fascias</h1>
          <p class="text-bleu">
            Les fascias sont les enveloppes de tous nos organes, nos viscères nos tendons, nos muscles, nos os, nos veines, nos artères, nos nerfs et sont reliés les uns aux autres. Ils sont
            formés de tissu élastique qui laisse passer l’énergie et le sang. Ils jouent un rôle de transmission des informations.
          </p>
          <p class="text-bleu">
            Les fascias enregistrent les chocs physiques et émotionnels, et se densifient. Tout ce qui
            n’est pas exprimé, s’imprime dans le corps. Les fascias sont la trame de la vie. Ces
            blocages perturbent les fascias et déclenchent des symptômes divers tels que douleurs
            musculaires ou tendineuses, dysfonctionnements viscéraux, perturbations du sommeil,
            sensation de mal être…
          </p>
          <p class="text-bleu">
            Le physique et le psychologique sont indissociables et donc chaque organe a une fonction
            physique mais également émotionnelle. C’est pourquoi notre travail porte sur les fascias
            pour la partie physique, mais pour la partie émotionnelle il s’oriente sur les méridiens et les
            centres énergétiques du corps de la médecine chinoise.
          </p>
        </div>
        <div class="w-1/2">
          <img src="/img/photos/feuille-comp.png" />
        </div>

      </section>

      <section class=" container-layout gap-16 my-32 flex items-center flex-row-reverse">
        <div class="space-y-12 w-1/2 ">
          <h1 class="text-4xl text-center text-vert font-bold font-display">Technique de soins</h1>
          <p class="text-bleu">
            Notre pratique consiste à effectuer un toucher doux et profond, sans manipulation afin de détendre les fascias densifiés et de réharmoniser l’énergie du corps. Il nous faut identifier l’origine du dysfonctionnement du corps et redonner l’énergie aux éléments déficients.
          </p>
          <p class="text-bleu">
            Cette méthode permet de rééquilibrer le corps et l’esprit. Il faut souvent attendre plusieurs jours avant que le corps s’équilibre. <strong class="font-bold">Nos soins restent complémentaires au traitement médical et ne s’y substituent en aucun cas.</strong>
          </p>
        </div>
        <div class="w-1/2">
          <img src="/img/photos/zen-comp.png" />
        </div>

      </section>

      <section id="contact" class="py-32 bg-cover bg-[url('/img/photos/gouutte-comp.jpg')] bg-right-bottom">

        <div class="container-layout lg:grid lg:grid-cols-2 lg:gap-16">
          <div class="space-y-8">
            <h3 class="lg:text-4xl text-3xl mb-6 font-display font-bold text-rose">Me joindre</h3>
            <div class="flex items-center space-x-2"><img src="/web/20240329104353im_/https://isabelleory.fr/_nuxt/icone-pin-rose.f42daea1.png" alt="" class="h-8"><span> 7 rue Bascoulard, 18290, Civray</span></div><div class="flex items-center space-x-2"><img src="/web/20240329104353im_/https://isabelleory.fr/_nuxt/icone-tel-rose.6384c666.png" alt="" class="h-8"><span>06 70 70 72 40</span></div><div class="text-rose font-bold"> UNIQUEMENT SUR RENDEZ-VOUS </div><div class="w-32"><img src="/web/20240329104353im_/https://isabelleory.fr/_nuxt/logo-reduit.1595fea1.png" alt=""></div></div>

          <div>
            <h3 class="lg:text-4xl text-3xl mb-6 font-display font-bold text-rose">Envoyez-moi un message</h3>
            <Form />
          </div>
        </div><
      </section>
    </main>
  </div>
</template>

<style>
@reference "~/assets/css/main.css";
.btn-header{
  @apply bg-chaire flex  items-center px-8 py-4 justify-center text-bleu font-semibold rounded-lg

}
</style>
