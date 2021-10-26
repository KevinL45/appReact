import styles from "./Header.module.css"
import Logo from "../LogoFX";

const Header = () => {
    return(
    <header>
    <div className={styles.logo}>
        <Logo/>
    </div>
        <div className={styles.menu}>
            <nav>
                <ul className={styles.onglets}>
                    <li className={styles.lien}>Accueil</li>
                    <li className={styles.lien}>Galerie</li>
                    <li className={styles.lien}>A propos</li>
                    <li className={styles.lien}>Contact</li>
                </ul>
            </nav>
    </div>
    </header>
    );
};
//Permet d'exporter le composant header
export default Header;