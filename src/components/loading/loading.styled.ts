import styled from 'styled-components'

export const LoadingCircle = styled.div`
width:50px;
  height:50px;
  border-radius:50%;
  background:conic-gradient(#0000 10%,#909485);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;
@keyframes s3 {to{transform: rotate(1turn)}}
`