<template>
  <div>
    <p class="card">
      阿斯顿发斯蒂芬
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
