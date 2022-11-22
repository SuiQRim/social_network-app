import React from 'react';
import loadGif from '../Assets/load.gif'

const Preloader = () => {
    return (
        <div style={{position : 'fixed', top : '50%', left : '50%'}}>
            <img alt="Загрузка" style={{ width: '100px', heigth: '100px', borderRadius: '24px'}} src={loadGif} />
        </div>
    );
};

export default Preloader;