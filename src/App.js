import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Profile from './ReactFirstComponent/ProfileOne.js'; 
import ProfileTwo from './ReactFirstComponent/ProfileTwo.js'; 
import GoFish from 'react-go-fish/src/GoFish.js';
import ProfileToggler from './PictureToggler/Profiletoggler.js';

const PAGES = { 
  MyFirstComponent : "MyFirstComponent",
  MySecondComponent : "MySecondComponent",
  GoFish: "GoFish",
  DynamicProfileToggler : "Dynamic Profile Toggler"
}

function App() {
  const [currentPage, setCurrentPage] = useState("");

  function renderPage(e, pageName) {
    e.preventDefault();
    setCurrentPage(pageName);
  }

  return (
    <OuterDiv className="App">
      <PageHeader>Which react example do you want to view?</PageHeader>

      <DividerDiv>
        <TableOfContentDiv className="index">
          <PageLink className="index" href="/MyFirstComponent/index.js" onClick={(e) => renderPage(e, PAGES.MyFirstComponent)}>React First Component</PageLink>
          <PageLink className="index" href="/MySecondComponent/index.js" onClick={(e) => renderPage(e, PAGES.MySecondComponent)} >React Second Component</PageLink>
          <PageLink className="index" href="/GoFish/index.js" onClick={(e) => renderPage(e, PAGES.GoFish)} >Imported Go Fish Game</PageLink>
          <PageLink className="index" href="/DynamicProfileToggler.js" onClick={(e) => renderPage(e, PAGES.DynamicProfileToggler)}>Render a profile selector with fetched JSON data</PageLink>
        </TableOfContentDiv>

        <ContentDiv>
          <Router currentPage={currentPage}/>
        </ContentDiv>
        
      </DividerDiv>
    </OuterDiv>
  );
}

function Router({currentPage}) {
  return (
    <div>
      {
        currentPage === PAGES.MyFirstComponent ? <Profile/> :
        currentPage === PAGES.MySecondComponent ? <ProfileTwo/> : 
        currentPage === PAGES.GoFish ? <GoFish/> : 
        currentPage === PAGES.DynamicProfileToggler ? <ProfileToggler/> : 
        null
      }
    </div>
  );
}

const PageHeader = styled.h1`
  border-radius: 10px;
  border: 2px solid black;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;

  margin-bottom: 20px;
  max-width: 100%;
`

const OuterDiv = styled.div`
  background-image: linear-gradient(180deg, #E0BBE4, white);
  min-height: 100%;
  height: 75vh;
`

const DividerDiv = styled.div`
  display: flex;
  flex-direction: horizontal;
  height: 100%;
  padding: 0.5rem;
`

const TableOfContentDiv = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  padding: 20px;
  margin: 10px;
  min-width: 200px;
  width: 200px;
  height: auto;
`

const PageLink = styled.a`
  margin-bottom: 1rem;
`

const ContentDiv = styled.div`
  width: 100%;
`

export default App;
