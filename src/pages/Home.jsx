import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import ImageSlider from '../Components/ImageSlider';

import letterIcon from '../icons/email.png'

import img1 from '../images/graduation.JPG'
import NBimg1 from '../images/NBimg1.png'


const Home = () => {

    const navigate = useNavigate();
    return (
        <div className='home'>
            <Header />
            <p className='text1 pop'>For my Pretty lovelove</p>
            <p className='text1 pop delay2'>I HOPE YOU LOVE IT</p>

            <div className='container'>
                <div className='box'>
                    <img src={img1} alt="" />
                    <p>I LOVE YOU MARIE</p>
                </div>

                <div className='box1'>
                    <div>
                        <p>MARIE ODAS</p>
                        <p className='margin-1'>You know my love i really love you so much kuwang nalang mo ambak kog tulay para to know i really love you </p>
                    </div>
                    <img className='NB1-image' src={NBimg1} alt="" />
                </div>

            </div>

            <div className='image-slider'>
                <ImageSlider />
            </div>

            <div className='letter'>
                <button onClick={() => navigate('/flower')}><img src={letterIcon} alt="" /></button>
                <p>Click my message baby</p>
            </div>


      

           


        
        
        </div>
    );
}

export default Home;
