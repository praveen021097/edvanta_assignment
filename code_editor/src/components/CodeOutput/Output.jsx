import React, { useContext, useRef } from 'react'
import styles from "./Output.module.css"
import { editorContext } from '../../context/editorContext'
const Output = () => {
    const { htmlCode, cssCode, jsCode } = useContext(editorContext);
    const iframeRef = useRef(null);
    // handle html css code and run javascript
    const handleCodeOutput = (e) => {
        const iframe = iframeRef.current;
        if (iframe) {
            const { contentDocument, contentWindow } = iframe;
            contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
            contentWindow.eval(jsCode);
        }
    }

    return (
        <div className={styles.right}>
            <button onClick={handleCodeOutput}>Run</button>
            {/* iframe  to render html ,css and javascript*/}
            <iframe ref={iframeRef}></iframe>
        </div>
    )
}

export default Output
