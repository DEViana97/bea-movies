import Image from 'next/image';
import styled from 'styled-components';

export const MovieCardContainer = styled.li`
  min-width: 150px;
  min-height: 250px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  & .watch-later {
   position: absolute;
   top: 10px;
   right: 10px;
   z-index: 1 ;
   display: none;
   transition: all .3s;
  }
  
  &:hover img {
    transform: scale(1.1);
  }

  &:hover .watch-later {
    display: block;
  }

  &:hover .hidden-info {
    height: 100px;
    opacity: 1;
  }
`;

export const MovieImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MovieImage = styled(Image)`
  object-fit: cover;
  width: auto;
  height: auto;
  transition: .3s;
  opacity: 1;
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 10px;
  background: linear-gradient(#00000000, #000 90%);
  
  & .movie-description {
    font-size: 12px;
    color: #fff;
  }
`;

export const MovieHiddenInfo = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
  height: 0;
  opacity: 0;
  transition: all.3s;
`;