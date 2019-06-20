import React, { Component } from 'react';
import './OurCommunity.css';
import InstagramCards from '../utils/InstagramCards/InstagramCards';
import _Button from '../utils/Button/_Button';


class OurCommunity extends Component {
    constructor(props){
        super(props);
        this.state={
            flag: false
        };
    }
    render() {
        return (
            <div style={{backgroundColor:'#f7f7f7'}} class="container" style={{marginBottom:50}}>
                <div class="row">
                    <div id="_heading" class="col-sm-6 col-md-6">
                        <div className="_pos">
                            <h1>MEET OUR <br/>
                            <span class='_community'>COMMUNITY</span>
                            </h1>
                            <_Button />
                            <p>LOREM IPSUM DOLOR SIT
                            AMET ERNUT TEMPARTERO
                            SERTU PER NABORE EN
                            TORNA ENTALTO</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 instagram_col">
                        <div>
                        <div style={{position:'relative', width:'max-content'}}>
                            <div data-aos="fade-up">
                                <div>
                                    <InstagramCards />
                                </div>
                            </div>
                            <img src="/images/bg-detail.png" class='bg_detail_1'/>
                            <img src="/images/detail01.png" class='bg_detail_2'/>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="row" style={{marginBottom:'15px'}}>
                    <div className="col-sm-6 col-md-6" >
                        <div style={{position:'relative', width:'max-content', float: 'right', zIndex:1}}>
                            <div data-aos="fade-up">
                                <div>
                                    <InstagramCards inverse={1}/>
                                </div>
                            </div>
                            <img src="/images/detail03.png" class='bg_detail_3'/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <div className="free_text" data-aos="fade-up">
                            Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea
                            commodo consequat. Duis
                            aute irure dolor in
                            reprehenderit in voluptate
                            velit esse cillum dolore
                        </div>
                    </div>
                </div>

                <div class="row" style={{marginTop:'15px'}}>
                    <div class="col-sm-6 col-md-6">
                        <div className="free_text" data-aos="fade-up" style={{width:'178px', margin:'20px auto'}}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                        ut labore et dolore magna
                        aliqua. Duis aute irure.
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div style={{position:'relative', width:'max-content'}}>
                            <div data-aos="fade-up">
                                <div>
                                    <InstagramCards 
                                    inverse={1}
                                    />
                                </div>
                            </div>
                            <img src="/images/bg-detail.png" class='bg_detail_1'/>
                            <img src="/images/detail01.png" class='bg_detail_2'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurCommunity;