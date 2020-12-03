import React from 'react';
import styled from 'styled-components'



export default styled.header`
  display: flex;  
  align-items: center; 
  justify-content: space-between;
  position: fixed;
  left: 0px;  
  padding:24px;
  transition: all 0.3s ease 0s;
  /* background-color: black;  */
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0));
  top: 0px;
  width: 100%;
  z-index: 90;
  height: 120px;
`;