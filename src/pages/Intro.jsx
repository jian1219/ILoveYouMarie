import React from 'react';
import { useNavigate } from "react-router-dom";


const Intro = () => {

    const navigate = useNavigate();

    const goToAbout = () => {
    navigate("/about"); // 👈 navigates to /about page
  };
    return (
        <div className='page1'>
            <div className='box1'>
                <div className='text1'>
                    <p className='pop'>Hello My lovelove</p>
                    <p className='pop delay1'>Miss Marie</p>
                </div>
                <button className='pop dealy2' onClick={goToAbout}>Click this my love</button>
            </div>
        </div>
    );
}

export default Intro;
