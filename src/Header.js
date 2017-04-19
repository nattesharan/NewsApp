import React from 'react';
//import Popover from 'material-ui/Popover';
//import IconButton from 'material-ui/IconButton';
//import InfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import Logo from './Logo';
import styles from './Header.css';

class Header extends React.Component {

    render () {
        return (
                <div className={styles.logo}>
                    <Logo />
               </div>
        )
    }
};

export default Header;