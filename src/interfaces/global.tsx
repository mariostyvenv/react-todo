interface INote {
    id?: string,
    title: string,
    desc: string,
    date: string,
    edit: boolean
}

interface INoteState {
    notes: INote[],
    add: (note: INote) => void,
    update: (note: INote) => void,
    delete: (note: INote) => void
}

interface IPropCard {
    note: INote
}

export type { INote, INoteState, IPropCard }