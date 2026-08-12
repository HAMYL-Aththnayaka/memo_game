# 🃏 Magic Memory — React Memory Game

A fun, interactive memory matching game built with **React**. Test your memory by matching pairs of magic-themed cards in as few turns as possible!

---

## 🚀 Features

- 🔀 **Randomized Shuffling**: Cards are automatically shuffled at the start of every game.
- 🔄 **Card Flipping & Animation**: Smooth CSS transitions when flipping cards.
- 🎯 **Match Detection**: Compares selected cards and keeps matched pairs face-up.
- ⏳ **Turn Counter**: Keeps track of how many moves you've taken.
- 🚫 **Selection Throttling**: Prevents clicking on multiple cards simultaneously while a comparison is happening.
- 🔁 **Reset / New Game**: Restart the game anytime with a fresh shuffle.

---

## 🛠️ Tech Stack & Concepts

- **Framework**: [React](https://reactjs.org/)
- **Styling**: CSS3
- **React Concepts Used**:
  - `useState` for managing game state (cards, turns, active selections)
  - `useEffect` for handling match comparisons and automatically starting a new game on mount
  - Component reusability & prop passing

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── SingleCard.js      # Individual card component handling flip state & clicks
│   └── SingleCard.css      # Card styles and flip animation
├── App.js                 # Main game logic, shuffling, state management
├── App.css                 # Global styling & layout
└── assets/                 # Card image assets (front and back)

```

---

## 🏎️ Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/react-memory-game.git](https://github.com/your-username/react-memory-game.git)

```


2. **Navigate to the project directory:**
```bash
cd react-memory-game

```


3. **Install dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm run start

```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to play!

---

## 🎮 How to Play

1. Click the **New Game** button to shuffle the deck and reset your turns.
2. Click on any card to flip it over.
3. Click a second card to find its matching pair.
4. If the cards match, they stay face-up! If not, they flip back over.
5. Continue until all pairs are matched in the minimum number of turns possible.

---

## 📸 Screenshots

### 🎮 Game Interface

<p align="center">
  <img src="https://github.com/user-attachments/assets/37d322bf-9f6e-43b3-b57f-d81846ca7b72" width="45%" />
  <img src="https://github.com/user-attachments/assets/4b436552-e1d2-48e4-bd1f-088f7ead9647" width="45%" />
</p>

### 🃏 Card Matching

<p align="center">
  <img src="https://github.com/user-attachments/assets/c00ede06-f855-4764-a1ee-076441dcd5a6" width="45%" />
  <img src="https://github.com/user-attachments/assets/d43aa7f3-8c69-42d8-b63a-ae73e7dae453" width="45%" />
</p>

---

## 🎥 Demo

<p align="center">
  <a href="https://github.com/user-attachments/assets/0cac85e0-3cc2-4d10-827b-6f6ea129db25">
    <img src="https://github.com/user-attachments/assets/37d322bf-9f6e-43b3-b57f-d81846ca7b72" width="80%" alt="Magic Memory Game Demo">
  </a>
</p>

<p align="center">
  ▶️ <strong>Click the preview above to watch the demo</strong>
</p>
## 📚 Acknowledgments & References

This project was built following the tutorial series:

* **Playlist**: [Make a Memory Game with React](http://www.youtube.com/playlist?list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm) by *Net Ninja* on YouTube.

---

## 📝 License

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
