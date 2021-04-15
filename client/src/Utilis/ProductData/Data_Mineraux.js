import Calcium_plus from '../../assets/Mineraux/calcium_plus.jpg';
import Chrome from '../../assets/Mineraux/chrome.jpg';
import Fer from '../../assets/Mineraux/Fer.jpg';
import Magnesium from '../../assets/Mineraux/magnesium.jpg';
import Zinc from '../../assets/Mineraux/zinc.jpg';

const Data_Mineraux = [
  {
    id: 1,
    name: 'Calcium Plus',
    price: 12,
    nombreGelluleParJour: 1,
    Description: `Contrairement aux autres mammifères, l'être humain ne peut pas synthétiser sa propre Vitamine C. Il en a perdu la capacité il y a plus de 40 millions d'années, pour des raisons encore sujettes à débat au sein de la communauté scientifique. Il doit donc s'en procurer chaque jour par le biais de son alimentation. La vitamine C joue un rôle important dans de très nombreux processus de notre organisme. Elle aide le corps à produire du collagène, elle contribue au bon fonctionnement de notre système immunitaire, elle participe à la formation des globules rouges et augmente l'absorption du fer contenu dans les végétaux. La Vitamine C est aussi un puissant antioxydant qui permet de prévenir le vieillissement des cellules et de detoxiquer l'organisme.`,
    img: Calcium_plus,
    backgroundColor: '#48B0CC',
  },
  {
    id: 2,
    name: 'Chrome',
    price: 6,
    nombreGelluleParJour: 1,
    Description: `L’être humain parvient à synthétiser sa propre Vitamine B12 mais en quantité insuffisante pour couvrir ses besoins. Cette vitamine est généralement apportée par l'alimentation. Cette vitamine est clé pour certains mécanismes de notre corps comme la division cellulaire, la production d'énergie et la formation de l'hémoglobine. Elle aide aussi au maintien de fonctions psychologiques normales et bon fonctionnement du système immunitaire. Les végétariens et végétaliens sont les plus sujets aux carences en Vitamine B12 puisque cette vitamine se trouve essentiellement dans les aliments d’origine animale.`,
    img: Chrome,
  },
  {
    id: 3,
    name: 'Fer',
    price: 6,
    nombreGelluleParJour: 2,
    Description:
      'La prise de compléments est recommandée avant, pendant et après la grossesse car lorganisme est sujet à de nombreux bouleversements et les besoins en nutriments sont accrus pour la mère et lenfant.En effet, le Collège des Gynécologues-Obstétriciens Français (CNGOF) et la Haute Autorité de Santé (HAS) recommandent la supplémentation systématique de Vitamine B9 (acide folique) et Vitamine D. La Vitamine B9 contribue à la croissance des tissus maternels durant la grossesse et est essentielle au bon développement du système nerveux du fœtus. La Vitamine D aide au bon développement du squelette du bébé.',
    img: Fer,
  },
  {
    id: 4,
    name: 'Magnesium',
    price: 9,
    nombreGelluleParJour: 1,
    Description: `Les vitamines du groupe B jouent un rôle essentiel dans l'organisme. Elles interviennent à de nombreux niveaux comme la production de l'énergie, la synthèse des protéines, la formation de l'hémoglobine, la régénération cellulaire, la croissance et enfin le fonctionnement du système nerveux central. Elles sont particulièrement recommandées pour les régimes alimentaires excluant les aliments d'origine animale (B12), les fruits et légumes et le gluten (B12 et B6). Les vitamines du groupe B sont également à considérer si votre consommation d'alcool est importante.`,
    img: Magnesium,
  },
  {
    id: 5,
    name: 'Zinc',
    price: 6,
    nombreGelluleParJour: 1,
    Description: `Au Japon, les chercheurs ont remarqué que les populations consommant régulièrement du nattō (aliment traditionnel à base de soja fermenté, riche en vitamine K2) étaient beaucoup moins touchées par les problèmes osseux. En effet, naturellement produite par la flore intestinale (lorsqu'elle est saine et abondante), la vitamine K2 agit en synergie avec la vitamine D et le calcium pour former et maintenir des os et des dents solides.`,
    img: Zinc,
  },
];

export default Data_Mineraux;
