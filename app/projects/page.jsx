import styles from "./projects.module.css"


export default function Projects () {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <div>
          <a href="https://pi-foods-ivan-plaza.vercel.app/" target="blank">
            <img className={styles.img} align="center" src="https://img.freepik.com/vector-premium/plantilla-logotipo-pizza-adecuada-logotipo-restaurante-cafeteria_607277-267.jpg?w=2000" alt="https://discord.gg/KDFNA8Qf"/>
          </a>
          <a href="https://github.com/IvanPlaza44/PI-FOOD" target="blank">
            <img className={styles.img} align="center" src="https://www.svgrepo.com/show/325236/github.svg" alt="https://github.com/IvanPlaza44/PI-FOOD"/>
          </a>
        </div>
        <iframe src="https://www.youtube.com/embed/ZgsCnI4u8uI&t=1s" title="Pi Foods Video" frameborder="0" allowfullscreen/>
      </div>
      {/* <div className={styles.project}>
        <a  href="https://pi-foods-ivan-plaza.vercel.app/" target="blank">
          <img className={styles.img} align="center" src="https://img.freepik.com/vector-premium/plantilla-logotipo-pizza-adecuada-logotipo-restaurante-cafeteria_607277-267.jpg?w=2000" alt="https://discord.gg/KDFNA8Qf"/>

          <iframe src="https://www.youtube.com/watch?v=ZgsCnI4u8uI" title="Pi Foods Video" frameborder="0" allowfullscreen/>
        </a>
      </div> */}
    </div>
  )
}
