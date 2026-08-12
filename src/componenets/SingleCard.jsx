import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card , handleChoice}) {
    const handleClick = ()=>{
        handleChoice(card)
    }
    return (
        <div >
            <div className="card" >

                <img className="front"
                    src={card.image.src}
                    alt="card front" />

                <img className="back"
                    src="/img/cover.png"
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    );
}