import React, { useEffect } from "react";
import webFont from "webfontloader";
import Editor from "./components/Editor/Editor";
import Navbar from "./components/Navbar/Navbar";
function App() {

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "sans-serif", "chilanka"]
      }
    })
  }, []);

  return (
    <>
      <Navbar />
      <Editor />
    </>
  );
}

export default App;
