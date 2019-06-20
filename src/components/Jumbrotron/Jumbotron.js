import React from 'react';
import './Jumbroton.css';

const Jumbotron = (props) => {
    return (
        <div id='hero'>
            <div style={{postion: 'relative'}}>
                <img src="/images/bg-pic.png" class='middle_image'/>
                <img src="/images/stamp.png" class="stamp" />
                <div class='text_section'>
                    <h1 class='line_1'>THE BEST FOODIE</h1>
                    <h1 class='line_2'>EXPERIENCE</h1>
                    <h4>NOW IN LONDON</h4>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;