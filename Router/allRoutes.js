import Route from "./Route.js";

// Définir les routes ici
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
];

// Le titre de la page = le nom de la page en cours
export const websiteName = "Quai Antique";
