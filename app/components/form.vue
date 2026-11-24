

<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, Field as VeeField } from 'vee-validate'
import { z } from 'zod'

const formSchema = toTypedSchema(
    z.object({
      title: z
          .string()
          .min(1, 'Bug title must be at least 5 characters.'),
      description: z
          .string()
          .min(20, 'Description must be at least 20 characters.'),
    }),
)

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: '',
    description: '',
  },
})


const onSubmit = handleSubmit((data) => {
  console.log("test")
})

const form = ref({
  nom: '',
  prenom: '',
  mail: '',
  tel: '',
  message: ''
})
//
// async function submit () {
//   const { body } = await $fetch('/api/contact', {
//     method: 'post',
//     body: {},
//   })
// }
</script>

<template>
  <form class="grid grid-cols-2 gap-4" @submit="onSubmit">
    <VeeField v-slot="{ componentField, errors }" name="title">
      <div class="input">
        <label for="nom" >Nom :</label>
        <input id="nom" type="text" v-bind="componentField"/>
        {{errors}}
      </div>
    </VeeField>

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

    <button class="cta" type="submit">Envoyer un message</button>
  </form>
</template>

<style>
@reference "../assets/css/main.css";

.input{
  @apply flex flex-col w-full text-bleu font-semibold
}
.input input, .input textarea{
  @apply w-full px-2 py-2 border-bleu border-2 rounded-lg bg-white
}

.cta {
  @apply bg-rose text-white p-3 rounded-2xl col-span-2 hover:bg-rose/80
}
</style>