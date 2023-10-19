import React from 'react'
import CodeInput from './CodeInput'
import Output from './Output'
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
