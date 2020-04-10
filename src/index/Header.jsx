import React from 'react';
import PropTypes from 'prop-types';
import './css/Header.css';

export default function Header(props) {
    const { title } = props;
    
    return (
        <div className="header">
            <div className="header-back" >
            </div>
            <h1 className="header-title"  >{title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
