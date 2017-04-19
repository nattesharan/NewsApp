import React from 'react';
import pic from './worldwide.svg';
import styles from './logo.css';

const Logo = (props) => {
    return (
        <div className="logo" style={styles}>
        
        <center><img className="ima" src={pic} alt="Title"/><br/><span className="logofont">
            <strong>NEWS BUDDY</strong></span></center></div>
    );
};
export default Logo;