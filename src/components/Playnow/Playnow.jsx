import styles from './Playnow.module.css'

export function Playnow({toggle}) {

        return (
            <div className={styles.container}>
            <div className={styles.image}>
                <img src='https://github.com/anshuopinion/React-10-Projects/blob/project-3/project-3/public/images/dices.png?raw=true'/>
                
            </div>    
            <div className={styles.play}>
                <div className={styles.text}>
                <p>DICE GAME</p>
                <button onClick={toggle}>PLAY NOW</button>
                </div>
            </div>
            </div>
        )

}