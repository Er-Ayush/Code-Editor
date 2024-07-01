import React from "react";
import CodeEditor from "./components/CodeEditor";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Editor</h1>
      </header>
      <CodeEditor />
    </div>
  );
};

export default App;