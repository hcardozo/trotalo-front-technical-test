<script setup lang="ts">
import { formatDate } from "@/classes/date-util";
import "./ItemNoteList.css"
const propItem = defineProps({
    title: String,
    lastEdit: String,
    description: String,
    isSelected: Boolean,
})
</script>

<template>
    <div class="note-item" :class="{ 'note-selected': isSelected }">
        <h5 class="employer-name fw-bold">{{ title }}</h5>
        <span class="date">Last Edit: {{ formatDate(lastEdit) }}</span>
        <p class="note-text">{{ description }}</p>
        <span class="delete fw-medium">Delete</span>
    </div>
</template>