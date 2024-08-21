import type { NOTE_TYPE } from "@/enums/note-types.enum";

export interface Note {
    employer: string,
    lastEdit: string,
    notes: string,
    type: NOTE_TYPE
}