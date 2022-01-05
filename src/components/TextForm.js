import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('up clicked');
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        // console.log('low clicked');
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        // console.log('On Change'); 
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                <textarea className="form-control" value={text} placeholder='Enter text here...' onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>

            </div>

            <div className="container my-3">
                <h2>Your text sumary</h2>

                <p>
                    {text.split(' ').length} words <br />
                    {text.length} characters  
                </p>

                <p>
                    {0.008 * text.split(' ').length} minutes read.
                </p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Heading for TextForm'
}