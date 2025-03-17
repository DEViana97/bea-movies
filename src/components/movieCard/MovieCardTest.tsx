// import React from 'react';
// import styled from 'styled-components';
import { Movie } from '../../interface/movie';
import StarRating from '../starRating/StarRating';

interface CardProps {
  movies: Movie[];
}

// const Card = ({ movies }: CardProps) => {
//   return (
//     <StyledWrapper>
//       {movies.map((movie) => (
//         <div key={movie.id} className="card">
//           {/* Div separada para a imagem de fundo */}
//           <div className="card-bg" style={{ backgroundImage: `url(${movie.image})` }} />

//           <div className="top-card" />
//           <div className="bottom-card">
//             <div className="card-content">
//               <span className="card-title">{movie.name}</span>
//               <p className="card-txt">{movie.status ? "Assistido" : "Não assistido"}</p>
//               <StarRating disabled rating={Math.floor(movie.starRating)} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;

//   .card {
//     position: relative;
//     width: 190px;
//     height: 254px;
//     border-radius: 20px;
//     box-shadow: 0px 5px 5px #313131;
//     overflow: hidden;
//     background-color: transparent;
//   }

//   /* A imagem fica em uma camada separada */
//   .card-bg {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     z-index: 0; /* Mantém no fundo */
//     filter: brightness(0.8); /* Opcional: escurece a imagem para melhor contraste */
//   }

//   .top-card {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 65%;
//     background-color: rgba(0, 0, 0, 0.2); /* Ajuste de opacidade */
//     z-index: 1;
//     transition: height 0.3s ease;
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;
//   }

//   .bottom-card {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 35%;
//     background-color: rgba(243, 113, 153, 0.7);
//     z-index: 1;
//     transition: height 0.3s ease;
//     border-top-right-radius: 20px;
//     border-bottom-left-radius: 20px;
//     border-bottom-right-radius: 20px;
//   }

//   .bottom-card::before {
//     content: "";
//     position: absolute;
//     background-color: transparent;
//     bottom: 89px;
//     height: 50px;
//     width: 175px;
//     transition: bottom 0.3s ease;
//     border-bottom-left-radius: 20px;
//   }

//    p + div {
//     margin-top: 15%;
//   }

//   .card-content {
//     padding-top: 13%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: #fff;
//     position: relative;
//     z-index: 2; /* Mantém o texto acima de tudo */
//   }

//   .card-title {
//     font-weight: 700;
//     font-size: 18px;
//   }

//   .card-txt {
//     font-size: 14px;
//   }

//   .card:hover {
//     box-shadow: 0px 2px 2px #F37199;
//     border: solid 1px #F37199;
//   }

//   .card:hover .top-card {
//     height: 35%;
//   }

//   .card:hover .bottom-card {
//     height: 65%;
//   }

// `;

// export default Card;

//card com imagem de fundo 
// import React from 'react';
// import styled from 'styled-components';

// const Card = ({ movies }: CardProps) => {
//   return (
//     <StyledWrapper>
//       {movies.map((movie) => {
//         return (
//           <div key={movie.id} className="card">
//             <div className="card-bg" style={{ backgroundImage: `url(${movie.image})` }} />
//             <div className="top">
//               <p className="title">
//                 {movie.name}
//               </p>
//             </div>
//             <p className="desc">
//               {movie.status ? "Assistido" : "Não assistido"}
//             </p>
//             <div style={{marginTop: '2%', opacity: '75%', display: 'flex', justifyContent: 'left'}}>
//               <StarRating disabled rating={Math.floor(movie.starRating)} />
//             </div>
//           </div>
//         )
//       })}
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
// display: flex;
// flex-wrap: wrap;
// gap: 1rem;

//   .card {
//     width: 250px;
//     height: 354px; 
//     border-radius: 16px;
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//     backdrop-filter: blur(10.5px);
//     -webkit-backdrop-filter: blur(10.5px);
//     border: 1px solid rgba(255, 255, 255, 0.3);
//   }

//   //   /* A imagem fica em uma camada separada */
//   .card-bg {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     border-radius: 16px;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     z-index: 0; /* Mantém no fundo */
//     filter: brightness(0.8); /* Opcional: escurece a imagem para melhor contraste */
//   }

//   .top {
//     background: rgba(247, 168, 196, 0.2);
//     border-radius: 16px;
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//     backdrop-filter: blur(1.5px);
//     -webkit-backdrop-filter: blur(1.5px);
//     border: 1px solid rgba(255, 255, 255, 0.3);
//     width: 250px;
//     height: 250px;
//   }

//   .top .title {
//     color: #fff;
//     font-weight: bolder;
//     font-size: x-large;
//     margin-left: 10px;
//     margin-top: 85%
//   }

//   .card .desc {
//     color: #fff;
//     opacity: 75%;
//     font-size: small;
//     font-weight: lighter;
//     margin-left: 10px;
//     margin-top: 2%
//   }`;

// export default Card;


// import React from 'react';
// import styled from 'styled-components';

// const CardContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   gap: 0.5em;
//   width: 280px;
//   height: 400px;
//   padding: 1.5em;
//   border-radius: 1.5em;
//   box-shadow: 0px 4px 16px 0px #367E08;
//   overflow: hidden;
//   z-index: 1;
// `;

// const Background = styled.div<{ $imageUrl: string }>`
//   background-image: url(${props => props.$imageUrl});
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;

// const Content = styled.div`
//   position: relative;
//   z-index: 2;
//   color: black;
//   font-family: 'Nunito', sans-serif;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5em;
//   backdrop-filter: blur(50px);
//   -webkit-backdrop-filter: blur(50px);
//   /* background: rgba(247, 168, 196, 0.6); */
//   /* border: 1px solid rgba(255, 255, 255, 0.7); */
// `;

// const Title = styled.h1`
//   font-size: 1.5em;
//   font-weight: 900;
//   letter-spacing: 0.2em;
// `;

// const Subtitle = styled.p`
//   font-size: 1.2em;
//   font-weight: 900;
//   text-shadow: 0 0 7px #fff;
// `;

// const StarsContainer = styled.div`
//   display: flex;
//   gap: 0.5em;
// `;

// const Star = styled.svg`
//   width: 1em;
//   height: 1em;
//   fill: #222222;
// `;

// const Rating = styled.p`
//   font-size: 1.2em;
//   font-weight: 300;
// `;

// const TagsContainer = styled.div`
//   display: flex;
//   gap: 0.5em;
// `;

// const Tag = styled.div`
//   border: 2px solid #222222;
//   border-radius: 0.5em;
//   padding: 0.05em 0.5em;
//   font-size: 1em;
//   cursor: pointer;
//   transition: background-color 0.3s, color 0.3s;

//   &:hover {
//     background-color: #222222;
//     color: white;
//   }
// `;

// const Description = styled.p`
//   font-family: 'Nunito', sans-serif;
//   font-weight: 300;
//   position: relative;
//   height: 0em;
//   overflow: hidden;
//   line-height: 1.2em;
//   transition: height 0.5s;

//   ${CardContainer}:hover & {
//     height: 7em;
//   }
// `;

// const Card = ({movies}: CardProps) => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
//     {movies.map(movie => {
//       return (
//         <CardContainer key={movie.id}>
//       <Background $imageUrl={movie.image} />
//       <div style={{backgroundColor: 'red', width: '100%'}}>
//         <Content>
//           <div>
//             <Title>{movie.name}</Title>
//             <Subtitle>{movie.status ? 'Já assistido' : 'Não assistido'}</Subtitle>
//           </div>
//           <StarsContainer>
//             {[...Array(Math.floor(movie.starRating))].map((_, index) => (
//               <Star key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                 <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
//               </Star>
//             ))}
//           </StarsContainer>
//           <Rating>{movie.starRating ? `${movie.starRating}/5 Estrelas` : 'Ainda não avaliado'}</Rating>
//           <TagsContainer>
//             <Tag>{movie.status ? 'Já assistido' : 'Ainda não assistido'}</Tag>
//           </TagsContainer>
//         </Content>
//         <Description>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet officiis,
//           dolorem ab animi magnam culpa fugit error voluptates adipisci, debitis ut
//           fuga at nisi laborum suscipit a eos similique unde.
//         </Description>
//       </div>
//     </CardContainer>
//       )
//     })}
//     </div>
//   );
// };

// export default Card;

// 

import React from 'react';
import styled from 'styled-components';

const Card: React.FC<CardProps> = ({ movies }) => {
  return (
    <StyledWrapper>
      {/* {movies.map((movie) => (
        <StyledCard $imageUrl={movie.image} key={movie.id}>
          <div className="card__content">
            <p className="card__title">{movie.name}</p>
            <p className="card__title"></p>
            <StarRating initialRating={movie.starRating} />
          </div>
        </StyledCard>
      ))} */}
    </StyledWrapper>
  );
};

const StarsContainer = styled.div`
   display: flex;
   gap: 0.5em;
 `;

const Star = styled.svg`
   width: 1em;
   height: 1em;
   fill: #222222;
 `;



const StyledWrapper = styled.div`
display: grid;
position: relative;
grid-template-columns: repeat(3, minmax(150px, 1fr));
gap: 1rem;
@media (max-width: 768px) {
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  overflow-x: auto;
}
`;
const StyledCard = styled.div<{ $imageUrl: string }>`
    position: relative;
    width: 150px;
    height: 250px;
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
    margin-top: 10px;
  }


  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }


`
export default Card;



