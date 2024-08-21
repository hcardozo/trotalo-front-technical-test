<script setup lang="ts">
import './EditNote.css';
import IconDelete from '../icons/IconDelete.vue';
import IconEdit from '../icons/IconEdit.vue';
import { ref, watch } from 'vue';
import { formatDate } from '@/classes/date-util';

const props = defineProps({
    employer: String,
    lastEdit: String,
    notes: String,
    type: Number,
    isSelected: Boolean,
});


let editMode = ref(false);


const noteDescription = ref(props.notes);

watch(() => props.notes, (newVal) => {
    noteDescription.value = newVal;
}, { immediate: true });


</script>
<template>
    <div class="edit-note">
        <div class="manage-buttons">
            <button class="btn border border-danger text-danger fw-medium">
                <IconDelete /> Delete Note
            </button>
            <button v-if="!editMode" @click="editMode = true" class="btn btn-dark text-white">
                <IconEdit /> Edit
            </button>
        </div>

        <div class="edit-header">
            <span class="employer-name fw-bold p-0">
                {{ employer }}
            </span>
            <span class="date">
                {{ formatDate(lastEdit) }}
            </span>
        </div>

        <div v-if="!editMode" class="description">
            {{ notes }}
        </div>

        <div v-if="editMode" class="edit-content">
            <textarea class="form-control" rows="10" v-model="noteDescription" placeholder="Note content"></textarea>
            <span class="remaining-characters fw-bold"
                :class="{ 'error-hint': ((noteDescription == undefined || noteDescription == '') || (500 - noteDescription.length) < 0) }">
                {{ noteDescription
                    ?
                    (500 - noteDescription.length) : 500 }} characters
                remaining</span>
            <div class="action-buttons">
                <button class="btn btn-light text-dark cancel-btn fw-medium" @click="editMode = false">Cancel
                    Edit
                </button>
                <button class="btn btn-dark save-btn"
                    :disabled="((noteDescription == undefined || noteDescription == '') || (500 - noteDescription.length) < 0)">Update
                    Note
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>