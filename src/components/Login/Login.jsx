import styles from "./Login.module.css"



const Login = () => {
    return(
    <div className={styles.contenu}>
        <div className={styles.formulaire}>
                <div className={styles.login}>CONNEXION</div>
                <div className={styles.label}>Email</div>
                <input></input>
                <div className={styles.label}>Mot de passe </div>
                <input></input>
                <div>
                <button type="button" class="storybook-button storybook-button--medium storybook-button--primary">Connexion</button>
                </div>
        </div>
    </div>

    );
};
//Permet d'exporter le composant Login
export default Login;