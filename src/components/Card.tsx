import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { INote, IPropCard } from '../interfaces/global';
import { useNoteStore } from '../state/NoteState';
import { ChangeEvent, useState } from 'react';

function Card({ note }: IPropCard) {

    const noteState = useNoteStore((state) => state)

    const [cardNoteState, setCardNoteState] = useState<INote>(note);

    const handleUpdateHiddenCard = () => {
        noteState.update({ ...note, edit: !note.edit })
    }

    const handleUpdateCard = () => {
        noteState.update({ ...cardNoteState, edit: false })
    }

    const handleDeleteCard = () => {
        noteState.delete(note)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setCardNoteState({ ...cardNoteState, title: e.target.value })
    }

    const changeDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCardNoteState({ ...cardNoteState, desc: e.target.value })
    }

    const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setCardNoteState({ ...cardNoteState, date: e.target.value })
    }

    return (
        <div className="bg-[#00C39A] rounded-xl p-5 h-fit">
            <div className="flex items-center justify-between">
                {
                    note.edit ?
                        <input onChange={changeTitle} placeholder="Titulo..." type="text" className='px-1 rounded border-2 border-black bg-transparent font-bold text-xl w-full placeholder:text-black' value={cardNoteState.title} /> :
                        <p className="font-bold text-xl truncate">{cardNoteState.title}</p>
                }
                <button onClick={handleUpdateHiddenCard}>
                    {note.edit ? <CloseIcon /> : <EditIcon />}
                </button>
            </div>
            <div className="pt-3">
                {
                    note.edit ? 
                    <textarea placeholder='Descripción...' onChange={changeDesc} className='px-1 rounded border-2 border-black placeholder:text-black resize-none bg-transparent w-full' rows={3} value={cardNoteState.desc} /> :
                    <p className=''>{cardNoteState.desc}</p>
                }
            </div>
            <div>
                {
                    note.edit ? 
                    <input onChange={changeDate} value={cardNoteState.date} type="date" className='px-1 rounded border-2 border-black bg-transparent font-bold w-fit' /> :
                    <div className="flex space-x-2 justify-end pt-4">
                        <WatchLaterIcon />
                        <p className="font-bold">{cardNoteState.date}</p>
                    </div>
                }
            </div>
            {
                note.edit ? <div className='flex items-center pt-4 space-x-2'>
                    <button onClick={handleUpdateCard} className='flex items-center space-x-2 w-full rounded border-2 border-black py-1 px-1'>
                        <SaveAsIcon />
                        <p className='font-bold'>Guardar</p>
                    </button>
                    <button onClick={handleDeleteCard} className='flex items-center space-x-2 w-full rounded border-2 border-black py-1 px-1'>
                        <DeleteForeverIcon />
                        <p className='font-bold'>Eliminar</p>
                    </button>
                </div> : ''
            }
        </div>
    )
}

export { Card }