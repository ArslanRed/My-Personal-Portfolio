import React, { useState, useEffect } from 'react';

const drumPads = [
  { key: "Q", id: "Heater-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", id: "Heater-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", id: "Heater-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", id: "Heater-4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", id: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", id: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", id: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];

const DrumMachine = () => {
  const [display, setDisplay] = useState("Press a key");

  const playSound = (key, id) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(id);
    }
  };

  const handleKeyPress = (e) => {
    const pad = drumPads.find(p => p.key === e.key.toUpperCase());
    if (pad) {
      playSound(pad.key, pad.id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div id="drum-machine" style={styles.container}>
      <div style={styles.pads}>
        {drumPads.map(pad => (
          <div
            key={pad.key}
            id={pad.id}
            className="drum-pad"
            onClick={() => playSound(pad.key, pad.id)}
            style={styles.drumPad}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.url}></audio>
          </div>
        ))}
      </div>
      <div id="display" style={styles.display}>
        {display}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '340px',
   height: '400px',
    margin: "20px auto",
    backgroundColor: "#1e1e2f",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 0 20px #ddb3c8ff",
    textAlign: "center",
    color: "white"
  },
  pads: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginBottom: "40px"
  },
  drumPad: {
    backgroundColor: "#6c636eff",
    padding: "30px",
    borderRadius: "8px",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(14, 13, 13, 1)"
  },
  display: {
    backgroundColor: "#333",
    padding: "15px",
    borderRadius: "6px",
    fontSize: "20px"
  }
};

export default DrumMachine;
