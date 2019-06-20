import React from 'react';
import './Footer.css';

const Footer=(props)=> {
    const { logo } = props;
    const section = ['Subsection','Subsection','Subsection','Subsection',];
    const dummy_list = section.map((item)=>{
        return <li class="list-group-item footer_list_item">{item}</li>
    })
    return (
        <div style={{background:'#333333'}}>
          <div className="container">
            <div className="row" style={{padding:46}}>
               <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-2 sec_col">
                            <h5 class='list_heading'>SECTION 1</h5>
                            <ul class="list-group">
                              {dummy_list}
                            </ul>
                        </div>
                        <div className="col-md-2 sec_col">
                            <h5 class='list_heading'>SECTION 2</h5>
                            <ul class="list-group">
                              {dummy_list}
                            </ul>
                        </div>
                        <div className="col-md-2 sec_col">
                            <h5 class='list_heading'>SECTION 3</h5>
                            <ul class="list-group">
                              {dummy_list}
                            </ul>
                        </div>
                        <div className="col-md-2 sec_col">
                            <h5 class='list_heading'>SECTION 4</h5>
                            <ul class="list-group">
                              {dummy_list}
                            </ul>
                        </div>
                        <div className="col-md-2 sec_col">
                            <h5 class='list_heading'>SECTION 5</h5>
                            <ul class="list-group">
                              {dummy_list}
                            </ul>
                        </div>
                    </div>
                    <div class="footer_credits">
                        <p>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
                    </div>
               </div>
               <div className="col-md-4" style={{height:195}}>
                    <div className='logo_div'>
                        {
                            logo !='THIS IS THE LOGO' ? 
                            <img src={logo} alt="LOGO" style={{width:50, height:50}}></img>
                            :
                            <h5 class='Logo_alt_text'>
                                THIS IS THE <br/>
                                <span>LOGO</span>
                            </h5>
                        }
                       
                    </div>
                    <div class='social_icons'>
                        <span><i class="fab fa-facebook-f"></i></span>
                        <span><i class="fab fa-twitter"></i></span>                        
                        <span><i class="fab fa-instagram"></i></span>
                        <span><i class="fab fa-youtube"></i></span>
                        <span><i class="fab fa-pinterest"></i></span>
                        <span><i class="fab fa-tumblr"></i></span>
                    </div>
               </div>
           </div>
            </div>
        </div>
    );
}

Footer.defaultProps ={
    logo: 'THIS IS THE LOGO'
}
export default Footer;