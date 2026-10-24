function Aide() {
  return (
    <div className="aide">
      <div className="aide-head">
        <h3>Aide rapide</h3>
        <span className="version">v1.0</span>
      </div>
      <ul>
        <li>
          Cliquez sur <strong>+ Créer une nouvelle recette</strong> pour ouvrir
          le formulaire.
        </li>
        <li>Utilisez <strong>Modifier</strong>, <strong>Dupliquer</strong> ou <strong>Supprimer</strong> sur chaque carte.</li>
        <li>Recherchez par nom et filtrez par catégorie en haut de la page.</li>
        <li>Pagination numérotée en bas de la liste.</li>
      </ul>
    </div>
  );
}

export default Aide;
