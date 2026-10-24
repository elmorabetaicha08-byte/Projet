function RecipeFilter({ recherche, categorie, onRecherche, onCategorie }) {
  return (
    <div className="filter">
      <input type="text" placeholder="Rechercher..."value={recherche} onChange={(e) => onRecherche(e.target.value)}/>
      <select value={categorie} onChange={(e) => onCategorie(e.target.value)}>
        <option value="Toutes">Toutes catégories</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
        <option value="Boisson">Boisson</option>
      </select>
    </div>
  );
}
export default RecipeFilter;