<route lang="yaml">
meta:
  title: Teste
  icon: dashboard
</route>

<script setup lang="ts">
const pizzaStore = useStore('pizza')

onMounted(() => {
  console.log('montou')
})

let nonReactivePizza = {
  name: ''
}

const pizza = ref({
  name: ''
})

watch(pizza, (value) => {
  console.log('atualizou')
  console.log(value)
}, {
  deep: true
})

</script>

<template>
  <div class="
    tw-border
    tw-p-6
  ">
    <h1>Teste</h1>
  </div>

  <div>
    <w-button @click="nonReactivePizza.name = 'opa'">
      Não reativo
    </w-button>
    <w-button @click="pizza.name = 'aew'">
      Reativo
    </w-button>
  </div>

  <pre>{{ nonReactivePizza }}</pre>
  <pre>{{ pizza }}</pre>
</template>
