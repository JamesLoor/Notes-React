import styled from 'styled-components'
import NoteList from '../components/Note/NoteList'
import NoteForm from '../components/Note/NoteForm'

const HomeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  @media screen and (min-width:630px) {
    & {
      grid-template-columns: 1.8fr 2fr;
    }
  }

  @media screen and (min-width:768px) {
    & {
      grid-template-columns: 1fr 2fr;
    }
  }
`
const Home = () => {
  return (
    <HomeStyled>
      <NoteForm/>
      <NoteList/>
    </HomeStyled>
  )
}

export default Home
