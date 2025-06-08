/*
 * Title image helper
*/

import React from "react";
import './style.css';

const TitleImg = ({ id }) => {
    let imgPath

    try {
        imgPath = require('@site/static/img/headers/'+id+'.webp').default // Image is existing
    } catch {
        console.log('Image for title ['+id+'] not found. Load placeholder!')
        imgPath = require('@site/static/img/headers/_none_.webp'+'').default // Image not existing. Load placeholder.
    }

    return (
        <div className='cont'>
            <link rel='prefetch' as='image' href={imgPath} />
            <div className='show' id='mask'>
                <img
                    src={imgPath}
                    alt={id}
                />
            </div>
        </div>
    )
}

export default TitleImg