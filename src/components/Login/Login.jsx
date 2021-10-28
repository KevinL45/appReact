import styles from "./Login.module.css"



const Login = () => {
    return(
    <div className={styles.contenu}>
        <div className={styles.formulaire}>
                <div className={styles.login}>Connexion</div>
                <div className={styles.label}>Email :</div>
                <div className={styles.label}>Mot de passe  :</div>
        </div>
    </div>

    );
};
//Permet d'exporter le composant Login
export default Login;