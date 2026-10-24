import { useState } from "react";

function RecipeForm({ recetteInitiale, onSave, onClose }) {
  const edition = recetteInitiale !== null;

  const [nom, setNom] = useState(recetteInitiale?.nom ?? "");
  const [categorie, setCategorie] = useState(recetteInitiale?.categorie ?? "Plat");
  const [ingredients, setIngredients] = useState(
    recetteInitiale?.ingredients.length ? recetteInitiale.ingredients : [""]
  );
  const [difficulte, setDifficulte] = useState(recetteInitiale?.difficulte ?? 2);
  const [description, setDescription] = useState(recetteInitiale?.description ?? "");
  const [image, setImage] = useState(recetteInitiale?.image ?? "");

  function ajouterIngredient() {
    setIngredients([...ingredients, ""]);
  }

  function modifierIngredient(index, valeur) {
    setIngredients(ingredients.map((ing, i) => (i === index ? valeur : ing)));
  }

  function supprimerIngredient(index) {
    setIngredients(ingredients.filter((_, i) => i !== index));
  }

  function choisirImage(e) {
    const fichier = e.target.files[0];
    if (fichier) setImage(URL.createObjectURL(fichier));
  }

  function enregistrer(e) {
    e.preventDefault();
    onSave({
      id: edition ? recetteInitiale.id : Date.now(),
      creeLe: edition ? recetteInitiale.creeLe : new Date().toISOString(),
      nom: nom.trim(),
      categorie,
      ingredients: ingredients.map((i) => i.trim()).filter(Boolean),
      difficulte,
      description,
      image,
    });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form
        className="modal"
        onSubmit={enregistrer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2>{edition ? "Modifier la recette" : "Nouvelle recette"}</h2>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Fermer
          </button>
        </div>

        <label htmlFor="nom">Nom</label>
        <input
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Ex: Pancakes maison"
          required
        />

        <label htmlFor="categorie">Catégorie</label>
        <select
          id="categorie"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option>Entrée</option>
          <option>Plat</option>
          <option>Dessert</option>
          <option>Boisson</option>
        </select>

        <label>Ingrédients</label>
        {ingredients.map((ing, index) => (
          <div className="ingredient-row" key={index}>
            <input
              value={ing}
              onChange={(e) => modifierIngredient(index, e.target.value)}
              placeholder={`Ingrédient ${index + 1}`}
            />
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => supprimerIngredient(index)}
              disabled={ingredients.length === 1}
            >
              Suppr
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-outline btn-block" onClick={ajouterIngredient}>
          + Ajouter ingrédient
        </button>

        <label htmlFor="difficulte">
          Difficulté : <span className="valeur">{difficulte}</span>
        </label>
        <input
          id="difficulte"
          type="range"
          min="1"
          max="5"
          value={difficulte}
          onChange={(e) => setDifficulte(Number(e.target.value))}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="image">Image</label>
        <input id="image" type="file" accept="image/*" onChange={choisirImage} />
        {image && <img className="apercu" src={image} alt="Aperçu" />}

        <div className="modal-actions">
          <button type="submit" className="btn btn-primary">Enregistrer</button>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
