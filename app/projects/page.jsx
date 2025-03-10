import styles from "./projects.module.css"


export default function Projects () {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <div className={styles.container}>
          <a href="https://pi-foods-ivan-plaza.vercel.app/" target="blank">
            <img className={styles.img} align="center" src="https://static.vecteezy.com/system/resources/previews/019/613/640/original/pizza-graphic-clipart-design-free-png.png" alt="https://discord.gg/KDFNA8Qf"/>
          </a>
          <a href="https://github.com/IvanPlaza44/PI-FOOD" target="blank">
            <img className={styles.img} align="center" src="https://www.svgrepo.com/show/325236/github.svg" alt="https://github.com/IvanPlaza44/PI-FOOD"/>
          </a>
        </div>
        <iframe className={styles.video} src="https://www.youtube.com/embed/ZgsCnI4u8uI?autoplay=1" title="Pi Foods Video" frameborder="0" allowfullscreen/>
      </div>

      <div className={styles.project}>
        <div className={styles.container}>
          <a href="https://tres-en-raya-kappa.vercel.app/" target="blank">
            <img className={styles.img} align="center" src="https://cdn-icons-png.flaticon.com/256/53/53654.png" alt="https://discord.gg/KDFNA8Qf"/>
          </a>
          <a href="https://github.com/IvanPlaza44/TresEnRaya" target="blank">
            <img className={styles.img} align="center" src="https://www.svgrepo.com/show/325236/github.svg" alt="https://github.com/IvanPlaza44/PI-FOOD"/>
          </a>
        </div>
        <iframe className={styles.video} src="https://www.youtube.com/embed/l16CMeNXxec?autoplay=1" title="Pi Foods Video" frameborder="0" allowfullscreen/>
      </div>

      {/* <div className={styles.project}>
        <div className={styles.container}>
          <a href="https://pi-foods-ivan-plaza.vercel.app/" target="blank">
            <img className={styles.img} align="center" src="https://img.freepik.com/vector-premium/plantilla-logotipo-pizza-adecuada-logotipo-restaurante-cafeteria_607277-267.jpg?w=2000" alt="https://discord.gg/KDFNA8Qf"/>
          </a>
          <a href="https://github.com/IvanPlaza44/PI-FOOD" target="blank">
            <img className={styles.img} align="center" src="https://www.svgrepo.com/show/325236/github.svg" alt="https://github.com/IvanPlaza44/PI-FOOD"/>
          </a>
        </div>
        <iframe className={styles.video} src="https://www.youtube.com/embed/ZgsCnI4u8uI?autoplay=1" title="Pi Foods Video" frameborder="0" allowfullscreen/>
      </div> */}
      
 
    </div>
  )
}
