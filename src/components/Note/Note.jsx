import styled from 'styled-components'
import useNote from '../../hooks/useNote'
import { useHistory } from 'react-router'

const NoteStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 5px;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  background: white;
  box-shadow: 0 12px 26px 0px rgba(16, 30, 115, 0.06);
  h3 {
    font-size: 18px;
  }
  .noteControllers {
    display: grid;
    grid-template-columns: repeat(2, 100px);
    gap: 15px;
  }
  .noteButtonEdit, .noteButtonDelete {
    border: none;
    color: white;
    border-radius: 20px;
    background-color: #04091E;
    cursor: pointer;
  }
  .noteButtonDelete {
    background-color: #ff0000ad;
  }
  .noteButtonEdit:hover {
    box-shadow: 0 12px 26px 0px rgba(16, 30, 115, 0.06);
  }
  .noteButtonDelete:hover {
    box-shadow: 0 12px 26px 0px rgba(16, 30, 115, 0.06);
  }
`
const Note = ({ id, number, title, text }) => {
  const history = useHistory()
  const { deleteNote } = useNote()
  return (
    <NoteStyled id={id}>
      <h3>{`${number}. ${title}`}</h3>
      <p>{text}</p>
      <div className="noteControllers">
        <button
          type="button"
          className="noteButtonEdit"
          onClick={() => history.push(`/edit/${id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="noteButtonDelete"
          onClick={() => deleteNote(id)}
        >
          Eliminar
        </button>
      </div>
    </NoteStyled>
  )
}

export default Note
