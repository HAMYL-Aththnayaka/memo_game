import React, { useState, useEffect } from 'react';
import './App.css'
import SingleCard from './componenets/SingleCard'


const images = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched:false }
];

function App() {
  const [cards, setCard] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const suffeleCards = () => {

    const suffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({
        image: image,
        id: Math.random()
      }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCard(suffledCards);
    setTurns(0);
  }
  console.log(cards , turns)

  //handling the choice 
  const handleChoice = (card) => {
    // console.log(card);

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(pT => pT + 1);
    setDisabled(false);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      //this make the other cards unflipalbel while 2 are being compared
          setDisabled(true);
      if (choiceOne.image.src === choiceTwo.image.src) {
        // console.log("They are equal !!!");
        setCard(prevCard => {
         return prevCard.map(card => {
            if (card.image.src === choiceOne.image.src) {
              return {
                ...card,
                matched: true
              }
            } else {
              return { ...card }
            }
          })
        })
        resetTurn();
      } else {
        //console.log("They are not eqaual");
        setTimeout(()=> resetTurn(), 1400);
      }
    }
  }, [choiceOne, choiceTwo]);

  //new game automatically start when the page loads
  useEffect(()=>{
    suffeleCards();
  },[])

  return (
    <div className="App">
      <h1>memo __ magic</h1>
      <button onClick={suffeleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled ={disabled}
          />
        ))}
      </div>
      <div>
        <p><b>No. Turns : {turns}</b></p>
      </div>
    </div>
  );
}

export default App