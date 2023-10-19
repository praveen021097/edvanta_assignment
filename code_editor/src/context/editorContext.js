import React from "react";
import { createContext,useState } from "react";

export const editorContext = createContext();

 export const EditorContextProvider = ( {children }) => {
    const [htmlCode, setHtmlCode] = useState("");
    const [cssCode, setCssCode] = useState("");
    const [jsCode, setJsCode] = useState("");

    const handleHtmlCode = (value) => {
        setHtmlCode(value)
    }
    const handleCssCode = (value) => {
        setCssCode(value)
    }
    const handleJsCode = (value) => {
        setJsCode(value)
    }
    return <editorContext.Provider value={{ htmlCode, handleHtmlCode, cssCode, handleCssCode, jsCode, handleJsCode }}>
        {children}
    </editorContext.Provider>
}