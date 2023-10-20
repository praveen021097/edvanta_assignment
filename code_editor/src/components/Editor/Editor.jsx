import React from 'react'
import CodeInput from "../CodeInput/CodeInput"
import Output from "../CodeOutput/Output"
import styles from "./Editor.module.css";

const Editor = () => {

  return (
    <div className={styles.Editor}>
      <CodeInput />
       <Output />
      </div>
  )
}

export default Editor
