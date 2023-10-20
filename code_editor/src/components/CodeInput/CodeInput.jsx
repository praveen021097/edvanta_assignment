import React, { useContext, useRef, useState } from 'react';
import { editorContext } from '../../context/editorContext';
import styles from "./CodeInput.module.css"
import Button from '../Button/Button';
const CodeInput = () => {
    const { handleHtmlCode, handleCssCode, handleJsCode } = useContext(editorContext)
    const [disabale, setDiasbale] = useState(false);
    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const jsRef = useRef(null);
    const fileRef = useRef(null);


    const handleHtmlCopy = (e) => {
        e.preventDefault()
        htmlRef.current.select(e);
        document.execCommand('copy');
        e.target.focus();
    }
    const handleCssCopy = (e) => {
        e.preventDefault()
        cssRef.current.select(e);
        document.execCommand('copy');
        e.target.focus();
    }
    const handleJsCopy = (e) => {
        e.preventDefault()
        jsRef.current.select(e);
        document.execCommand('copy');
        e.target.focus();
    }
    const handleHtmlFileSave = (e) => {
        e.preventDefault();
        const textData = htmlRef.current.value;
        const textDataBlob = new Blob([textData], { type: "text/html" });

        const downloadUrl = window.URL.createObjectURL(textDataBlob)

        const downloadLink = document.createElement('a');
        downloadLink.download = fileRef.current.value
        downloadLink.href = downloadUrl;
        downloadLink.click()


    }
    const handleCssFileSave = (e) => {
        e.preventDefault();
        const textData = cssRef.current.value;
        const textDataBlob = new Blob([textData], { type: "text/css" });
        const downloadUrl = window.URL.createObjectURL(textDataBlob)
        const downloadLink = document.createElement('a');
        downloadLink.download = fileRef.current.value
        downloadLink.href = downloadUrl;
        downloadLink.click()



    }
    const handleJsFileSave = (e) => {
        e.preventDefault();
        const textData = jsRef.current.value;
        const textDataBlob = new Blob([textData], { type: "text/javascript" });
        const downloadUrl = window.URL.createObjectURL(textDataBlob)
        const downloadLink = document.createElement('a');
        downloadLink.download = fileRef.current.value
        downloadLink.href = downloadUrl;
        downloadLink.click()
    }

    const handleLock = () => {
        setDiasbale(!disabale)
    }
    return (
        <div className={styles.left}>
            {/* for html */}
            <Button title={disabale?"Unlock Editor":"Lock Editor"} onClick={handleLock} />
            <div className={styles.editorHeader}><label >HTML</label> <Button title={"CopyCode"} onClick={handleHtmlCopy} /><input type="text" id="fileName" ref={fileRef} placeholder="Enter File Name" /><Button title={"Save"} onClick={handleHtmlFileSave} /> </div>
            <textarea name="html" ref={htmlRef} onChange={(e) => {
                let value = e.target.value;
                handleHtmlCode(value)
            }} disabled={disabale}>

            </textarea>
            {/* for css */}
            <div className={styles.editorHeader}><label >CSS</label> <Button title={"CopyCode"} onClick={handleCssCopy} /> <input type="text" id="fileName" ref={fileRef} placeholder="Enter File Name" /><Button title={"Save"} onClick={handleCssFileSave} /> </div>
            <textarea name="css" ref={cssRef} onChange={(e) => {
                let value = e.target.value;
                handleCssCode(value)
            }} disabled={disabale}>

            </textarea>
            {/* for javascript */}
            <div className={styles.editorHeader}><label >JavaScript</label> <Button title={"CopyCode"} onClick={handleJsCopy} /><input type="text" id="fileName" ref={fileRef} placeholder="Enter File Name" /><Button title={"Save"} onClick={handleJsFileSave} /> </div>
            <textarea name="javascript" ref={jsRef} onChange={(e) => {
                let value = e.target.value;
                handleJsCode(value)
            }} disabled={disabale}>

            </textarea>
        </div>
    )
}

export default CodeInput
