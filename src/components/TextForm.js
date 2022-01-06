import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('up clicked');
        setText(text.toUpperCase());
        props.showAlert('success', 'Text converted to uppercase');
    }

    const handleLoClick = () => {
        // console.log('low clicked');
        setText(text.toLowerCase());
        props.showAlert('success', 'Text converted to lowercase');
    }
    
    const handleClearClick = () => {
        // console.log('Clear text clicked');
        setText('');
        props.showAlert('success', 'Text cleared');
    }
    
    const handleCopyClick = () => {
        // console.log('Copy text clicked');
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Text copied to clipboard');
    }
    
    const handleExtraSpaces = () => {
        // console.log('Remove Extra Spaces clicked');
        setText(text.replace(/\s\s+/g, ' '));
        props.showAlert('success', 'Extra spaces removed');
    }

    const handleOnChange = (event) => {
        // console.log('On Change'); 
        setText(event.target.value);
    }

    const numberOfWords = (text) => {
        // console.log('Number of words');
        let words = text.split(' ');
        return words.length;
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={text} placeholder='Enter text here...' onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
                <h2 >Your text sumary</h2>

                <p>
                    {numberOfWords(text)} words <br />
                    {text.length} characters  
                </p>

                <p>
                    {0.008 * text.split(' ').length} minutes read.
                </p>

                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in textbox above to preview it here...'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    showAlert: PropTypes.func
}

TextForm.defaultProps = {
    heading: 'Heading for TextForm',
    mode: 'light',
    showAlert: () => {}
}