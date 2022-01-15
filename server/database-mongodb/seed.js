const db = require("./index.js");
const { medecine } = require("./schemas.js");

const samplePosts = [
  //Teeths
  {
    name: "DRILL SANS SUCRE Pastilles Bt 24",
    description:
      "Ce médicament est indiqué en cas de mal de gorge peu intense et sans fièvre, d'aphtes et de petites plaies de la bouche.",
    category: "Teeth",
    img: "https://www.pharmaciepolygone.com/media/cache/original/89/cd/c310219b1489fe6b033dc2f46232.jpeg",
    price: 9.500,
  },
  {
    name: "COLLUXID Sol bain de bouche Fl 120ml",
    description:
      "TRAITEMENT D'APPOINT DES INFECTIONS DE LA CAVITE BUCCALE. RAFRAICHISSEMENT DE L'HALEINE HYGIENE DES DENTS.",
    category: "Teeth",
    img: "https://imagecdn.med.ovh/unsafe/0x0/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/pharmaceutical/78db1284a932b0e1c65b62b82453eb3b.jpg",
    price: 5.300,
  },
  {
    name: "PANSORAL Gel Buccal Tb 15gr -",
    description:
      "Traitement d'appoint de courte durée des douleurs liées aux états inflammatoires et ulcéreux de la muqueuse buccale",
    category: "Teeth",
    img: "https://www.mon-armoire-a-pharmacie.com/img/p/1/3/2/3/1323.jpg",
    price: 3.500,
  },
  {
    name: "AFTAGEL Gel Buccal Tb 15ml",
    description:
      "Traitement local des lésions inflammatoires limitées de la muqueuse buccale et des aphtes.",
    category: "Teeth",
    img: "https://www.pharma-shop.tn/2369-large_default/gum-afta-clear-gel-10-ml.jpg",
    price: 8000,
  },
  {
    name: "CANTALENE Comp. à Sucer Bt 24",
    description:
      "Ce médicament est indiqué en cas de mal de gorge peu intense et sans fièvre, d'aphtes et de petites plaies de la bouche chez l'adulte et l'enfant de plus de 6 ans. ",
    category: "Teeth",
    img: "https://www.pharma-medicaments.com/media/3322158__082428600_1441_22042013.jpg",
    price: 10.020,
  },
  {
    name: "ELUDRIL 0.1% Soluté Buccal Fl 90ml",
    description:
      "TRAITEMENT LOCAL D'APPOINT DES INFECTIONS DE LA CAVITE BUCCALE ET DE L'OROPHARYNX ET EN SOINS POSTOPERATOIRES EN STOMATOLOGIE",
    category: "Teeth",
    img: "https://paraetpharmacie.com/16622/eludril-ge-05ml-05g-100ml-flacon-90ml.jpg",
    price: 6.600,
  },
  {
    name: "THIOVALONE",
    description:
      "Traitement local d'appoint anti-inflammatoire et anti-bactérien des affections limitées à l'oropharynx. Traitement local symptomatique des suites d'amygdalectomies. NB: devant les signes cliniques généraux d'infection bactérienne,",
    category: "Teeth",
    img: "https://www.pharma-gdd.com/media/cache/resolve/product_show/pfizer-thiovalone-pulverisation-buccale-12-ml-face.jpg",
    price: 5000,
  },
  {
    name: "HEXASPRAY",
    description:
      "Traitement local symptomatique des affections aigues de l'oropharynx. En cas de manifestation générale de l'atteinte bactérienne, une antibiothérapie doit être envisagée.",
    category: "Teeth",
    img: "https://www.pharma-gdd.com/media/cache/resolve/product_show/hexaspray-maux-de-gorge-collutoire-30-g-face.jpg",
    price: 15.500,
  },
  {
    name: "DAKTARIN 2% Gel Buccal Tb 40gr",
    description:
      "Daktarin 2 %, gel buccal est indiqué dans le traitement des mycoses de la cavité buccale de l'adulte et de l'enfant âgé de 4 mois et plus : muguet, perlèche, glossites, gingivites, stomatites.",
    category: "Teeth",
    img: "https://cdn.shop-pharmacie.fr/images/daktarin-2-poudre-F10001617-p10.jpg",
    price: 4.200,
  },
  {
    name: "HEXIDENT Soluté Buccal Fl 125ml",
    description:
      "Traitement d'appoint des infections buccales et des soins postopératoires en stomatologie.",
    category: "Teeth",
    img: "http://pharmaderm.net/wp-content/uploads/2015/12/hexident.jpg",
    price: 9.313,
  },
  //Cardio
  {
    name: "TAVASTOR 40 mg Comp",
    description:
      "A/ Indications biologiques: ;- Réduction des hypercholestérolémies pures (type IIa) ou mixtes (type IIb et III) en complément d`un régime adapté et assidu.",
    category: "Cardio",
    img: "https://teriak.com/Fr/image_resize.php?img=upload%2F1583837064.png",
    price: 7.800,
  },
  {
    name: "ROSUVASCOR 20 mg comp",
    description:
      "Traitement des hypercholestérolémies;Adultes, adolescents et enfants âgés de 10 ans ou plus avec hypercholestérolémies pures (type IIa incluant les hypercholestérolémies familiales hétérozygotes)",
    category: "Cardio",
    img: "https://imagecdn.med.ovh/unsafe/0x0/filters:format():quality(100):blur(0)/https://www.med.tn/uploads/pharmaceutical/4054b77dd55b6ea45b174182095d2b16.jpg",
    price: 4.000,
  },
  {
    name: "TORVA 80 mg Comp",
    description:
      "Réduction des hypercholestérolémies pures (type IIa) ou mixtes (type IIb et III) en complément d un régime adapté et assidu.",
    category: "Cardio",
    img: "https://www.saiph-labo.com/upload/produit/5bd9d0a1d1f13.png",
    price: 5.535,
  },
  {
    name: "VALUE PLUS",
    description:
      "Traitement de l hypertension artérielle essentielle. Value PLUS est indiqué pour les patients dont la tension artérielle n est pas suffisamment contrôlée par une monothérapie.",
    category: "Cardio",
    img: "https://www.saiph-labo.com/upload/produit/613f320d3eaeb.png",
    price: 7.300,
  },
  {
    name: "ARADEUX PLUS",
    description:
      "Traitement de lhypertension artérielle essentielle. ARADEUX PLUS est indiqué chez les patients dont la pression artérielle nest pas suffisamment contrôlée par l`irbésartan ou l`amlodipine en monothérapie.",
    category: "Cardio",
    img: "https://www.saiph-labo.com/upload/produit/5be9a9400aa56.png",
    price: 20.000,
  },
  {
    name: "LIPTA 10",
    description:
      "Ce médicament est indiqué dans la prévention des évènements cardiovasculaires chez des patients hypertendus ayant 3 facteurs de risque cardiovasculaire associés",
    category: "Cardio",
    img: "http://teriak.com/Fr/image_resize.php?img=upload%2F1583752656.png",
    price: 7.000,
  },
  {
    name: "TRITAZIDE",
    description:
      "Hypertension artérielle essentielle chez les patients ne réagissant pas suffisamment à la monothérapie. Tritazide nest pas indiqué pour le traitement de lhypertension résultant dun hyperaldostéronisme primaire.",
    category: "Cardio",
    img: "https://asafar.net/wp-content/uploads/6387_500_10.jpg",
    price: 6.935,
  },
  {
    name: "COSIMPREL",
    description:
      "COSIMPREL est indiqué en substitution dans le traitement de lhypertension artérielle et/ou de la maladie coronaire stable (chez les patients ayant un antécédent dinfarctus du myocarde et/ou de revascularisation), chez les patients adultes déjà contrôlés par périndopril et bisoprolol pris simultanément aux mêmes posologies.",
    category: "Cardio",
    img: "https://rehberilac.com/wp-content/uploads/2020/04/COSIMPREL-5-MG-5-MG-30-FILM-KAPLI-TABLET-1.png",
    price: 4.000,
  },
  {
    name: "CINCOR",
    description:
      "Traitement de linsuffisance cardiaque chronique stable, modérée à sévère, avec réduction de la fonction ventriculaire systolique (fraction déjection <= 35%, fondée sur léchocardiographie) en complément des inhibiteurs de lenzyme de conversion (IEC) et des diurétiques, et éventuellement, des digitaliques.",
    category: "Cardio",
    img: "https://www.saiph-labo.com/upload/produit/5bb7948872834.png",
    price: 9.331,
  },
  //Nose

  {
    name: "DETURGYLONE",
    description:
      "Traitement symptomatique local de courte durée des états congestifs et inflammatoires au cours des rhinites aigues de l'adulte (à partir de 15 ans).",
    category: "Nose",
    img: "https://pharmaquick.net/wp-content/uploads/2020/11/DETURGYLONE.jpg",
    price: 4.500,
  },
  {
    name: "IBUPHIL COLD",
    description:
      "Indiqué chez l'adolescent (15-17 ans) et l'adulte, dans le traitement symptomatique de la congestion nasale, associée à une rhinosinusite aiguë, présumée virale avec céphalée et/ou fièvre.",
    category: "Nose",
    img: "https://www.pharma-gdd.com/media/cache/resolve/product_show/ibupradoll-400-mg-douleurs-fievre-et-migraine-adulte-10-capsules-molles-face.jpg",
    price: 3.500,
  },
  {
    name: "ACTISOUFRE Sol",
    description:
      "Utilisé dans les états inflammatoires chroniques des voies respiratoires supérieures telles que rhinites et rhinopharyngites chroniques.",
    category: "Nose",
    img: "https://vidalbox.vidal.fr/files/uploads/industrie/imgsmed/image_2654.jpg",
    price: 20.320,
  },
  {
    name: "NASONEX",
    description:
      "Rhinite allergique, saisonnière ou perannuelle, de l'adulte et de l'enfant de plus de 3 ans. Traitement symptomatique de la polypose nasosinusienne de l'adulte .",
    category: "Nose",
    img: "https://www.druid-project.eu/wp-content/uploads/2017/11/nasonex.png",
    price: 19.431,
  },
  {
    name: "NASACORT",
    description:
      "Traitement symptomatique des rhinites allergiques saisonnières et perannuelles.",
    category: "Nose",
    img: "https://images.heb.com/is/image/HEBGrocery/001718345",
    price: 19.499,
  },
  {
    name: "ACTIFED RHUME",
    description:
      "Traitement de linsuffisance cardiaque chronique stable, modérée à sévère, avec réduction de la fonction ventriculaire systolique (fraction déjection <= 35%, fondée sur léchocardiographie) en complément des inhibiteurs de lenzyme de conversion (IEC) et des diurétiques, et éventuellement, des digitaliques.",
    category: "Nose",
    img: "https://images.heb.com/is/image/HEBGrocery/001718345",
    price: 3.333,
  },
  {
    name: "RHINOFLUIMUCIL",
    description:
      "Utilisé dans le traitement local symptomatique de courte durée des affections rhinopharyngées avec sécrétion excessive de la muqueuse de l'adulte et des adolescents de plus de 15 ans.",
    category: "Nose",
    img: "https://cdn.pharmaciedesdrakkars.com/media/images/products/w-532-h-532-zc-2-rhinofluimucil-solution-nasale-1-1580815056.PNG",
    price: 6.370,
  },
  {
    name: "PHYSIOL",
    description:
      " INSTILLATIONS, LAVAGES ET BAINS OCULAIRES - CHIRURGIE OCULAIRE - LAVAGES AURICULAIRES - USAGES CHIRURGICAUX EN ORL - RINCAGES DES LENTILLES DE CONTACT. - INSTILLATIONS NASALES NOTAMMENT CHEZ LE NOURRISSON.",
    category: "Nose",
    img: "https://sahajamal.com/wp-content/uploads/2021/02/1008866_1.jpg",
    price: 2.695,
  },
  {
    name: "SOUFRANE",
    description:
      "Traitement local d'appoint des infections de la muqueuse rhinopharyngée.",
    category: "Nose",
    img: "http://www.synthemedic.com/upload/produit/15072700264955b56cb997970.jpg",
    price: 2.430 ,
  },
  {
    name: "SOLACY Adulte Gél",
    description:
      "Traitement symptomatique d'appoint des affections rhinopharyngées de l'adulte.",
    category: "Nose",
    img: "https://vidalbox.vidal.fr/files/uploads/industrie/imgsmed/image_2656.jpg",
    price:19.612,
  },
  //Eyes
    {
    name: "DACUROSE Collyre",
    description:
      "LAVAGE OCULAIRE EN CAS D'IRRITATION CONJONCTIVALE.",
    category: "Eyes",
    img: "http://www.unimed.com.tn/wp-content/uploads/2014/07/DACUROSE_4dcd1780d329c-copy.jpg",
    price:5.225,
  },
    {
    name: "FRAKIDEX ",
    description:
      "Traitement local anti-inflammatoire et antibactérien de l'oeil et des ses annexes: -dans les suites de la chirurgie ophtalmologique, -des infections dues à des germes sensibles à la framycétine avec composante inflammatoire",
    category: "Nose",
    img: "https://pharmaquick.net/wp-content/uploads/produit/FRAKIDEX.jpg",
    price:3.004 ,
  },
    {
    name: "CEBEMYXINE Pde Opht",
    description:
      "Traitement antibactériens local des conjonctivites sévères, des kératites et des ulcères cornéens dus à des germes sensibles à la néomycine et à la polymyxine ",
    category: "Eyes",
    img: "https://lagaay.com/uploads/19/9d/d2/b7/lightbox-cebemyxine.jpg",
    price:19.612,
  },
    {
    name: "LEVOPHTA",
    description:
      "CONJONCTIVITES ALLERGIQUES.",
    category: "Eyes",
    img: "https://adekad.com/wp-content/uploads/2021/01/levophta-005.jpg",
    price:10.931 ,
  },
    {
    name: "UNICROM",
    description:
      "Traitement symptomatique des affections ophtalmiques d'origine allergique;",
    category: "Nose",
    img: "http://www.unimed.com.tn/wp-content/uploads/2014/10/UNICROM_Ophtados_4dcd4b7eaf700.jpg",
    price:5.690,
  },
    {
    name: "PILOLOL Collyre",
    description:
      "HYPERTENSION INTRA-OCULAIRE PRIMITIVE OU SECONDAIRE - GLAUCOME CHRONIQUE A ANGLE OUVERT - GLAUCOME DE L'APHAQUE - GLAUCOME SECONDAIRE",
    category: "Nose",
    img: "https://pharmaciedelabaulche.mesoigner.fr/uploads/produits/58a1c23a3d6a1-isopto-pilocarpine-1-pour-cent-collyre.png",
    price:7.430,
  },
    {
    name: "DUOVISC",
    description:
      "PROVISC, DISPOSITIF VISCOCHIRURGICAL OPHTALMIQUE, EST INDIQUE COMME ADJUVANT DE LA CHIRURGIE OPHTALMIQUE DU SEGMENT ANTERIEUR LORS DE L'EXTRACTION DE LA CATARACTE ET L'IMPLANTATION D'UNE LENTILLE INTRAOCULAIRE",
    category: "Eyes",
    img: "https://assets.apoly.de/medikamente-de-pzns/1000/01473628.png",
    price:112.815,
  },
    {
    name: "COLLYRE BLEU LAITER Collyre",
    description:
      "Irritations conjonctivales non infectieuses.",
    category: "Eyes",
    img: "https://paraetpharmacie.com/7261-thickbox_default/bleu-laiter-collyre-10ml.jpg",
    price:4.055,
  },
    {
    name: "MAXIDEX ",
    description:
      "MALADIES INFLAMMATOIRES ET ALLERGIQUES DU SEGMENT ANTERIEUR DE L'OEIL ET DE SES ANNEXES : - IRITIS - SCLERITES ET EPISCLERITES - KERATITES PARENCHYMATEUSES ET TROUBLES TROPHIQUES DE LA CORNEE",
    category: "Eyes",
    img: "https://dawaiatdoor.com/Pictures/1582195337741.zs90a.jpeg",
    price:2.033,
  },
    {
    name: "RIFAMYCINE",
    description:
      "Traitement antibactériens local des conjonctivites sévères, des kératites et des ulcères cornéens dus à des germes sensibles à la rifamycine",
    category: "Eyes" ,   
    img: "https://www.theapharma.fr/wp-content/uploads/2021/09/RIFAMYCINE-CHIBRET-COLLYRE.png",
    price:2.612,
  },
  //Head
    {
    name: "DOLIPRANE VIT.C 500mg",
    description:
      "Il est indiqué en cas de douleur et/ou fièvre telles que maux de tête, états grippaux, douleurs dentaires, courbatures, règles douloureuses. Cette présentation est réservée à l'adulte et à l'enfant de plus de 27 kg.",
    category: "Head" ,   
    img: "https://www.pharma-gdd.com/media/cache/resolve/product_show/sanofi-doliprane-vitamine-c-16comprimes-face.jpg",
    price:4.160,
  },
    {
    name: "PARACETAMOL",
    description:
      "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
    category: "Head" ,   
    img: "https://cdn.shop-pharmacie.fr/images/paracetamol-rpg-1-g-comprime-s-F10000957-p10.jpg",
    price:1.710,
  },
    {
    name: "ASPEGIC 100mg ",
    description:
      "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles. - Traitement symptomatique des poussées douloureuses de l'arthrose. Un avis médical sera associé.",
    category: "Head" ,   
    img: "https://www.pharma-gdd.com/media/cache/resolve/product_show/aspegic-nourrissons-100-mg-douleurs-et-fievre-20-sachets-face.jpg",
    price:1.930,
  },
    {
    name: "EFFERALGAN 1gr",
    description:
      "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles. - Traitement symptomatique des poussées douloureuses de l'arthrose. Un avis médical sera associé.",
    category: "Head" ,   
    img: "https://www.pharmacie-en-ligne.com/29499-large_default/efferalgan-vitamine-c-16-comprimes-effervescents.jpg",
    price:2.965,
  },
    {
    name: "NOVADOL 500mg",
    description:
      "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
    category: "Head" ,   
    img: "https://www.med.tn/image-medicament-7c29ba5b6fa9cbf1ce26cea82ba256eb.jpg",
    price:1.460,
  },
    {
    name: "GRIPEX Sans Sucre Ad",
    description:
      "Traitement antibactériens local des conjonctivites sévères, des kératites et des ulcères cornéens dus à des germes sensibles à la rifamycine",
    category: "Head" ,   
    img: "https://galpharma.tn/wp-content/uploads/2019/09/Gripex-Adulte-12.jpg",
    price:2.612,
  },
    {
    name: "ALGESIC 1000mg ",
    description:
      "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles. - Traitement symptomatique des douleurs de l'arthrose.",
    category: "Head" ,   
    img: "https://www.med.tn/image-medicament-df88350f448795638505ae18997d1879.jpg",
    price:2.035,
  },
    {
    name: "ACTIFED",
    description:
      "Traitement symptomatique de l'hypersécrétion nasale au cours des affections rhinopharyngées aiguës avec maux de tête et/ou fièvre.",
    category: "Head" ,   
    img: "https://www.mon-pharmacien-conseil.com/14404-large_default/actifed-jour-et-nuit-boite-12-cprs-jour-blanc-et-4-cprs-nuit-bleu.jpg",
    price:3.435,
  },
    {
    name: "PANADOL EXTRA",
    description:
      "Traitement symptomatique des douleurs d'intensité légère à modérée et/ou des états fébriles.",
    category: "Head" ,   
    img: "https://teriak.com/Fr/image_resize.php?img=upload%2F1583835674.png",
    price:3.270,
  },
    {
    name: "ADOL",
    description:
      "TRAITEMENT SYMPTOMATIQUE DES AFFECTIONS DOULOUREUSES ET/OU FEBRILES.",
    category: "Head" ,   
    img: "https://www.saiph-labo.com/upload/produit/5be9a183bdc6b.png",
    price:1.625,
  },

];

const insertMedecines = function () {
  medecine
    .create(samplePosts)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertMedecines();
