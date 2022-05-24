import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background-color: #161718;
  color: #DCDCDC;
  
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #363939;
  color: #fff;
  border-radius: 2rem;
  padding: .5rem;

`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
`;