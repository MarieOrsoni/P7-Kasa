import { Link } from "react-router-dom";
import './error.scss';

function Error () {
    return ( 
    <div className="error">
    <h1>404</h1>
    <p>{`Oups! La page que vous demandez n'existe pas.`}</p>
    <p>
    <Link className="alink" to="/">Retourner sur la page d’accueil</Link>
    </p>
    </div>
    );
}
export default Error;