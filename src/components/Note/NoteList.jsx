import styled from 'styled-components'
import useNote from '../../hooks/useNote'
import Note from './Note'

const NoteListStyled = styled.div`
  h2 {
    font-size: 30px;
    text-align: center;
  }
  .noteListContainer {
    display: grid;
    grid-auto-flow: row;
    gap: 20px;
    margin-top: 15px;
  }
  .paragraphListEmpty {
    text-align: center;
  }
`
const NoteList = () => {
  const { noteList } = useNote()
  const noteListHTML = noteList.map((note, index) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        number={index + 1}
        title={note.title}
        text={note.text}
      />
    )
  })
  return (
    <NoteListStyled>
      <h2>Lista de notas</h2>
      <div className="noteListContainer">
        {
          noteList.length
            ? noteListHTML
            : <p className="paragraphListEmpty">Aún no se ah creado ninguna nota</p>
        }
      </div>
    </NoteListStyled>
  )
}

export default NoteList
