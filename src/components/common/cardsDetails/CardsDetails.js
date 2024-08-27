
import React, { useEffect } from "react";
import logsData from "../../../data/logements.json";
import './CardsDetails.scss';
import renderStars from "../renderStars/renderStars";
import Carousel from "../carousel/Carousel";
import Collapse from "../collapse/Collapse";
import { useLocation, useParams, useNavigate} from 'react-router-dom';



/**
 * Cette fonction affiche les détails d'une carte de location de manière détaillée.
 * Elle récupère l'identifiant du lot à afficher à partir de l'URL grâce à `useParams()`.
 * Elle recherche ensuite les informations du lot correspondant dans `logement`.
 * Si le lot est trouvé, elle affiche toutes les informations du lot : une galerie d'images, le titre et l'emplacement du lot, le nom et la photo de l'hôte, la note du lot, une liste de tags associés, une section avec une description détaillée et une liste d'équipements.
 * Sinon, elle redirige vers la page NotFound.
 * @returns Le contenu de la page détaillée d'un lot en fonction de son id.
 */
function CardsDetails() {
    // Récupère l'ID du lot à afficher à partir de l'URL
    const { id } = useParams();
  
    // Recherche les informations du lot correspondant dans `logements`
    const lot = logsData.find((lot) => lot.id === id);
  
    // Récupère l'objet `location` pour récupérer l'URL courante
    const location = useLocation();
  
    // Récupère l'objet `history` pour naviguer vers une autre page en cas d'erreur
    const history = useNavigate();
  
    // Vérifie si le lot est valide et sinon, redirige l'utilisateur vers la page NotFound
    useEffect(() => {
      if (!lot) {
        history(`/kasa/notfound?from=${location.pathname}`);
      }
    }, [history, location.pathname, lot]);
  
    // Si le lot est valide, affiche toutes les informations sur la page détaillée
    if (lot) {
        return (
            <article className="card-details">
            <Carousel images={lot.pictures} />    
                <section className="title-location-host-rating">
                <div className="title-location">
                    <h2 className="logs-title">{lot.title}</h2>
                    <div className="logs-location">{lot.location}</div>
                </div>
                <div className="host-rating">
                    <div className="logs-host">
                    <p className="host-name">{lot.host.name}</p>
                    <img className="host-picture" src={lot.host.picture} alt={lot.host.name}/>
                    </div>
                    <div className="rating"> {renderStars(lot.rating)}</div>
                </div>
                </section> 
                <div className="logs-tags">{
                lot.tags.map((tags)=>
                <button key={tags}>{tags}</button> )
                }</div> 
                <section className="homeCollapse">
                
                <div className="logs-description">
                    <Collapse title="Description">
                    <p>{lot.description}</p>
                    </Collapse>   
                </div> 
                <div className="logs-equipements">
                    <Collapse title="Equipements">{lot.equipments.map((equipement)=>
                    <li key={equipement}>{equipement}</li>)}
                    </Collapse>  
                </div>
                </section>
          </article>
                );
            }
    }      
            export default CardsDetails;
            