import VitamineC from '../../assets/Vitamines/vitamineC.jpg';
import BComplexe from '../../assets/Vitamines/B_Complexe.jpg';
import Vitamine_B12 from '../../assets/Vitamines/Vitamine_B12.jpg';
import vitamine_k2 from '../../assets/Vitamines/vitamine_k2.jpg';
import Complexe_Maternite from '../../assets/Vitamines/Complexe_Maternite.jpg';

const Data_Vitamines = [
  {
    id: 1,
    name: 'Vitamine C',
    price: 6,
    nombreGelluleParJour: 1,
    Description: `La Vitamine C aide à protéger les cellules contre le stress oxydatif ce qui en fait un acteur clé dans le processus de detoxification de notre corps. La Vitamine C contribue par ailleurs à la production de collagène, à la synthèse des neurotransmetteurs, à la bonne absorption du fer, ainsi qu'au fonctionnement normal de notre système immunitaire.`,
    img: VitamineC,
  },
  {
    id: 2,
    name: 'B Complexe',
    price: 12,
    nombreGelluleParJour: 1,
    Description: `On appelle Vitamine B le groupe de 8 vitamines composé par la thiamine (B1), la riboflavine (B2), la niacine (B3), l'acide pantothénique (B5), la pyridoxine (B6), la biotine (B8), l'acide folique (B9) et la  cobalamine (B12). Si les Vitamine B3 et B12 peuvent être synthétisées par notre organisme, les autres vitamines de ce groupe doivent être apportées par notre alimentation. Les vitamines de ce groupe aident notamment au bon fonctionnement de notre système nerveux et immunitaire, ainsi qu'au maintien d'une peau et de cheveux normaux.`,
    img: BComplexe,
  },
  {
    id: 3,
    name: 'Vitamine B12',
    price: 6,
    nombreGelluleParJour: 1,
    Description:
      'Aussi connue sous le nom de Cobalamine, la Vitamine B12 est l’une des 8 vitamines qui composent le complexe B. Cette vitamine contribue au fonctionnement normal du système nerveux et à réduire la fatigue. Elle se retrouve essentiellement dans les aliments d’origine animale. Elle est donc particulièrement recommandée pour les végétariens et les végétaliens.',
    img: Vitamine_B12,
  },
  {
    id: 4,
    name: 'vitamine k2',
    price: 12,
    nombreGelluleParJour: 1,
    Description: `Au Japon, les chercheurs ont remarqué que les populations consommant régulièrement du nattō (aliment traditionnel à base de soja fermenté, riche en vitamine K2) étaient beaucoup moins touchées par les problèmes osseux. En effet, naturellement produite par la flore intestinale (lorsqu'elle est saine et abondante), la vitamine K2 agit en synergie avec la vitamine D et le calcium pour former et maintenir des os et des dents solides.`,
    img: vitamine_k2,
  },
  {
    id: 5,
    name: 'Complexe Maternite',
    price: 25,
    nombreGelluleParJour: 2,
    Description: `Lors des phases entourant la grossesse, l'organisme est sujet à de nombreux bouleversements et le corps a besoin d’un apport supplémentaire en vitamines et minéraux afin d’assurer le parfait développement du bébé. L'acide folique (Vitamine B9) tout comme la Vitamine D sont particulièrement recommandés avant et pendant la grossesse.`,
    img: Complexe_Maternite,
  },
];

export default Data_Vitamines;
