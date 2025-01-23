import profilePic from './profilePic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={profilePic} className="Profile-pic" alt="profilePic"/>
        <h1>
          Gavin's Software
        </h1>
        <h2 margin-top="0px" padding-top="0px">
          Hello!
        </h2>
      </div>
      <div className="App-body">
        <p>
          My name is Gavin Watson and I develop software. <br></br>
          I am most proficient in web development and can set up everything you need from infrasructure to storage to backend to frontend. <br></br>
          Allow me to take you through some of the many projects that I have completed.
        </p>
        <ul>
          <li className="List-item">
            <a align="left" href="https://www.getcorrelated.com/">Correlated</a>
          </li>
          <li className="List-item">
            <a href="https://www.rallyhealth.com/">Rally Health</a>
          </li>
          <li className="List-item">
            <a href="https://en.wikipedia.org/wiki/Decisive_Analytics_Corporation">Decisive Analytics Corporation</a>
          </li>
          <li className="List-item">
            <a href="https://drum.lib.umd.edu/items/70af61b8-da07-4f2b-b506-c13b34777e04">University of Maryland Research</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
