import RecipeItem from "./RecipeItem";

function RecipeList({ recettes, onSupprimer, onDupliquer, onModifier }) {
  if (recettes.length === 0) {
    return <p className="vide">Aucune recette disponible.</p>;
  }

  return (
    <div className="recipe-grid">
      {recettes.map((recette) => (
        <RecipeItem
          key={recette.id}
          recette={recette}
          onSupprimer={onSupprimer}
          onDupliquer={onDupliquer}
          onModifier={onModifier}
        />
      ))}
    </div>
  );
}

export default RecipeList;
