<script setup lang="ts">
import './CreateNote.css';
import { ref, watch } from 'vue';

const props = defineProps({
    employer: String,
    lastEdit: String,
    notes: String,
    type: Number,
    isSelected: Boolean,
});

const emit = defineEmits<{
    (e: 'cancelCreate'): void
}>()


const employerName = ref('');
const noteDescription = ref('');

</script>
<template>
    <div class="create-note">
        <div class="create-content">
            <input class="form-control" type="text" v-model="employerName" placeholder="Insert employer's name">
            <textarea class="form-control" rows="10" v-model="noteDescription" placeholder="Note content"></textarea>
            <span class="remaining-characters"
                :class="{ 'error-hint': ((noteDescription == undefined || noteDescription == '') && (500 - noteDescription.length) < 0) }">
                {{ noteDescription ? (500 - noteDescription.length) : 500 }} characters remaining</span>
            <div class="action-buttons">
                <button class="btn btn-light text-dark cancel-btn fw-medium" @click="emit('cancelCreate')">Cancel Create
                </button>
                <button class="btn btn-dark save-btn"
                    :disabled="((noteDescription == undefined || noteDescription == '') && (500 - noteDescription.length) < 0)">Update
                    Note
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>