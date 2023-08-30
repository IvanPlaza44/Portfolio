import React from 'react';
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      
      <h1> Hola {"<Coders</>!!!"} </h1>

      <img className={styles.icon} src = "https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"></img>


      <h1> Bienvenios!!!! Mi nombre es Ivan Plaza 😁</h1>
      

      <img className={styles.img} src="https://media.giphy.com/media/QvpqTCiEcwtvx6wwJK/giphy.gif"  frameBorder="0" class="giphy-embed" allowFullScreen></img>


    </div>
  );
}
