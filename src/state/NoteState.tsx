import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';
import { INote, INoteState } from '../interfaces/global';

const useNoteStore = create<INoteState>()(
    devtools(
        persist(
            (set) => ({
                notes: [],
                add: (note) => set((state) => {
                    let temp = state.notes;
                    note.id = uuidv4();
                    temp.push(note);
                    return { notes: temp };
                }),
                update: (note) => set((state) => {
                    const temp = state.notes.map((item) => {
                        if (item.id === note.id) {
                            return note;
                        }
                        return item;
                    })
                    return { notes: temp };
                }),
                delete: (note) => set((state) => {
                    let temp: INote[] = [];
                    for (const item of state.notes) {
                        if (note.id !== item.id) temp.push(item)
                    }
                    return { notes: temp };
                }),
            }),
            {
                name: 'notes-storage',
            }
        )
    )
)

export { useNoteStore }
export type { INote, INoteState }