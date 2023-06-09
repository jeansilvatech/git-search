import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100vw;
  max-width: 991px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  color: #DCDCDC;
  
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 20px;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
 
`;

export const ListItem = styled.li`
  background: #363939;
  color: #fff;
  border-radius: 10px;
  padding: .5rem;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  transition:500ms;
  &:hover{
    background-color:rgba(0,0,0,0.5);
    transition:500ms;
  }
  @media (max-width:600px) {
    border-radius:0;
  }

`;
export const Name = styled.p `
    font-size: 20px;
    text-transform: uppercase;
    margin: 5px;
    font-weight: 800;
    margin: 5px;
`
export const Description = styled.p `
  font-size: 15px;
  color: #c1c1c1;
  margin: 5px;
`
export const Deploy = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 17px;
  padding:1px 2px;
  margin: 5px;
  width: 40px;
  text-align: center;
  &:hover{
    color: #c1c1c1;
  }
`
export const Language = styled.p `
  padding:5px 10px;
  width:100px;
  border-radius: 25px;
  text-align: center;
  font-size: 13px;
  margin: 5px;
`
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #fff;
  padding: .5rem 0;
  color: #000;
  border-radius: 10px;
  text-decoration: none;
  transition: 500ms;
  &:hover{
    background-color: #000;
    color: #fff;
  }
`;