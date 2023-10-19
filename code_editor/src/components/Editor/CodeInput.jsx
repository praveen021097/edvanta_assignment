import React, { useContext } from 'react';
import { editorContext } from '../../context/editorContext';
import styles from "./CodeInput.module.css"
const CodeInput = () => {
   const {handleHtmlCode,handleCssCode,handleJsCode} = useContext(editorContext)
  
  return (
    <div className={styles.left}>
             {/* for html */}
        <label>HTML</label>
        <textarea name="html" onChange={(e) => {
            let  value = e.target.value;
            handleHtmlCode(value)
        } }>

        </textarea>
        {/* for css */}
        <label>CSS</label>
        <textarea name="css" onChange={(e) => {
            let  value = e.target.value;
            handleCssCode(value)
        }}>

        </textarea>
        {/* for javascript */}
        <label>JavaScript</label>
        <textarea name="javascript" onChange={(e) => {
            let  value = e.target.value;
            handleJsCode(value)
        }}>

        </textarea>
    </div>
  )
}

export default CodeInput
