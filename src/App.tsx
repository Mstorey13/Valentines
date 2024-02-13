import { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Aw, why not?",
  "Are you sure?",
  "Really? :(",
  "Change of heart?",
  "Are you REALLY sure?",
  "Are you sure you're sure?",
  "I'm going to cry",
  "Pleaseeeeee",
]

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length + 1)]
  }

  return (
    <><div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="Snoopy"
            src="https://www.icegif.com/wp-content/uploads/snoopy-valentine-icegif-6.gif"
          ></img>
          <div className="text">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="Snoopy"
            src="https://64.media.tumblr.com/37fd5693d756d4c5c7aac1304e21d9e0/b164ce3728490401-62/s400x600/d44dc9811c905b1c4da71068ef578bf0f803e6b1.gif"
          ></img>

          <div>Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton font-bold"
              style = {{ fontSize: yesButtonSize }}
              onClick={ () => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div><>

      </></>
  );
}

export default App

