import React, { useState, useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const contentEditableRef = useRef(null);

  const handleChange = (e) => {
    setCode(e.target.innerText);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };

  return (
    <div className="code-editor" onClick={() => contentEditableRef.current.focus()}>
      <div
        ref={contentEditableRef}
        className="code-input"
        contentEditable
        suppressContentEditableWarning
        onInput={handleChange}
        onPaste={handlePaste}
        spellCheck="false"
        placeholder="Type your code here..."
      />
      <div className="code-highlight-container">
        <Highlight theme={themes.shadesOfPurple} code={code} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`code-highlighted ${className}`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="line-number">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeEditor;
