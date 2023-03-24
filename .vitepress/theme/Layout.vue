<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-before>
      <p class="mb-8 ml-8 text-orange-500 font-bold">My custom sidebar top content</p>
    </template>
  </Layout>
</template>