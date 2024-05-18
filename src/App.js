import React, { useState } from 'react';
import './App.css';
import Profile from './ReactFirstComponent/MyFirstComponent.js'; 
import ProfileTwo from './ReactFirstComponent/MySecondComponent.js'; 
import GoFish from 'react-go-fish/src/GoFish.js';

const PAGES = { 
  MyFirstComponent : "MyFirstComponent",
  MySecondComponent : "MySecondComponent",
  GoFish: "GoFish"
}

function App() {
  const [currentPage, setCurrentPage] = useState("");

  function renderPage(e, pageName) {
    e.preventDefault();
    setCurrentPage(pageName);
  }

  return (
    <div className="App">
      <h1>Which react example do you want to view?</h1>
      <div className="index">
        <a className="index" href="/MyFirstComponent/index.js" onClick={(e) => renderPage(e, PAGES.MyFirstComponent)}>React First Component</a>
        <a className="index" href="/MySecondComponent/index.js" onClick={(e) => renderPage(e, PAGES.MySecondComponent)} >React Second Component</a>
        <a className="index" href="/GoFish/index.js" onClick={(e) => renderPage(e, PAGES.GoFish)} >Imported Go Fish Game</a>
      </div>

      <Router currentPage={currentPage}/>
    </div>
  );
}

function Router({currentPage}) {
  return (
    <div>
      {
        currentPage === PAGES.MyFirstComponent ? <Profile/> :
        currentPage === PAGES.MySecondComponent ? <ProfileTwo/> : 
        currentPage === PAGES.GoFish ? <GoFish/> : 
        <div>{currentPage}</div>

      }
    </div>

  );
}

export default App;
