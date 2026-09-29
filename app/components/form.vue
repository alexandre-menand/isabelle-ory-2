<script setup>
const form = ref({
  nom: '',
  prenom: '',
  mail: '',
  tel: '',
  message: ''
})

async function submit () {
  const { body } = await $fetch('/api/contact', {
    method: 'post',
    body: {},
  })
}
</script>

<template>
  <form class="grid grid-cols-2 gap-4">
    <div class="input">
      <label for="nom" >Nom :</label>
      <input id="nom" type="text" v-model="form.nom"/>
    </div>

    <div class="input">
      <label for="prenom" >Prénom :</label>
      <input id="prenom" type="text" v-model="form.prenom"/>
    </div>

    <div class="input">
      <label for="mail" >Adresse Mail :</label>
      <input id="mail" type="text" v-model="form.mail"/>
    </div>

    <div class="input">
      <label for="phone" >Téléphone :</label>
      <input id="phone" type="text" v-model="form.tel"/>
    </div>

    <div class="input">
      <label for="message" >Message :</label>
      <textarea id="message" type="text" v-model="form.message"/>
    </div>

    <button :click="submit()">Envoyer un message</button>
  </form>
</template>

<style>
@reference "../assets/css/main.css";

.input{
  @apply flex flex-col w-full text-bleu font-semibold
}
.input input, .input textarea{
  @apply w-full px-2 py-2 border-bleu border-2 rounded-lg
}
</style>