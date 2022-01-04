import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('up clicked');
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        // console.log('On Change'); 
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <div>
            <h1>{props.heading}</h1>

            <div className="mb-3">
            <textarea className="form-control" value={text} placeholder='Enter text here...' onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>

        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Heading for TextForm'
}