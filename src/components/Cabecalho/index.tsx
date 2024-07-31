import styled from 'styled-components'

const Title = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

function Cabecalho() {
  return (
    <>
      <Title>
        <h1>EBAC Jobs</h1>
      </Title>
    </>
  )
}

export default Cabecalho
