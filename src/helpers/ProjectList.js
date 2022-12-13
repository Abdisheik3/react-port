import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.webp";
import Proj4 from "../assets/proj4.webp";


export const ProjectList = [
  {
    name: "Connect 4 ",
    image: Proj1,
    skills: "JavaScript,HTML,CSS",
    desc: "A game where two players alter placing pieces in each column of a 7x6 grid. Once placed that spot is taken and if another piece is placed in the same column. That piece will go on top of the previous piece. Once a player has 4 in a row, they win.",
  },
  {
    name: "Anime Creation",
    image: Proj2,
    skills: "React,Node.js,MongoDB",
    desc: "An app that allows the users to create a character for an anime. With this app you can view list of animes and the characters in them. If you don't like a character from an anime, you can either delete the whole character or update them. With created or existing characters you can add them to your anime.",
  },
  {
    name: "GameShare",
    image: Proj3,
    skills: "React,Node.js,MongoDB,SpotifyAPI",
    desc: "",
  },
  {
    name: "Crypto Watcher",
    image: Proj4,
    skills: "React,Node.js,MySQL,GraphQL",
    desc: "CryptoWatcher is a cryptocurrency tracking app that allows you to keep track of all your coins. You can add and delete any coins you wish to add to your watch list. You can also comment on coins to help your cryptos buddies.",
  },

];
