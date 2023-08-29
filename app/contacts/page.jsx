import React from 'react'
import styles from "./contacts.module.css"

export default function Contacts () {
  return (
    <div>
        <title>Contacts</title>
        <h1 className={styles.text}>Conecta Conmigo</h1>
        <div className={styles.container}>
          <a href="https://linkedin.com/in/ivan-andres-plaza/" target="blank">
              <img className={styles.img} src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/ivan-andres-plaza/" /></a>
            
          <a href="https://discord.gg/https://discord.gg/KDFNA8Qf" target="blank">
              <img className={styles.img} src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png" alt="https://discord.gg/KDFNA8Qf"/></a>
              
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBnpzKbmnwxjmhHCSfWLFDcsVnzfVkBWfFfqgqqFdLxKRJccHFxlBlnmwChjlbpLlzsTwXz" target="blank">
              <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="https://discord.gg/KDFNA8Qf" /></a>
        </div>

    </div>
    
  )
}
 