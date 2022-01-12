import React from 'react'

export default function About(props) {

    let myStyle = {
        color: `${props.mode==='dark' ? 'white' : 'black'}`,
        backgroundColor: `${props.mode==='dark' ? '#063965' : 'white'}`,
    }

    // const [btnText, setbtnText] = useState('Enable Dark Mode');

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setmyStyle({
    //             color: 'white',
    //             fontSize: '20px',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         });
    //         setbtnText('Enable Light Mode');
    //     } 
    //     else {
    //         setmyStyle({
    //             color: 'black',
    //             fontSize: '20px',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         });
    //         setbtnText('Enable Dark Mode');
    //     }
    // }

    return (
        <div className='container'>
            <h1 className="my-2" style={{color:`${props.mode==='dark' ? 'white' : 'black'}`}}>About Us</h1>
            <div className="accordion mb-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Analyze Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or even sentence count, TextUtils can help you get the information you need.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool that provides instant character count and word count statistics for a give text. It reports the number of words and characters in a given text. Thus, it is suitable for writing text with word/character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays. etc. 
                    </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary mb-2" onClick={toggleStyle}>
                {btnText}
            </button> */}
        </div>
        
    )
}
