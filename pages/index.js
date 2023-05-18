import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  useEffect(() => {
    const hls = document.createElement('script');
    hls.src = 'https://unpkg.com/hls.js@1.0.2/dist/hls.min.js';
    document.body.append(hls);
    
    var script = document.createElement('script');
    script.src = "/ovenplayer.js";

    let player;
    script.onload = () => {
      player = OvenPlayer.create("player_el_id", {
          "autoStart": true,
          "autoFallback": true,
          "mute": true,
          "sources": [{
              "type": "ll-hls",
              "file": "https://llhls-demo.ovenmediaengine.com/app/stream/llhls.m3u8"
          }]
      });
    };

    document.body.append(script);

    return () => {
      document.body.removeChild(script);
      player.remove();
    }

  }, []);

  return (
    <main className={styles.main}>
      <h1>
        Ovenplayer test

        <video id="player_el_id" />
      </h1>
    </main>
  )
}

export default Home
