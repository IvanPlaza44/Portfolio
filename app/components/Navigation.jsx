import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./Navigation.module.css"
import ip from "../../images/ip.gif"
import Logo from "../../images/Logo.png"

const Links = [{
  label:"Home",
  route: "/",
  src: "https://cdn-icons-png.flaticon.com/256/5546/5546120.png"
},{
  label:"About",
  route: "/about",
  src: "https://t4.ftcdn.net/jpg/05/34/18/69/240_F_534186910_T3ieVilB86S6uNqbXnT6LEvepbpBvF7z.jpg"
},{
  label:"Projects",
  route: "/projects",
  src: "https://cdn-icons-png.flaticon.com/256/1063/1063376.png"
},{
  label:"Contacts",
  route: "/contacts",
  src: "https://cdn-icons-png.flaticon.com/256/2258/2258861.png"
},{
  label:"Skills",
  route: "/skills",
  src: "https://cdn-icons-png.flaticon.com/256/8016/8016946.png"
}
]

export const Navigation = () => {
    
  return (
    <div>
      <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
        <Image className={styles.logo} src={ip} alt="Logo"/>
          {Links.map(({label, route, src})=>(
            <li key={route}>
              <Link href={route}>
                <img className={styles.img} src={src} alt={label}/>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    </div>
  )
}
