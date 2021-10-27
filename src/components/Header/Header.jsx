import styles from "./Header.module.css"
import Logo from "../Logo/Logo";


const Header = () => {
    return(
    <header>
    <div>
        <div className={styles.menu}>
            <nav>
                <ul className={styles.onglets}>
                    <li className={styles.lien}>ACCUEIL</li>
                    <li className={styles.lien}>GALERIE</li>
                    <li className={styles.lien}>A PROPOS</li>
                    <li className={styles.lien}>CONTACT</li>
                </ul>
            </nav>
        </div>
    </div>
    </header>
    );
};
//Permet d'exporter le composant header
export default Header;