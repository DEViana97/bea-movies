import styled from 'styled-components'

export const ContainerWrapper = styled.div` 
display: flex; 
justify-content: center; 
align-items: center;
height: 100dvh;
background: ${props => props.theme.barbieTheme.selected} no-repeat bottom url('/wave.svg');
`
export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50vw; 
height: 70vh;
background: rgba(243, 113, 153, 0.6);
/* border-radius: 10px; */
/* box-shadow: 0 0 10px rgba(144,148,133,0.3); */
gap: 1rem;
z-index: 1;

/* background: rgba(243, 113, 153, 0.26); */
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.2px);
-webkit-backdrop-filter: blur(4.2px);
border: 1px solid rgba(243, 113, 153, 0.5);

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
