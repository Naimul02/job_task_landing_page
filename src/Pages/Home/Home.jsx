import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Company from '../../components/Company/Company';
import Offer from '../../components/Offer/Offer';
import SuperPowers from '../../components/SuperPowers/SuperPowers';
import Blogs from '../../components/Blogs/Blogs';
import Contact from '../../components/Contact/Contact';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Company></Company>
            <Offer></Offer>
            <SuperPowers></SuperPowers>
            <Blogs></Blogs>
            <Contact></Contact>
            <Newsletter></Newsletter>
            <Footer></Footer>

    
            
        </div>
    );
};

export default Home;