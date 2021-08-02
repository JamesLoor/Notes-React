import styled from 'styled-components'
import Header from './Header'

const LayoutStyled = styled.div`
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 15px;
    align-items: center;
  }
`
const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header/>
      <main className="container">
        {children}
      </main>
    </LayoutStyled>
  )
}

export default Layout
