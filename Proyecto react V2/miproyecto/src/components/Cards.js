import React from 'react'
import Card from './card';

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: "Plan 15 MB",
        image: image1,
        url: "https://faztweb.com",
    },
    {
        id: 2,
        title: "Plan 25 MB",
        image: image2,
        url: "https://blog.faztweb.com",
    },
    {
        id: 3,
        title: "Plan 50 MB",
        image: image3,
        url: "https://youtube.com/fazttech",
    },
];
function Cards() {

    return (
        <div className="container">
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url}/>
                        </div>))
                }
            </div>
        </div>
    )
}

export default Cards