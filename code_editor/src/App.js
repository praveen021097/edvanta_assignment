import React, { useEffect, useState } from "react";
import webFont from "webfontloader";
import "./App.css"
import Editor from "./components/Editor/Editor";
import Navbar from "./components/Navbar/Navbar";
function App() {
  // use state for handling code for html css js
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "sans-serif", "chilanka"]
      }
    })
  }, []);

  //lets codelogin of complile code
  const handleCodeOutput = (e) => {

    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    iframe.contentWindow.eval(jsCode);
  }

  return (
    <>
    <Navbar />
      <Editor />
    </>
  );
}

export default App;
