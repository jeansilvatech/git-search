import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0 auto;
  display: flex;
  font-family: 'Poppins', sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #0a0b0b, #0f1010, #121414, 
    #161718, #191a1b, #1e1f20, 
    #222324, #272829, #2e3031, 
    #363939, #3e4142, #464a4a);
  background-size: cover;
  color: #DCDCDC;
  height: 100vh;
 
`;


export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  background: #DCDCDC;
  height: 2.5rem;
  width: 17.9rem;
  padding: 0 .5rem;
  text-align: center;
  border-radius: 2rem 2rem 0 0;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  width: 19rem;
  padding: 0 .5rem;
  border: 1px solid #ddd;
  background: #1C1C1C;
  color: #fff;
  border-radius: 0 0 2rem 2rem;
  transition: 900ms;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
  &:hover{
    background: #fff;
    color:#1C1C1C;
    cursor:pointer;
    transition: 900ms;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.80rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
  background-color: red;
  color: #fff;
  font-weight: 600;
  margin-top: 1rem;
`;
export const h1 = styled.h1 `
font-size: 50px;
margin: 0 auto;
`;
