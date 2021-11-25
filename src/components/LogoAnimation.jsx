
import React from 'react'

import logo from '../assets/images/Logo3.png'

import { MDBAnimation } from "mdbreact";


const AnimationPage = () => {
    return (
        <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" alt="Logo" src={logo} />
        </MDBAnimation>
    );
};

export default AnimationPage