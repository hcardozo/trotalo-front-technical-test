<script setup lang="ts">
import './NoteHeader.css'
import { NOTE_TYPE } from '../../enums/note-types.enum';
import { computed } from 'vue'
import IconAdd from '../icons/IconAdd.vue';
const props = defineProps({
    noteType: Number,
    length: Number
})

const emit = defineEmits<{
    (e: 'createNote'): void
}>();

var NoteEnum = NOTE_TYPE;
const noteTypeLabel = computed(() => props?.noteType !== undefined ? NoteEnum[props?.noteType] : '');

</script>

<template>
    <div class="header">
        <div class="resume">
            <h4>
                {{ noteTypeLabel.toLowerCase() }} Notes
            </h4>
            <span class="length">{{ length }}</span>
        </div>
        <div class="buttons">
            <button class="btn btn-dark" @click="emit('createNote')">
                <IconAdd /> Add {{ noteType !== 0 ? noteTypeLabel.toLowerCase() : '' }} Note
            </button>
        </div>
    </div>

</template>