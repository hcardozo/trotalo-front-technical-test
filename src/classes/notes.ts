import type { Note } from "@/interfaces/Note"

export default class NoteService {
    public getAllNotes(): any {
        // make axios http request
        return DATA_DEFAULT;
    }
}

const DATA_DEFAULT: Note[] = [
    {
        "employer": "Gidget",
        "lastEdit": "08/21/2024",
        "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting indLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and tyustry.",
        "type": 1
    },
    {
        "employer": "Acme Corp",
        "lastEdit": "07/15/2024",
        "notes": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "type": 2
    },
    {
        "employer": "Globex",
        "lastEdit": "06/20/2024",
        "notes": "It has survived not only five centuries, but also the leap into electronic typesetting.",
        "type": 3
    },
    {
        "employer": "Initech",
        "lastEdit": "05/30/2024",
        "notes": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
        "type": 1
    },
    {
        "employer": "Umbrella Corp",
        "lastEdit": "04/25/2024",
        "notes": "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "type": 2
    },
    {
        "employer": "Hooli",
        "lastEdit": "03/18/2024",
        "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "type": 3
    },
    {
        "employer": "Stark Industries",
        "lastEdit": "02/10/2024",
        "notes": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "type": 1
    },
    {
        "employer": "Wayne Enterprises",
        "lastEdit": "01/05/2024",
        "notes": "It has survived not only five centuries, but also the leap into electronic typesetting.",
        "type": 2
    },
    {
        "employer": "Wonka Industries",
        "lastEdit": "12/12/2023",
        "notes": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
        "type": 3
    },
    {
        "employer": "Soylent Corp",
        "lastEdit": "11/22/2023",
        "notes": "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "type": 1
    },
    {
        "employer": "Cyberdyne Systems",
        "lastEdit": "10/30/2023",
        "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "type": 2
    },
    {
        "employer": "Tyrell Corp",
        "lastEdit": "09/15/2023",
        "notes": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "type": 3
    },
    {
        "employer": "Oscorp",
        "lastEdit": "08/08/2023",
        "notes": "It has survived not only five centuries, but also the leap into electronic typesetting.",
        "type": 1
    },
    {
        "employer": "LexCorp",
        "lastEdit": "07/01/2023",
        "notes": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
        "type": 2
    },
    {
        "employer": "Aperture Science",
        "lastEdit": "06/10/2023",
        "notes": "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "type": 3
    },
    {
        "employer": "Black Mesa",
        "lastEdit": "05/05/2023",
        "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "type": 1
    },
    {
        "employer": "MomCorp",
        "lastEdit": "04/18/2023",
        "notes": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "type": 2
    },
    {
        "employer": "Planet Express",
        "lastEdit": "03/25/2023",
        "notes": "It has survived not only five centuries, but also the leap into electronic typesetting.",
        "type": 3
    },
    {
        "employer": "Vandelay Industries",
        "lastEdit": "02/14/2023",
        "notes": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
        "type": 1
    },
    {
        "employer": "Duff Beer",
        "lastEdit": "01/01/2023",
        "notes": "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "type": 2
    }
]