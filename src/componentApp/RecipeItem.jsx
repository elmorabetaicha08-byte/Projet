import { useState } from "react";
function RecipeItem({ recette, onSupprimer, onDupliquer, onModifier }) {
  const [duplique, setDuplique] = useState(false);
  function dupliquer() {
    onDupliquer(recette);
    setDuplique(true);
    setTimeout(() => setDuplique(false), 2000);
  }

  return (
    <article className="card">
      <div className="card-img">
        {recette.image ? (
          <img src={recette.image} alt={recette.nom} />
        ) : (
          <span className="card-img-vide">🍴</span>
        )}
      </div>

      <div className="card-body">
        <div className="card-head">
          <h2>{recette.nom}</h2>
          <span className="badge">{recette.categorie}</span>
        </div>

        <p className="desc">{recette.description}</p>

        <div className="chips">
          {recette.ingredients.map((ing, i) => (
            <span className="chip" key={i}>{ing}</span>
          ))}
        </div>

        <p className="difficulte">
          <strong>Difficulté : </strong>
          {Array.from({ length: recette.difficulte }, (_, i) => (
            <span key={i}>🔥</span>
          ))}
        </p>
        <p className="date">
          Créée : {new Date(recette.creeLe).toLocaleString()}
        </p>

        <div className="card-actions">
          <button className="btn btn-gris" onClick={() => onModifier(recette)}>
            Modifier
          </button>
          <button className="btn btn-bleu" onClick={dupliquer}>
            Dupliquer
          </button>
          <button className="btn btn-rouge" onClick={() => onSupprimer(recette.id)}>
            Supprimer
          </button>
        </div>

        {duplique && <p className="info">Recette dupliquée !</p>}
      </div>
    </article>
  );
}

export default RecipeItem;
