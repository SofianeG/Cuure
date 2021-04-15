import collagene from '../../assets/Spécialités/collagene.jpg';
import complexe_solaire from '../../assets/Spécialités/complexe_solaire.jpg';
import LTyrosine from '../../assets/Spécialités/L_Tyrosine.jpg';
import Omega3 from '../../assets/Spécialités/Omega3.jpg';
import omega_vegetal from '../../assets/Spécialités/omega_vegetal.jpg';

const Data_Specialites = [
  {
    id: 1,
    name: 'Collagène',
    price: 29,
    nombreGelluleParJour: 2,
    Description: `Le collagène est une protéine fibreuse dite structurale. Avec l'élastine, l’acide hyaluronique et les glycoprotéines, il est responsable de la cohésion des tissus et des organes, dont la peau. Il confère à cette dernière hydratation, résistance et souplesse. Au fil des années cependant, la synthèse du collagène diminue et peau devient plus fine et se ride.`,
    img: collagene,
  },
  {
    id: 2,
    name: 'complexe solaire',
    price: 15,
    nombreGelluleParJour: 2,
    Description: `Le Complexe Solaire, grâce à ses 9 actifs agissant en synergie, possède 4 actions ciblées sur votre peau. D’abord, il prépare la peau à l’exposition solaire et la protège du vieillissement cutané. Ensuite, il colore naturellement la peau et active le bronzage par sa richesse en caroténoïdes. Enfin, il permet de maintenir naturellement un hâle doré et durable.`,
    img: complexe_solaire,
  },
  {
    id: 3,
    name: 'L-Tyrosine',
    price: 9,
    nombreGelluleParJour: 1,
    Description: `La L-Tyrosine est un acide aminé que l’on retrouve notamment dans les bananes, les amandes et certains fromages à pâte dure. Elle intervient dans la fabrication de la dopamine et de l'adrénaline, deux neurotransmetteurs importants pour le maintien de la santé cérébrale, la régulation de l’humeur et la lutte contre les effets liés au stress.`,
    img: LTyrosine,
  },
  {
    id: 4,
    name: 'Omega 3',
    price: 12,
    nombreGelluleParJour: 2,
    Description: `Les bénéfices des Oméga 3 sont depuis longtemps connus comme en témoigne le fameux remède de grand-mère, cauchemar des écoliers d'antan : l'huile de foie de morue. Cette huile est riche en acides gras (EPA,DHA) et en vitamines A et D. Fort heureusement, aujourd'hui le format de la capsule molle permet de profiter des bienfaits de l'huile de foie de morue, sans faire l'expérience de son goût ... très particulier.`,
    img: Omega3,
  },
  {
    id: 5,
    name: 'omega vegetal',
    price: 18,
    nombreGelluleParJour: 1,
    Description: `Les oméga 3 sont des acides gras polyinsaturés que l'on retrouve dans les poissons gras et certaines huiles végétales (chia, lin, perilla). Ils sont qualifiés d'essentiels car ils ne peuvent être synthétisés par l'organisme et doivent être apportés par l'alimentation. Si vous êtes végétarien ou végétalien, notre Oméga Végétal est un excellent moyen de vous procurer ces acides gras.`,
    img: omega_vegetal,
  },
];

export default Data_Specialites;
