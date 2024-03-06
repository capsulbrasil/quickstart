<script setup lang="ts">
const teste = await aeria.pizza.shampoo123.POST({
  name: 'cu',
  type: 'dog',
})
</script>

<template>
  <ul>
    <li
      v-for="item in teste"
      :key="item.name"
    >
      {{ item.name }}
    </li>
  </ul>
  <h1>Seja bem-vindo</h1>
</template>
