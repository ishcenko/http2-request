import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
  border-radius: 12px;
  padding: 25px;
  width: 450px;
  height: 350px;
`;
