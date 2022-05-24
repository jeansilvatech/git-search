import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { useHistory} from 'react-router-dom';


function App(props) {
  const history = useHistory();
  const [ usuario,setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response=> {
      const repositories = response.data;
      const repositoriesName =[];
      repositories.map((repository)=>{
        repositoriesName.push(repository.name);
      });
      
     JSON.stringify(repositoriesName)
     localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
     setErro(false);
     history.push('/repositories');
  }).catch(err=>{
    setErro(true);
  });
  }
  
  return (
    <S.HomeContainer>

      <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,28,28,1)" iconSize="5" roundness="50%" url="" size="80" /> 
      <S.h1> Git Search</S.h1>
      
        <S.Input className="usuarioInput" placeholder="Digite o usuário que você procura" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar  <FontAwesomeIcon icon={faSearch} /></S.Button>
        {
          erro ? <S.ErrorMsg> Ocorreu um erro. Tente novamente.</S.ErrorMsg>: ''
        }
        
    </S.HomeContainer>
  );
}

export default App;
