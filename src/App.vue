<script setup lang="ts">
import NoteManager from './components/notes/NoteManager.vue'
</script>

<template>
  <header>

  </header>

  <main>
    <div class="sidebar">

    </div>
    <div class="content">
      <NoteManager />
    </div>

  </main>
</template>

<style scoped>
header {
  height: 61px;
  background-color: #2e0c59;
}

main {
  display: flex;
  height: 100%;
}

.sidebar {
  min-width: 228px;
}

.content {
  width: 100%;
}
</style>
