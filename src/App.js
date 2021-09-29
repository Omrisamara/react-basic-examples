import React from 'react';
import './App.css';
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import WorkingCounter from "./components/WorkingCounter/WorkingCounter";
import NamesList from "./components/NamesList/NamesList";

// Ex 1: In the old way
// function App() {
//     return React.createElement('h1', null, 'Omri2');
// }

//Ex 2: with JSX
// function App() {
//     return <h1>
//         Omri235235235
//     </h1>
// }

/*
For other ex:
    1. Hello
    2. Counter
    3. NamesList
 */
function App() {
    return <div>
        <Hello name='omri444'/>
        <Counter startNum={5}/>
        <WorkingCounter startNum={6}/>
        <NamesList/>
    </div>
}

export default App;


// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/Hello.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>