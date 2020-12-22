import './App.css';
import { Button } from 'react-bootstrap'
import poopooigloo2 from './poopooigloo2.wav';
import { useEffect, useState } from 'react'

function App() {
  let ppi = new Audio(poopooigloo2)
  const [trackTime, setTrackTime] = useState(0);


  const playSound = () => {
    ppi.currentTime = trackTime
    ppi.play()
  }

  const pauseSound = () => {
    ppi.pause()
    setTrackTime(ppi.currentTime)
  }

  const stopSound = () => {
    ppi.pause()
    ppi.currentTime = 0;
  }

  useEffect(() => {
    
    

  }, [trackTime]);

  return (
    <div >
      <Button onClick={playSound}>Play</Button>
      <Button onClick={pauseSound}>Pause</Button>
      <Button onClick={stopSound}>Stop</Button>

      <input id="musicSlider" type="range" min="0" max={ppi.duration} value={trackTime} class="slider" />
    </div>

  )
}

export default App;
