import styles from "./Header.module.css"
import Logo from "../Logo/Logo";


const Header = () => {
    return(
    <header>
    <div>
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
    </div>
    </header>
    );
};
//Permet d'exporter le composant header
export default Header;