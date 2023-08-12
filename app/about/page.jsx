import styles from "./about.module.css"


export default function About() {
  return (
    <div className={styles.container}>
      <title>About Me</title>

      <a href="https://www.linkedin.com/in/ivan-andres-plaza/">
        <img className={styles.image} src="https://avatars.githubusercontent.com/u/114622935?v=4" alt="Avatar"/>
      </a>

      <p className={styles.parrafo}>
        ¡Hola!👋 Soy Ivan Plaza, un apasionado desarrollador Full Stack con un fuerte enfoque en el mundo del Backend. Siempre estoy buscando adquirir nuevos conocimientos para innovar y crear soluciones increíbles para proyectos. Me encanta trabajar en equipo y disfruto colaborar con personas creativas.🚀💥

        Especializado en Front-end y Back-end, cuento con amplia experiencia en diversas tecnologías y frameworks. Además, tengo conocimientos en testing QA manual y Python, lo que me permite asegurar la calidad y robustez de las aplicaciones que desarrollo. Siempre estoy dispuesto a enfrentar nuevos desafíos y aprender de ellos. Mi objetivo es aportar de manera positiva en cada proyecto, buscando soluciones innovadoras que mejoren la experiencia del usuario.

        Soy un comunicador efectivo y puedo adaptarme rápidamente a entornos dinámicos. En mi trayectoria, he demostrado habilidades creativas y de trabajo en equipo destacadas. Siempre estoy en búsqueda de oportunidades para crecer profesionalmente y contribuir al éxito de los equipos de desarrollo.
      </p>

    </div>
  );
}
