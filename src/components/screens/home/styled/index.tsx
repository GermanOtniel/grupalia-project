import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #1a1b1e;
  padding: 40px 1rem;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  aspect-ratio: 3/5;
  border-radius: 8px;
`;

export const PencilButton = styled.button`
  background-color: white;
  border: 1px white;
  cursor: pointer;
  position: absolute;
  top: 48px;
  right: 9px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReactionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2;
  position: absolute;
  bottom: 5px;
  left: 6px;
  background-color: #25262b99;
  padding: 4px;
  border-radius: 4px;
`;

export const ReactionButton = styled.button`
  margin: 0;
  background-color: transparent;
  border: 0px transparent;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

export const BoltButton = styled.button`
  padding: 2px 6px;
  display: flex;
  align-items: center;
  gap: 4px
  font-size: 12px;
  font-weight: bold;
  color: #f59f00;
  background-color: #f08c0033;
  border: 0px #f08c0033;
  border-radius: 2px;
`;

export const CloseButton = styled.button`
  background-color: white;
  border: 1px white;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 9px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .75;
`;

export const ContainerFullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background-color: black; 
  z-index: 2;
`;

export const ImageFullScreen = styled.img`
  cursor: pointer; 
  max-width: 100%; 
  max-height: 100%; 
  margin: auto;
  display: block;
`;