import React, { useState, useEffect } from "react";
import Mute from '../../assets/jurnal1/mute.png'
import Unmute from '../../assets/jurnal1/unmute.png'

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {  
    if (!playing) { 
      audio.pause();
    } else { 
      audio.play();
    }
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.pause();
      audio.removeEventListener('ended', () => setPlaying(false));
      setPlaying(false)
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="hover" onClick={toggle} style={{ marginBottom: 20, height: 60, width: 60, borderRadius: 30, border: "2px solid white", color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      {/* {playing ? "Pause" : "Play"} */}
      <img src={playing? Mute : Unmute} height={20}></img>
    </div >
  );
};



export default Player;