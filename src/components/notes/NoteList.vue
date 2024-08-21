<script setup lang="ts">
import './NoteList.css';
import { ref } from 'vue';
import { } from "@/interfaces/Note";
import type { Note } from '@/interfaces/Note';
import ItemNoteList from "./ItemNoteList.vue";
defineProps({
    data: Array<Note>,
})

const emit = defineEmits<{
    (e: 'selectedNote', note: Note): void
}>();

const selectedDivIndex = ref<number | null>(null);

const selectNote = (item: Note, index: number) => {
    selectedDivIndex.value = index;
    emit('selectedNote', item);
};

</script>

<template>
    <div class="section custom-scrollbar">

        <template v-if="data && data.length > 0" v-for="(item, index)  in data">
            <ItemNoteList :title="(item.employer as string)" :last-edit="(item.lastEdit as string)"
                :description="(item.notes as string)" :index="index" @click="selectNote(item, index)"
                :is-selected="selectedDivIndex == index" />
        </template>
    </div>
</template>