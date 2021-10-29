import logo from './../../img/fx.png';
import styles from "./Logo.module.css"

const Logo = () => {
    return(

        <img className={styles.logo}  src={logo} />

    );
};
//Permet d'exporter le composant header
export default Logo;