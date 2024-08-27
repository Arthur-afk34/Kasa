import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss"


/**
La fonction NotFound est un composant React qui est rendu lorsqu'une route demandée n'existe pas.
Elle affiche un message d'erreur 404 et une invite à retourner à la page d'accueil.
@returns le contenu du composant NotFound
*/
export default function NotFound() {
    return (
        <>
        <div className="NotFound">
            <p className="error404">404</p>
            <div className="errorText">
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                <h3> <Link to="/kasa/">Retourner a la page d'Accueil</Link> </h3>
            </div>
        </div>
        </>
    );
}