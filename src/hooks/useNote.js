import { useSelector , useDispatch } from 'react-redux'
import { actionCreateNote, actionDeleteNote, actionUpdateNote } from '../redux/noteDucks'

const useNote = () => {
  const dispatch = useDispatch()
  const noteList = useSelector(store => store.note.noteList)

  const addNote = (noteObject) => {
    dispatch(actionCreateNote(noteObject))
  }

  const deleteNote = (id) => {
    dispatch(actionDeleteNote(id))
  }

  const updateNote = (noteUpdatedObject) => {
    dispatch(actionUpdateNote(noteUpdatedObject))
  }

  const getNoteById = (id) => noteList.find(note => note.id === Number(id))

  return {
    noteList,
    addNote,
    deleteNote,
    updateNote,
    getNoteById
  }
}

export default useNote