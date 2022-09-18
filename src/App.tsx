import LogoNotas from "./assets/notes.png"
import { Card } from "./components/Card";
import { useNoteStore } from "./state/NoteState";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function App() {

  const noteState = useNoteStore((state) => state)

  const addNote = () => {
    noteState.add({
      title:"Título...",
      desc:"Descripción...",
      date:"2022-09-18",
      edit:true
    })
  }

  return (
    <div>
      <div className="bg-[#000000] h-14 flex items-center space-x-2 pl-4">
        <img src={LogoNotas} className="h-8" />
        <p className="text-3xl text-white font-bold">Notas</p>
      </div>

      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {noteState.notes.map((note, index) => (
            <Card note={note} key={index}/>
          ))}
        </div>
      </div>
      <button onClick={addNote} className="drop-shadow-xl flex items-center space-x-2 rounded bg-[#C89AFE] px-4 py-2 fixed bottom-8 right-8">
        <AddCircleIcon />
        <p className="font-bold text-lg">Nuevo</p>
      </button>
    </div>
  )
}

export default App;