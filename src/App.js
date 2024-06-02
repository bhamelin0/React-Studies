import React, { useState } from 'react';
import './App.css';
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
    <div className="App">
      <h1>Which react example do you want to view?</h1>
      <div className="index">
        <a className="index" href="/MyFirstComponent/index.js" onClick={(e) => renderPage(e, PAGES.MyFirstComponent)}>React First Component</a>
        <a className="index" href="/MySecondComponent/index.js" onClick={(e) => renderPage(e, PAGES.MySecondComponent)} >React Second Component</a>
        <a className="index" href="/GoFish/index.js" onClick={(e) => renderPage(e, PAGES.GoFish)} >Imported Go Fish Game</a>
        <a className="index" href="/DynamicProfileToggler.js" onClick={(e) => renderPage(e, PAGES.DynamicProfileToggler)}>Render a profile selector with fetched JSON data</a>
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
        currentPage === PAGES.DynamicProfileToggler ? <ProfileToggler/> : 
        null
      }
    </div>
  );
}

export default App;
