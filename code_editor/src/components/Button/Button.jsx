import React from 'react'
import styles from "./Button.module.css"
const Button = ({title,onClick}) => {
  return (
    <button onClick={onClick} className={styles.Button}>{title}</button>
  )
}

export default Button
