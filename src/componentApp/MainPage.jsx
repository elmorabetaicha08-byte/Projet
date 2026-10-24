import { useState } from "react";
import "./style.css";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import RecipeFilter from "./RecipeFilter";
import Pagination from "./Pagination";
import Aide from "./Aide";

const RECETTES_PAR_PAGE = 4;

const RECETTES_INITIALES = [
  {
    id: 1,
    nom: "Tacos méditerranéens",
    categorie: "Plat",
    ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"],
    difficulte: 4,
    description: "Tacos légers et parfumés.",
    image: "",
    creeLe: new Date().toISOString(),
  },
  {
    id: 2,
    nom: "Smoothie mangue",
    categorie: "Boisson",
    ingredients: ["Mangue", "Lait d'amande", "Miel"],
    difficulte: 1,
    description: "Boisson fraîche et fruitée.",
    image: "",
    creeLe: new Date().toISOString(),
  },
];

function MainPage() {
  const [recettes, setRecettes] = useState(RECETTES_INITIALES);
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("Toutes");
  const [page, setPage] = useState(1);
  const [modalOuverte, setModalOuverte] = useState(false);
  const [recetteEnEdition, setRecetteEnEdition] = useState(null);

  function ajouterRecette(recette) {
    setRecettes((liste) => [...liste, recette]);
  }

  function modifierRecette(recetteModifiee) {
    setRecettes((liste) =>
      liste.map((r) => (r.id === recetteModifiee.id ? recetteModifiee : r))
    );
  }

  function supprimerRecette(id) {
    setRecettes((liste) => liste.filter((r) => r.id !== id));
  }

  function dupliquerRecette(recette) {
    ajouterRecette({
      ...recette,
      id: Date.now(),
      creeLe: new Date().toISOString(),
    });
  }

  function ouvrirCreation() {
    setRecetteEnEdition(null);
    setModalOuverte(true);
  }

  function ouvrirEdition(recette) {
    setRecetteEnEdition(recette);
    setModalOuverte(true);
  }

  function fermerModale() {
    setModalOuverte(false);
    setRecetteEnEdition(null);
  }

  function enregistrer(recette) {
    if (recetteEnEdition) modifierRecette(recette);
    else ajouterRecette(recette);
    fermerModale();
  }
  const recettesFiltrees = recettes.filter(
    (r) =>
      r.nom.toLowerCase().includes(recherche.toLowerCase()) &&
      (categorie === "Toutes" || r.categorie === categorie)
  );

  const totalPages = Math.max(
    1,
    Math.ceil(recettesFiltrees.length / RECETTES_PAR_PAGE)
  );
  const pageCourante = Math.min(page, totalPages);

  const recettesAffichees = recettesFiltrees.slice(
    (pageCourante - 1) * RECETTES_PAR_PAGE,
    pageCourante * RECETTES_PAR_PAGE
  );

  return (
    <div className="app">
      <header className="topbar">
        <h1>🍽️ Creative Recipe Builder</h1>

        <div className="topbar-actions">
          <RecipeFilter
            recherche={recherche}
            categorie={categorie}
            onRecherche={(v) => { setRecherche(v); setPage(1); }}
            onCategorie={(v) => { setCategorie(v); setPage(1); }}
          />
          <button className="btn btn-primary" onClick={ouvrirCreation}>
            + Créer une nouvelle recette
          </button>
        </div>
      </header>

      <main className="layout">
        <section>
          <RecipeList
            recettes={recettesAffichees}
            onSupprimer={supprimerRecette}
            onDupliquer={dupliquerRecette}
            onModifier={ouvrirEdition}
          />
          <Pagination
            currentPage={pageCourante}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </section>

        <aside>
          <Aide />
        </aside>
      </main>

      {modalOuverte && (
        <RecipeForm
          recetteInitiale={recetteEnEdition}
          onSave={enregistrer}
          onClose={fermerModale}
        />
      )}
    </div>
  );
}

export default MainPage;
