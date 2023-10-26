<script setup>
  import Layout from './layouts/Master.vue'
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Layout>

    <template v-slot:header>
        <Header></Header>
    </template>

      <Main></Main>
  
    <template v-slot:footer>
        <Footer></Footer>
    </template>
 
  </Layout>
</template>

<style scoped>
      
</style>
