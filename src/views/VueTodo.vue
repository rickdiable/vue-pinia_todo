<template>
  <div id="app">
    <div class="container">
      <p>123</p>
    </div>
  </div>
</template>

<script>
// import StatusNav from "@/components/StatusNav.vue";

export default {
  setup() {
    const number = 123;

    return {
      number,
    };
  },
};

</script>

<style>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
