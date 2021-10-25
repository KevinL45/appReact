import styles from "./Header.module.css"
const Header = () => {
    return(
    <header>
        <div className="header">
            <ul>
                <li>Accueil</li>
                <li>Contact</li>
                <li>A propos</li>
            </ul>
        </div>
    </header>
    );
};
//Permet d'exporter le composant header
export default Header;