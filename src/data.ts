import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Loïs Monty",
  role: "Game developpeuse Unity junior",
  introduction: "Développeuse Unity en formation. J'aime les jeux vidéos particulièrement les actions platformer et les puzzle games",
  description: "Je m’intéresse à l’implémentation de mécaniques de gameplay et à la création de systèmes data-driven.\n" +
      "\n" +
      " J’aime concevoir des outils et des architectures permettant de faciliter l’intégration de contenu et l’itération.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/MONTY_Lois_CV.pdf`,
  links: {
    github: "https://github.com/MontyLois",
    itchIO: "https://yuefty.itch.io/",
    linkedIn: "https://www.linkedin.com/in/lo%C3%AFs-monty-3a13b6243/",
  }
};

export const games: Game[] = [
  {
    name: "Duck, Nuke Them !",
    description: "Dans ce jeu de type Idle, vous devez gérer vos canards qui partiront au combat contre les bulles, dans l'espoir d'atteindre le savon.",
    genres: ["Idle Game"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Hollie314/DuckNukethem" },
      //{ source: LinkImageSource.ItchIo, url: "https://monsieurp.itch.io/duck-nuke-them" },
    ],
    media: [
      { source: "/images/games/DNT/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
    ],
  },
  {
    name: "CatNip Flip",
    description: "Ce jeu de flipper vous entraîne dans une aventure délirante : plus vous marquez de points, plus le plateau défile rapidement. Saurez‑vous relever le défi du Chat de Cheshire?",
    genres: ["Flipper "],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/MontyLois/Catnip" },
      { source: LinkImageSource.ItchIo, url: "https://hollie31415.itch.io/catnip-flip" },
    ],
    media: [
      { source: "/images/games/CatnipFlip/Screenshot_1.png", type: MediaType.Image },
      //{ source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
    ],
  },
  {
    name: "Witch's Gate",
    description: "Witch’s Gate est un jeu hybride, mélangeant deck building et Visual Novel. Incarnez deux sœurs sorcières chargées d’enquêter sur l’apparition de monstres en ville. \n" +
        "Utilisez vos cartes de tarot pour sonder l’esprit de vos interlocuteurs et combattre des monstres.\n",
    genres: ["Deck Builder ", "Visual Novel"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/MontyLois/Witch_Gate" },
    ],
    media: [
      { source: "/images/games/WitchSGate/Screenshot_1.png", type: MediaType.Image },
      //{ source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
    ],
  }
];