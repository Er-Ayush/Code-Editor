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



// import React from "react"
// import { Highlight, themes } from "prism-react-renderer"
// import './styles/style.css'

// const codeBlock = `
// const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>Price: {item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//     </div>
//   );
// }
// `

//  const App = () => (
//   <Highlight
//     theme={themes.shadesOfBlue}
//     code={codeBlock}
//     language="tsx"
//   >
//     {({ className, style, tokens, getLineProps, getTokenProps }) => (
//       <pre style={style}>
//         {tokens.map((line, i) => (
//           <div key={i} {...getLineProps({ line })}>
//             <span>{i + 1}</span>
//             {line.map((token, key) => (
//               <span key={key} {...getTokenProps({ token })} />
//             ))}
//           </div>
//         ))}
//       </pre>
//     )}
//   </Highlight>
// )

// export default App;