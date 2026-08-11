import React, { useState } from 'react';
import './App.css'
import images from '../src/assets/img/images.js'

function App() {
  const [cards, setCard] = useState([]);
  const [turns ,setTurns] =useState(0);


  const suffeleCards = () => {

    const suffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({
        image:image,
        id: Math.random()
      }));
    setCard(suffledCards);
    setTurns(0);
  }
console.log(cards,turns)


  return (
    <div className="App">
      <h1>memo __ magic</h1>
      <button onClick={suffeleCards}>New Game</button>
    
    <div className="card-grid"></div>
    {cards.map((card)=>(
      <div className="card" key={card.id}>
        <div >
          <img className="front" src={card.src} alt="card front"/>
        </div>
      </div>
    ))}
    </div>
  );
}

export default App