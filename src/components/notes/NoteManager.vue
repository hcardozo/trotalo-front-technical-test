<script setup lang="ts">
import './NoteManager.css';
import NoteHeader from './NoteHeader.vue';
import NoteList from './NoteList.vue';
import { NOTE_TYPE } from '../../enums/note-types.enum';
import NoteService from './../../classes/notes';
import type { Note } from '@/interfaces/Note';
import { ref } from 'vue';
import EditNote from './EditNote.vue';
import CreateNote from './CreateNote.vue';

defineProps()

var noteTypes = NOTE_TYPE;
const noteService = new NoteService();
const allNotes: Note[] = noteService.getAllNotes();
const assessmentNotes: Note[] = allNotes.filter((item: Note) => item.type == noteTypes.ASSESSMENT);
const generalNotes: Note[] = allNotes.filter((item: Note) => item.type == noteTypes.GENERAL);
const planningNotes: Note[] = allNotes.filter((item: Note) => item.type == noteTypes.PLANNING)

let noteToEdit = ref<Note>();
const showNote = (item: Note) => {
    console.log(item)
    noteToEdit.value = item;
    containerType.value = 'editNote';
};
let containerType = ref('void');
</script>

<template>
    <div class="manager">
        <div class="titles">
            <h3 class="title fx-medium">Acme Brick Employer Notes</h3>
            <span class="fw-bold text-dark view-details"> View Employer Details </span>
        </div>

        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="all" data-bs-toggle="tab" data-bs-target="#all-tab" type="button"
                    role="tab" aria-controls="assessment" aria-selected="true">All</button>

                <button class="nav-link" id="assessment" data-bs-toggle="tab" data-bs-target="#general-tab"
                    type="button" role="tab" aria-controls="general" aria-selected="false">General</button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#assessment-tab"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Assessment</button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#planning-tab"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Planning</button>
            </div>
        </nav>
        <div class="content">

            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane show active" id="all-tab" role="tabpanel" aria-labelledby="all-tab">
                    <NoteHeader :noteType="noteTypes.ALL" :length="allNotes?.length"
                        @createNote="containerType = 'createNote'" />
                    <NoteList :data="allNotes" @selectedNote="showNote" />
                </div>

                <div class="tab-pane" id="general-tab" role="tabpanel" aria-labelledby="general-tab">
                    <NoteHeader :noteType="noteTypes.GENERAL" :length="generalNotes?.length"
                        @createNote="containerType = 'createNote'" />
                    <NoteList :data="generalNotes" @selectedNote="showNote" />
                </div>

                <div class="tab-pane" id="assessment-tab" role="tabpanel" aria-labelledby="assessment-tab">
                    <NoteHeader :noteType="noteTypes.ASSESSMENT" :length="assessmentNotes?.length"
                        @createNote="containerType = 'createNote'" />
                    <NoteList :data="assessmentNotes" @selectedNote="showNote" />
                </div>

                <div class="tab-pane" id="planning-tab" role="tabpanel" aria-labelledby="planning-tab">
                    <NoteHeader :noteType="noteTypes.PLANNING" :length="planningNotes?.length"
                        @createNote="containerType = 'createNote'" />
                    <NoteList :data="planningNotes" @selectedNote="showNote" />
                </div>
            </div>

            <div class="container-note-preview">
                <div class="void" v-if="containerType == 'void'">Please select a note from the list.</div>
                <div v-if="containerType == 'createNote'">
                    <CreateNote @cancelCreate="containerType = 'void'" />
                </div>
                <div v-if="containerType == 'editNote'">
                    <EditNote v-bind="noteToEdit" />
                </div>
            </div>
        </div>
    </div>
</template>
