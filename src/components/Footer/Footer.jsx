//Import le css de Footer
import styles from "./Footer.module.css"

const Footer = () =>{
    return (
        <footer>
                <div className={styles.grille}>
                <div>
                <ul className={styles.onglets}>
                <li className={styles.titre}>MENU</li>
                </ul>
                <div className={styles.ligne}></div>
                <ul className={styles.onglets}>
                <li className={styles.lien}>Galerie</li>
                <li className={styles.lien}>A propos</li>
                <li className={styles.lien}>Contact</li>
                </ul>
                </div>

                <div>
                <ul className={styles.onglets}>
                <li className={styles.titre}>RESEAUX SOCIAUX</li>
                </ul>
                <div className={styles.ligne}></div>
                <ul className={styles.onglets}>
                <li className={styles.lien}>Twitter</li>
                <li className={styles.lien}>Youtube</li>
                </ul>
                </div>

                <div>
                <ul className={styles.onglets}>
                <li className={styles.titre}>ME CONTACTER</li>
                </ul>
                <div className={styles.ligne}></div>
                <ul className={styles.onglets}>
                <li className={styles.lien}>frocusx@hotmail.fr</li>
                </ul>
                </div>
                </div>


        </footer>

    )

    
}

//Permet d'exporter le composant Footer 
export default Footer;