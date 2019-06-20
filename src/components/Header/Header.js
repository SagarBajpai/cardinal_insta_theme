import React from 'react';
import './Header.css';
const Header = (props) => {
    const { logo, leftSideItem, rightSideItem } = props;
    let leftSide, rightSide;
    if(leftSideItem){
         leftSide = leftSideItem.map((item)=>{
            return <li><a class='list_items' href="#">{item}</a></li>
        });
    }
    if(rightSideItem){
        rightSide = rightSideItem.map((item)=>{
           return <li><a class='list_items' href="#">{item}</a></li>
       });
    }
    return (
        <div>
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
                </button>
                <a class="navbar-brand">{logo ? <img src={logo} class='logo'/> : <span class='list_item_logo'>LOGO</span>}</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    {leftSide}
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    {rightSide}
                </ul>
            </div>
            </div>
        </nav>
     </div>
    );

}
export default Header;