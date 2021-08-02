// Constants
const CREATE_NOTE = 'GET_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'

const initialState = {
  noteList: []
}

// Reducers
export const noteReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case CREATE_NOTE:
      return {...state, noteList: [...state.noteList, payload]}
    case DELETE_NOTE:
      const filteredNoteList = state.noteList.filter(note => note.id !== payload)
      return {...state, noteList: filteredNoteList}
    case UPDATE_NOTE:
      const listUpdated = state.noteList.filter(note => note.id !== payload.id)
      return {...state, noteList: [...listUpdated, payload]}
    default:
      return state
  }
}

// Actions
export function actionCreateNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}

export function actionDeleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

export function actionUpdateNote(noteUpdated) {
  return {
    type: UPDATE_NOTE,
    payload: noteUpdated
  }
}

