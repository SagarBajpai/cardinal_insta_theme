import React from 'react';
import './CollaborateWithUs.css';

const CollaborateWithUs=(props)=> {
    return (
        <div style={{backgroundColor:'#FFDAC8'}}>
            <div className="container">
                <div className="above_image">
                    <img src="/images/bg-detail.png"/>
                </div>
                <div className="row" style={{padding:40, marginBottom:20}}>
                    <div className="col-md-6">
                        <div style={{padding:20}}>
                            <div>
                                <div className="left_side_title">
                                    <h1>COLLABORATE <br/>
                                    <span class='_withus'>WITH US</span>
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div className="left_side_text">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                    </p>
                                    <p></p>
                                    <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div style={{padding:20, marginTop:40}}>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label className="custom_form_label">Email</label>
                                    <input type="text" class="form-control custom_input" id="name" placeholder="Name"/>
                                    </div>
                                <div class="form-group col-md-6">
                                    <label className="custom_form_label">Surname</label>
                                    <input type="text" class="form-control custom_input" id="surname" placeholder="Surname" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label className="custom_form_label">Phone</label>
                                    <input type="text" class="form-control custom_input" id="phone" placeholder="Phone" />
                                    </div>
                                <div class="form-group col-md-6">
                                    <label className="custom_form_label">Email</label>
                                    <input type="email" class="form-control custom_input" id="email" placeholder="Email" />
                                </div>
                                <div class="form-group col-md-6">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2 custom_form_label" for="inlineFormCustomSelect" style={{marginBottom:14}}>Preference</label><br/>
                                        <select class="custom-select mr-sm-2 custom_input" id="inlineFormCustomSelect" style={{width:'100%'}}>
                                            <option selected className='_selected'>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <div class="col-auto my-1">
                                        <label class="mr-sm-2 custom_form_label" for="inlineFormCustomSelect" style={{marginBottom:14}}>Preference</label><br/>
                                        <select class="custom-select mr-sm-2 custom_input" id="inlineFormCustomSelect" style={{width:'100%'}}>
                                            <option selected className='_selected'>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="send_button">
                                <button className="btn">SEND</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default CollaborateWithUs;