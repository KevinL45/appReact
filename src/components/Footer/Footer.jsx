//Import le css de Footer
import styles from "./Footer.module.css"

const Footer = () =>{
    return (
        <footer>
            <div className={styles.footer}>
                <h3>MENUS</h3>
                <ul className={styles.onglets}>
                <li className={styles.lien}>Accueil</li>
                <li className={styles.lien}>Galerie</li>
                <li className={styles.lien}>A propos</li>
                <li className={styles.lien}>Contact</li>
                </ul>
            </div>
            <div className={styles.footer}>
                <h3>RESEAUX SOCIAUX</h3>
                <ul className={styles.onglets}>
                <li className={styles.lien}>Twitter</li>
                <li className={styles.lien}>Youtube</li>
                </ul>
            </div>
            <div className={styles.footer}>
                <h3>ME CONTACTER</h3>
                <ul className={styles.onglets}>
                <li className={styles.lien}>frocusx@hotmail.fr</li>
                </ul>
            </div>
        </footer>

    )

    
}

//Permet d'exporter le composant Footer 
export default Footer;