import React from 'react';
import Header from '../Header/Header';
import Jumbotron from '../Jumbrotron/Jumbotron';
import Recipes from '../Recipes/Recipes';
import OurCommunity from '../OurCommunity/OurCommunity';
import CollaborateWithUs from '../CollaborateWithUs/CollaborateWithUs';
import Footer from '../Footer/Footer';

const Home = (props) => {
    return (
        <div>
            <Header 
                leftSideItem={['ABOUT', 'COMMUNITY', 'LOCATION', 'OUR MENU', 'RECIPES']}
                rightSideItem={['CONTACT', 'LOGIN']}
            />
            <Jumbotron />
            <OurCommunity />            
            <Recipes />
            <CollaborateWithUs />
            <Footer />
        </div>
    );
}

export default Home;