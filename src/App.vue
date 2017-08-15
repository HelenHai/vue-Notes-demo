<template>
  <div id="app">
    <div class="main">
      <router-view name="ToolBar"></router-view>
      <router-view name="NoteList"></router-view>
      <router-view name="Content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './assets/style/public.css';
</style>
