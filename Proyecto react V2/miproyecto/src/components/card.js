import React from 'react';
import "./tarjetas.css";
import PropTypes from "prop-types";




function card({ title, imageSource, url }) {
    return (
        <div className="card text-center justify-center bg-dark animate__animated animate__fadeInUp">
            <div className='overflow'>
                <img src={imageSource} alt="" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. At, suscipit. Quasi expedita commodi architecto
                    fugiat accusamus! Ducimus laborum suscipit odit molestias illum quae,
                    id fugit, aperiam ut quasi, laboriosam unde.</p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Contratar Ahora
                </a>
            </div>
        </div>
    )
}
card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};
export default card