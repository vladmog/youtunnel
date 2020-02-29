import React, { useState } from 'react';
import styled from "styled-components";
import {Redirect} from "react-router-dom";

const S = {};

S.Container = styled.div`
  background-color: #474747;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`


function App(props) {

  const [searchQuery, setSearchQuery] = useState("")

  const searchYouTube = (e) => {
    console.log("RUN")
    e.preventDefault()
    let searchUrl = createSearchUrl(searchQuery)
    console.log(searchUrl)
    window.location.href = searchUrl

  }

  const createSearchUrl = (searchParam) => {
    let url = Array(searchParam.length)
    for (let i = 0; i < searchParam.length; i++){
      if (searchParam[i] === " "){
        url[i] = "+"
      } else {
        url[i] = searchParam[i]
      }
    }
    return `https://www.youtube.com/results?search_query=${url.join('')}`
  }

  return (
    <S.Container className="App">
      <h1>YouTunnel</h1>
      <header>
        Distraction-free YouTube search
      </header>
      <form onSubmit = {(e) => searchYouTube(e)}>
        <input 
          name = "search"
          type = "text"
          value = {searchQuery}
          onChange = {(e) => setSearchQuery(e.target.value)}
          placeholder = "Search"
        />
        <button
          type = "submit"
        >

        </button>
      </form>
      
    </S.Container>
  );
}

export default App;
