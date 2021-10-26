//Import le css de Footer
import style from "./Footer.module.css"

const Footer = () =>{
    return (
        <footer>
            <div className={style.footer}>
                <h3>Menus</h3>
                <ul>
                    <li>Accueil</li>
                    <li>Galerie</li>
                    <li>A propos</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={style.footer}>
                <h3>Réseaux sociaux</h3>
                <ul>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div className={style.footer}>
                <h3>Besoin d'information ?</h3>
                <ul>
                    <li>frocusx@hotmail.fr</li>
                </ul>
            </div>
        </footer>

    )

    
}

//Permet d'exporter le composant Footer 
export default Footer;