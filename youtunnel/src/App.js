import React, { useState } from 'react';
import styled from "styled-components";
// import {Redirect} from "react-router-dom";
import { ReactComponent as SearchSvg } from "./img/search (1).svg"

const S = {};

S.Container = styled.div`
  background-color: #474747;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  h1 {
    font-family: 'Oswald' ;
    color: red;
    font-size: 48px;
    margin: 0px;

  }

  header {
    font-family: 'Oswald' ;
    color: white;
    font-size: 24px;
    width: 140px;
    margin-bottom: 60px;
    line-height: 1; 


  }

  form {
    width: 50%;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    input {
      font-family: 'Roboto';
      height: 100%;
      box-sizing: border-box;
      font-size: 18px;
      width: 100%;
      margin: 0px;
      padding-left: 1%;
      background-color: #2B2B2B;
      color: white;
      border: solid #A8A8A8 1px;

    }
    button {
      box-sizing: border-box;
      height: 100%;
      width: 120px;
      background-color: #707070;
      border-color: #A8A8A8;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid #A8A8A8 1px;



      svg {
        fill: white;
        height: 18px;
        width: 18px;
      }
    }
  }

  footer {
    position: fixed;
    padding: 0px 20px;
    bottom: 0;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    div {
      width: 33.33%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      white-space: pre-wrap;
      font-family: 'Roboto';

    }

    div:nth-child(1) {
      color: grey;
      font-size: 12px;
      a {
        color: grey;
      }
    }
    div:nth-child(2) {
      justify-content: flex-end;
      color: white;
      a{
        color: white;
      }
    }
    div:nth-child(3) {
      justify-content: flex-end;
      color: white;
      a{
        color: white;
      }
    }
    
  }
`


function App(props) {

  const [searchQuery, setSearchQuery] = useState("")

  const createSearchUrl = (searchParam) => {
    let query = Array(searchParam.length)
    for (let i = 0; i < searchParam.length; i++){
      if (searchParam[i] === " "){
        query[i] = "+"
      } else {
        query[i] = searchParam[i]
      }
    }
    return `https://www.youtube.com/results?search_query=${query.join('')}`
  }

  const searchYouTube = (e) => {
    e.preventDefault()
    let searchUrl = createSearchUrl(searchQuery)
    window.location.href = searchUrl
  }


  return (
    <S.Container className="App">
      <h1>YouTunnel</h1>
      <header>
        Distraction-free YouTube search
      </header>
      <form 
        onSubmit = {(e) => searchYouTube(e)}
        autoComplete = "off"
      >
        <input 
          name = "search"
          type = "text"
          value = {searchQuery}
          onChange = {(e) => setSearchQuery(e.target.value)}
          placeholder = "Search"
          autoFocus
        />
        <button
          type = "submit"
        >
          <SearchSvg/>
        </button>
      </form>

      <footer>
        <div>
          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
        <div />
        <div>
          Brought to you by <a href = "https://vladmog.com/">vladmog</a>
        </div>
      </footer>
      
    </S.Container>
  );
}

export default App;
