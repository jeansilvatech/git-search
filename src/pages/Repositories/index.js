import React, { useState, useEffect } from "react";
import * as S from './styled';
import { useHistory } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let color = '';
export default function Repositories(props){
  const history = useHistory();
  const [ repositories, setRepositories ] = useState([]);
    useEffect(()=>{
      let repositoriesName = localStorage.getItem('repositoriesName');
      if(repositoriesName != null){
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
      }else{
        history.push('/');
      }

      
    }, [])
    return (
        <S.HomeContainer>
          
          <S.Title>Repositórios</S.Title>
          <S.List>
            { repositories.map(repository => {
              switch(repository.language){
                case "TypeScript":
                  color="typescript"
                break;
                case "JavaScript":
                  color="javascript"
                break;
                case "CSS":
                  color="css"
                break;
                case "HTML":
                  color="html"
                break;
                case "EJS":
                  color="ejs"
                break;
                case "C#":
                  color="csharp"
                break;
                case "Java":
                  color="java"
                break;
                case "Python":
                  color="python"
                break;
                case "Vue":
                  color="vue"
                break;
                case "Dart":
                  color="dart"
                break;
                case "C":
                  color="c"
                break;
                default:
                  color="default"
              }
              return(
                <S.ListItem> 
                <S.Name>{ repository.name}</S.Name>  
                <S.Description>{repository.description}</S.Description>
                
                <S.Language className={color}>{repository.language}</S.Language>
                <div>
                {
                repository.homepage?<S.Deploy href={repository.homepage}><FontAwesomeIcon icon={faEye}/></S.Deploy>:""
                }
                <S.Deploy href={repository.html_url}><FontAwesomeIcon icon={faGithub}/></S.Deploy>
                </div>
                </ S.ListItem>
              )
            })}

          </S.List>
          <S.LinkHome to="/">Voltar</S.LinkHome>
          </ S.HomeContainer>
      )
}