import styled from 'styled-components'

export const ContainerWrapper = styled.div` 
display: flex; 
justify-content: center; 
align-items: center;
height: 100vh;
background: ${props => props.theme.chihiroBackground.default} no-repeat bottom url('/wave.svg');
`
export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50vw; 
height: 70vh;
background: ${props => props.theme.chihiroBackground.secondary};
border-radius: 10px;
box-shadow: 0 0 10px rgba(144,148,133,0.3);
gap: 1rem;
z-index: 1;

& form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  padding: 2rem;
  border-radius: 8px;
}

@media (max-width: 768px) {
  width: 95vw;
}

`
