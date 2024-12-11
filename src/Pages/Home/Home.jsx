import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Company from '../../components/Company/Company';
import Offer from '../../components/Offer/Offer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Company></Company>
            <Offer></Offer>
    
            
        </div>
    );
};

export default Home;