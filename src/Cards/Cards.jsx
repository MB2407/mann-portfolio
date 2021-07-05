import React, { Component } from 'react'
import Card from './CardUI';
import img1 from '../assets/managister.jpg';
import img2 from '../assets/glass card.jpg';
import img3 from '../assets/flower.jpg';
import img4 from '../assets/Poster-01.jpg';
import img5 from '../assets/giftImage1.jpg';
import Header from '../components/Header';
import Head from '../components/head/Head';
import FooterLink from '../components/footerlink/FooterLink';

const Cards = () => {
    
        return(
            <div className='section-container'>
            <Head 
                heading='My projects'
                details="These are some of the projeects that I've worked on"
            />
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-md-4">
                        <Card imgsrc={img2} title="Glass Card" l={"https://github.com/MB2407/Graphic-design-stuff/blob/main/glass%20card.jpg"} des="A glassmorphic card UI design using Adobe Illustrator."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Managister" l={"https://github.com/MB2407/RDBMS-PROJECT"} des="An invertory management system made using SQLite and firebase."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title="Gift Shop" l={"https://github.com/MB2407/Gift-Shop"} des="A gift recommendation system made using android studio with javafx gui, to help you select the best suited gifts for your loved ones. "/>
                    </div>
                    
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Flower" l={"https://github.com/MB2407/Graphic-design-stuff/blob/main/flower.jpg"} des="I tried my hand at graphics designing with this project."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title="Flyer" l={"https://github.com/MB2407/Graphic-design-stuff/blob/main/Poster-01.jpg"} des="My second outing as a graphic designer for the Pune based startup Stride."/>
                    </div>
                </div>
            </div>
            <FooterLink
                phrase='Check out '
                link='the home page'
                toAdress={ Header }
            />
        </div>
        );
    
};
export default Cards;