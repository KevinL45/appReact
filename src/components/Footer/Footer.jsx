//Import le css de Footer
import style from "./Footer.module.css"

const Footer = () =>{
    return (
        <footer>
            <div className={style.footer}>
                <h3>Menus</h3>
                <ul className={style.onglets}>
                    <li>Accueil</li>
                    <li>Galerie</li>
                    <li>A propos</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={style.footer}>
                <h3>Réseaux sociaux</h3>
                <ul className={style.onglets}>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div className={style.footer}>
                <h3>Me contacter </h3>
                <ul className={style.onglets}>
                    <li>frocusx@hotmail.fr</li>
                </ul>
            </div>
        </footer>

    )

    
}

//Permet d'exporter le composant Footer 
export default Footer;