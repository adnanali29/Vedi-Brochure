export interface Product {
  id: string;
  categoryId: '01-ayurvedic' | '02-supplements' | '03-hempfood' | '04-personalcare' | '05-wellness';
  subCategory?: string;
  title: string;
  botanicalName?: string;
  tagline?: string;
  badges: string[];
  isRx?: boolean;
  rxWarning?: string;
  indications: string[];
  variant: string;
  keyIngredients: string;
  images: string[];
}

export const CATEGORIES = [
  { id: 'all', name: 'ALL PRODUCTS' },
  { id: '01-ayurvedic', name: '01. AYURVEDIC MEDICINES', subtitle: 'Cannabis Leaf & Classical' },
  { id: '02-supplements', name: '02. DIETARY SUPPLEMENTS', subtitle: 'Botanical Single & Multi-Herbs' },
  { id: '03-hempfood', name: '03. HEMP FOOD & NUTRITION', subtitle: 'Hempcool & Coldpressed Oil' },
  { id: '04-personalcare', name: '04. PERSONAL CARE', subtitle: 'Castile Soaps, Gels & Hair Care' },
  { id: '05-wellness', name: '05. PROFESSIONAL GUIDANCE', subtitle: 'Clinic & Panchakarma' },
];

export const PRODUCTS: Product[] = [
  // --- 01. AYURVEDIC MEDICINES: PHYSICIAN SUPERVISED CANNABIS LEAF ---
  {
    id: 'cannaflam',
    categoryId: '01-ayurvedic',
    subCategory: 'Physician-Supervised Cannabis Leaf (Cannabis sativa) Medicines',
    title: 'Cannaflam / Cannaflam+ / Cannaflam Oil',
    botanicalName: 'Cannabis sativa',
    tagline: 'Inflammation, Joint & Digestive Comfort Support',
    badges: ['PRANAVAHA & GRAHANI', 'Anti-Inflammatory & Pain Support'],
    isRx: true,
    rxWarning: 'Requires physician supervision. For use only under the supervision of a qualified healthcare professional. Not for self-medication.',
    indications: [
      'Helps reduce inflammation and associated swelling.',
      'Helps alleviate discomfort associated with knee pain, muscle cramps, and back discomfort.',
      'Supports gastrointestinal health, which may contribute to overall immune function.',
      'Shows potential supportive benefits in conditions such as IBS, psoriasis, and PTSD.',
      'Supports mental well-being.',
      'Research indicates that cannabis may exhibit anti-proliferative properties.',
      'May provide supportive benefits for osteoporosis, PTSD, insomnia, and psoriasis.'
    ],
    variant: '125mg & 250mg Capsules, 13ml & 30ml Oil',
    keyIngredients: 'Bhaang (Cannabis sativa), Coconut Oil, Natural Flavorings',
    images: ['/assets/Cannaflam.webp', '/assets/Cannaflam +.webp']
  },
  {
    id: 'cannapain',
    categoryId: '01-ayurvedic',
    subCategory: 'Physician-Supervised Cannabis Leaf (Cannabis sativa) Medicines',
    title: 'Cannapain / Cannapain+ / Cannapain Oil',
    botanicalName: 'Cannabis sativa',
    tagline: 'Persistent Pain Relief & Neuroprotection Support',
    badges: ['PAIN & NEURO CARE', 'Sleep & Appetite Support'],
    isRx: true,
    rxWarning: 'Requires physician supervision. For use only under the supervision of a qualified healthcare professional. Not for self-medication.',
    indications: [
      'Helps ease persistent pain and inflammation.',
      'Supports better sleep and appetite.',
      'Provides valuable support for mental well-being.',
      'May be beneficial in managing conditions such as ADHD, arthritis, and eczema.',
      'Supports neuronal health through its potential anticonvulsant and neuroprotective properties.',
      'Scientific research indicates that certain cannabis compounds may exhibit anti-proliferative properties.'
    ],
    variant: '125mg & 250mg Capsules, 13ml & 30ml Oil',
    keyIngredients: 'Bhaang (Cannabis sativa), Coconut Oil, Natural Flavorings',
    images: ['/assets/Cannapain.webp', '/assets/Cannapain +.webp', '/assets/Cannapain oil.webp']
  },
  {
    id: 'cannaron',
    categoryId: '01-ayurvedic',
    subCategory: 'Physician-Supervised Cannabis Leaf (Cannabis sativa) Medicines',
    title: 'Cannaron / Cannaron+ / Cannaron Oil',
    botanicalName: 'Cannabis sativa',
    tagline: 'Neuropathic Comfort & Nerve Function Support',
    badges: ['NEUROLOGICAL HEALTH', 'Neuropathic & Chemotherapy Support'],
    isRx: true,
    rxWarning: 'Requires physician supervision. For use only under the supervision of a qualified healthcare professional. Not for self-medication.',
    indications: [
      'Supports neuronal health by helping protect against the accumulation of harmful protein aggregates in the brain.',
      'Helps alleviate acute neuropathic discomfort.',
      'May help ease chemotherapy-induced side effects such as nausea and vomiting.',
      'May provide supportive care for conditions such as fibromyalgia, migraine, psoriasis, and osteoporosis.',
      'Supports overall nerve health and function.',
      'Scientific research indicates that certain cannabis compounds may exhibit anti-proliferative properties.'
    ],
    variant: '125mg & 250mg Capsules, 13ml & 30ml Oil',
    keyIngredients: 'Bhaang (Cannabis sativa), Coconut Oil, Natural Flavorings',
    images: ['/assets/Cannaron.webp', '/assets/Cannaron +.webp', '/assets/Cannaron oil.webp']
  },

  // --- 01. AYURVEDIC MEDICINES: CLASSICAL AYURVEDA ---
  {
    id: 'bilvadi-churna',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'Bilvadi Churna',
    tagline: 'Bowel Health & Digestive Support',
    badges: ['GRAHANI CARE', 'Digestive Health'],
    indications: [
      'Helps reduce the frequency of loose stools and supports healthy bowel function.',
      'Supports individuals experiencing IBS, abdominal discomfort, gas, and bloating.',
      'Helps support digestive health during Shigella-related dysentery.',
      'Helps reduce excessive mucus in stools.'
    ],
    variant: '15 Sachets in a Box; 3g each',
    keyIngredients: 'Bael Fruit, Sunthi, Bhaang, Dhataki',
    images: ['/assets/Bilvadi.webp']
  },
  {
    id: 'jatiphaladi-churna',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'JATIPHALADI CHURNA',
    tagline: 'Cough, Sprue & Respiratory Equilibrium',
    badges: ['PRANAVAHA & GRAHANI', 'Respiratory & Colon Support'],
    indications: [
      'Helps relieve symptoms of cough, cold, and nasal congestion.',
      'Supports digestive health and helps manage chronic diarrhoea and sprue syndrome.',
      'Supports respiratory health and helps ease breathing difficulties associated with asthma.'
    ],
    variant: '15 Sachets in a Box (3g each)',
    keyIngredients: 'Jatiphala, Lavang, Elaichi, Twak, Nagkesar, Bhaang',
    images: ['/assets/JATIPHALADI CHRNA.webp']
  },
  {
    id: 'haridrakhand',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'Haridrakhand',
    tagline: 'High-Curcumin Skin & Respiratory Support',
    badges: ['TWAK & RHINITIS CARE', 'Skin & Allergy Support'],
    indications: [
      'Made with high-curcumin turmeric, processed through traditional Ayurvedic methods in small batches.',
      'Supports healthy skin and helps relieve itching and irritation.',
      'Helps manage skin concerns such as allergic hives, dermatitis, and melasma.',
      'Supports relief from allergic rhinitis.',
      'Promotes healthy, radiant, and revitalized skin.'
    ],
    variant: '150g Can',
    keyIngredients: 'Haridra, Sunthi, Marica, Pippali, Twak, Elaichi etc.',
    images: ['/assets/Buy-Haridrakhand-Effective-Treatment-for-Itching-Hives-and-Fungal-Infections.webp']
  },
  {
    id: 'kameswar-modaka',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'Kameswar Modaka',
    tagline: 'Vitality, Endurance & Reproductive Support',
    badges: ['VRSYA & BALYA', 'Energy & Intimacy Support'],
    indications: [
      'Supports energy, endurance, and overall vitality.',
      'Traditionally used to support sexual wellness and intimacy.',
      'Helps support healthy sexual function and performance.',
      'Supports overall immunity and reproductive wellness.'
    ],
    variant: '150g Can / 15 Sachets in a Box (5g each)',
    keyIngredients: 'Ashwagandha, Shatavari, Gokshura, Safed Musli etc.',
    images: ['/assets/KAMESHWAR MODAKA CAN.webp', '/assets/Buy-Kameshwar-Modaka-Ayurvedic-Immune-Booster-Aphrodisiac.webp']
  },
  {
    id: 'sarpagandha-ghanvati',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'Sarpagandha Ghanvati',
    tagline: 'Sleep, Blood Pressure & Emotional Balance',
    badges: ['NIDRA & RAKTAPITTA', 'Restful Sleep & BP Support'],
    indications: [
      'Helps support restful sleep and manage symptoms of insomnia.',
      'Supports healthy blood pressure levels.',
      'Supports emotional and psychological well-being.',
      'Traditionally used to support the body’s natural detoxification processes.'
    ],
    variant: '15 Tablets In A Strip, 500mg Each',
    keyIngredients: 'Sarpagandha, Jatamansi, Khurasani, Bhaang etc.',
    images: ['/assets/Sarpagandha .webp']
  },
  {
    id: 'vijayadi-vati',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'Vijayadi Vati',
    tagline: 'Vata Balance & Menstrual Discomfort Relief',
    badges: ['VATA SHAMAKA', 'Circulation & Inflammatory Support'],
    indications: [
      'Supports healthy blood circulation and helps maintain Vata Dosha balance.',
      'Helps relieve discomfort associated with lower back pain, headaches, breast tenderness, reduced appetite, nausea, and vomiting.',
      'Supports the body’s natural inflammatory response.',
      'Helps address emotional and psychological factors associated with menstrual discomfort.'
    ],
    variant: '15 Tablets In A Strip, 500mg Each',
    keyIngredients: 'Bhaang, Ghrita Kumari, Apamarga, Kamala kakadi etc.',
    images: ['/assets/Buy-Vijayadi-Vati-Cannabis-Based-Relief-for-Menstrual-Pain.webp']
  },
  {
    id: 'vijaya-churna',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'Vijaya Churna',
    tagline: 'Pain Relief, Digestion & Mood Elevation',
    badges: ['SHOOLAHARA', 'Pain & Emotional Well-Being'],
    indications: [
      'Helps relieve mild to acute pain associated with fibromyalgia, sciatica, arthritis, and related discomforts.',
      'Supports the body’s natural inflammatory response.',
      'Supports digestion and healthy bowel movement.',
      'Helps support appetite and digestive wellness.',
      'Supports mood and emotional well-being.',
      'Promotes relaxation and supports restful sleep.',
      'Traditionally valued for its calming and balancing effects on the nervous system.'
    ],
    variant: '15 Sachets in a Box; 3g each',
    keyIngredients: 'Bhaang (Cannabis sativa) Powder',
    images: ['/assets/Vijaya-Churna-by-Vedi-Herbals-Natural-Cannabis-Leaf-Powder.jpg']
  },
  {
    id: 'vijaya-ghrita',
    categoryId: '01-ayurvedic',
    subCategory: 'CLASSICAL AYURVEDA',
    title: 'Vijaya Ghrita',
    tagline: 'Rasayana Rejuvenation & Cognitive Support',
    badges: ['RASAYANA & MEDHYA', 'Rejuvenation & Ghee Infusion'],
    indications: [
      'Supports the body’s natural defenses and overall wellness.',
      'Promotes healthy ageing and rejuvenation.',
      'Helps manage stress and supports emotional well-being.',
      'Supports cognitive function and memory.',
      'Aids healthy digestion, nutrient absorption, and waste elimination.',
      'Promotes healthy skin, hair, and nails.'
    ],
    variant: '186ml in a Jar',
    keyIngredients: 'Bhaang powder, Desi Cow ghee, A2 milk',
    images: ['/assets/Vijaya-Ghrita-by-Vedi-Herbals.webp']
  },

  // --- 02. DIETARY SUPPLEMENTS ---
  {
    id: 'anona',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Anona (Annona muricata / Graviola)',
    botanicalName: 'Annona muricata',
    tagline: 'Immune & Digestive Wellness',
    badges: ['VITAMIN C & GRAVIOLA', 'Immunity & Cellular Health'],
    indications: [
      'Rich in Vitamin C to support immune health.',
      'Supports healthy digestion and helps reduce bloating.',
      'Supports healthy cholesterol levels and cardiovascular wellness.',
      'May help support the body during chemotherapy-related side effects.',
      'Contains naturally occurring acetogenins, which are being studied for their potential anti-proliferative properties.'
    ],
    variant: '15 sachets in a Box; 5g each',
    keyIngredients: 'Graviola fruit powder',
    images: ['/assets/Buy-Anona-Graviola-Antioxidant-Supplement-for-Immunity.webp']
  },
  {
    id: 'arjuna',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Arjuna (Terminalia arjuna)',
    botanicalName: 'Terminalia arjuna',
    tagline: 'Cardiovascular & Blood Pressure Support',
    badges: ['20% POLYPHENOLS', 'Heart & BP Support'],
    indications: [
      'Standardized to 20% polyphenols.',
      'Supports healthy heart rhythm and cholesterol levels.',
      'Promotes healthy blood circulation and cardiovascular wellness.',
      'Supports healthy blood pressure levels.',
      'Helps reduce urinary frequency and supports urinary health.'
    ],
    variant: '15 Tablets In A Strip, 500mg Each',
    keyIngredients: 'Arjuna Bark Extract',
    images: ['/assets/Buy-Arjuna-Cardiovascular-Support-Tablet-Antioxidant.webp']
  },
  {
    id: 'ashwagandha',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Ashwagandha (Withania somnifera) Tablets & Churna',
    botanicalName: 'Withania somnifera',
    tagline: 'Adaptogen for Stress, Vitality & Stamina',
    badges: ['3% WITHANOLIDES', 'Tablet & Powder Variants'],
    indications: [
      'Standardized to 3% withanolides for consistent quality.',
      'Supports the body’s natural response to stress and promotes relaxation.',
      'Enhances vitality, stamina, and overall well-being.',
      'Supports physical and mental performance.',
      'Helps support a healthy inflammatory response.',
      'Supports balanced neuroendocrine function.'
    ],
    variant: '15 Tablets In A Strip (500mg) / 150g Powder Can',
    keyIngredients: 'Ashwagandha Roots Extract / Pure Root Powder',
    images: [
      '/assets/Buy-Ashwagandha-Tablet-for-Vital.webp',
      '/assets/Organic_Ashwagandha_Powder_by_Vedi_Herbals_-_Ayurvedic_Super_Herb.webp'
    ]
  },
  {
    id: 'ayurcalm',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Ayurcalm Cough Syrup',
    tagline: 'Quick Relief From Dry & Wet Cough',
    badges: ['NON-DROWSY', 'Respiratory & Throat Soothing'],
    indications: [
      'Made with natural herbal ingredients to soothe cough and support respiratory health.',
      'Free from added chemicals, codeine, alcohol, and camphor.',
      'Non-addictive and non-drowsy formula.',
      'Gentle formula suitable for children.',
      'Helps soothe throat irritation and support relief from cough.'
    ],
    variant: '100ml in a Bottle',
    keyIngredients: 'Marica, Bhringaraj, Tejpatta, Sunthi etc.',
    images: ['/assets/Buy-Ayurcalm-Ayurvedic-Cough-Syrup-Relief-For-Throat.webp']
  },
  {
    id: 'bonewiz',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Bonewiz | Hadjod (Cissus quadrangularis)',
    botanicalName: 'Cissus quadrangularis',
    tagline: 'Bone Density & Joint Strength Support',
    badges: ['5% KETOSTEROIDS', 'Bone & Joint Mobility'],
    indications: [
      'Standardized to 5% ketosterones for consistent quality.',
      'Supports bone and joint health, including arthritis-related discomfort.',
      'Helps strengthen bones and support joint mobility.',
      'Helps ease joint pain, stiffness, and swelling.',
      'Rich in antioxidant properties to help protect against oxidative stress.'
    ],
    variant: '60 Capsules in a Bottle; 500mg Each',
    keyIngredients: 'Hadjod Stem Extract, Marica, Bhringaraj, Tejpatta, Sunthi',
    images: ['/assets/Buy-Bonewiz-Hadjod-Capsules-Natural-Bone-Protector-Healer.webp']
  },
  {
    id: 'brahmi',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Brahmi (Bacopa monnieri) Tablets',
    botanicalName: 'Bacopa monnieri',
    tagline: 'Cognitive Function & Memory Nootropic',
    badges: ['10% BACOSIDES', 'Memory & Focus Nootropic'],
    indications: [
      'Standardized to 10% bacosides for consistent quality.',
      'Supports memory, focus, concentration, and cognitive function.',
      'Promotes overall brain and neurological health.',
      'Supports mental well-being and cognitive performance.',
      'Traditionally used to support speech and developmental functions in children.'
    ],
    variant: '15 Tablets In A Strip, 500mg Each',
    keyIngredients: 'Brahmi Whole Plant Extract',
    images: ['/assets/Buy-Brahmi-Tablet-Memory-and-Mental-Function-Booster.webp']
  },
  {
    id: 'femacin',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: "Femacin | Ayurvedic Women's Health Tonic",
    tagline: 'Hormonal Balance & Menopausal Wellness',
    badges: ['PHYTOESTROGENS', "Women's Health & Fertility"],
    indications: [
      'Supports healthy hormonal balance and helps ease PMS symptoms such as mood changes, cramps, and irritability.',
      'Supports menopausal wellness with naturally occurring phytoestrogens from Ashoka bark.',
      'Supports female fertility and healthy ovulation.',
      'Helps support energy, vitality, and stress management.',
      'Supports libido and overall reproductive wellness.'
    ],
    variant: '210ml in a Bottle',
    keyIngredients: 'Shatavari, Ashwagandha, Asoka, Nagkeshar etc.',
    images: ['/assets/Buy-Femacin-Ayurvedic-Womens-Health-Tonic-for-Hormonal-Balance.webp']
  },
  {
    id: 'gokshura',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Gokshura (Tribulus terrestris) Tablets',
    botanicalName: 'Tribulus terrestris',
    tagline: 'Vitality, Testosterone & Urinary Flow Support',
    badges: ['25% SAPONINS', 'Vitality & Urinary Health'],
    indications: [
      'Contains 25% saponins for consistent potency.',
      'Supports healthy testosterone levels and reproductive wellness.',
      'Supports sexual health, desire, and vitality in men and women.',
      'Supports healthy ovulation and sperm production.',
      'Promotes healthy urinary flow and supports bladder comfort.',
      'Supports fluid balance and healthy urinary function.'
    ],
    variant: '60 Tablets In A Bottle, 500mg Each',
    keyIngredients: 'Gokshura fruit extract',
    images: ['/assets/Buy-Gokshura-Tablet-Herbal-Supplement-Workout-Recovery.webp']
  },
  {
    id: 'gudmar',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Gudmar (Gymnema sylvestre) Tablet',
    botanicalName: 'Gymnema sylvestre',
    tagline: 'Sugar Cravings & Blood Glucose Support',
    badges: ['40% GYMNEMIC ACIDS', 'Sugar Balance & Metabolism'],
    indications: [
      'Standardized to 40% gymnemic acids for consistent quality.',
      'Supports healthy blood glucose and urine sugar levels.',
      'Supports healthy pancreatic function and glucose metabolism.',
      'Helps manage sugar cravings by temporarily reducing sweet taste perception.',
      'Supports healthy metabolism and triglyceride levels.'
    ],
    variant: '15 Tablets In A Strip, 500mg Each',
    keyIngredients: 'Gudmar leaf extract',
    images: ['/assets/Shop-Gudmar-Leaf-Extract-Tablet-Insulin-Production.webp']
  },
  {
    id: 'guduchi',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Guduchi (Giloy / Tinospora cordifolia)',
    botanicalName: 'Tinospora cordifolia',
    tagline: 'Immune Defense & Organ Wellness',
    badges: ['4% BITTER COMPOUNDS', 'Immunity & Liver Care'],
    indications: [
      'Standardized to 4% bitter compounds for consistent quality.',
      'Supports immune function and healthy antibody response.',
      'Supports the body’s natural defenses against infections.',
      'Supports healthy liver, kidney, and cardiovascular function.',
      'Traditionally used to support liver and spleen health.',
      'Supports urinary tract health.'
    ],
    variant: '10 Capsules in a Strip; 500mg Each',
    keyIngredients: 'Guduchi stem extract',
    images: ['/assets/Shop-_Guduchi-Giloy-Capsule-Health-Supplement-White-Blood-Cells.webp']
  },
  {
    id: 'guggul',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Guggul (Commiphora wightii) Extract',
    botanicalName: 'Commiphora wightii',
    tagline: 'Cholesterol & Joint Mobility Management',
    badges: ['3% GUGGULSTERONES', 'Lipid Balance & Joint Care'],
    indications: [
      'Standardized to 3% guggulsterones for consistent quality.',
      'Supports healthy cholesterol levels and cardiovascular wellness.',
      'Helps maintain a healthy inflammatory response.',
      'Supports joint comfort and mobility.',
      'Supports healthy weight management.',
      'Traditionally used to support detoxification and rejuvenation.'
    ],
    variant: '15 Tablets In A Strip, 500mg Each',
    keyIngredients: 'Guggul gum extract',
    images: ['/assets/guggul.webp']
  },
  {
    id: 'kapikachu',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Kapikachu (Mucuna pruriens) Capsule',
    botanicalName: 'Mucuna pruriens',
    tagline: 'Dopamine & Reproductive Hormone Support',
    badges: ['10% L-DOPA', 'Neurological & Vitality'],
    indications: [
      'Standardized to 10% L-DOPA for consistent quality.',
      'Supports healthy dopamine levels and neurological function.',
      'Helps promote energy, stamina, and vitality.',
      'Supports male and female reproductive wellness.',
      'Supports healthy reproductive hormone balance and ovulatory function.'
    ],
    variant: '60 Capsules In a Bottle',
    keyIngredients: 'Kapikachu seeds extract',
    images: ['/assets/Buy-Kapikachu-Capsule-Energy-Booster-and-Cognitive_Enhancer.webp']
  },
  {
    id: 'neem',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Neem (Azadirachta indica) Capsules',
    botanicalName: 'Azadirachta indica',
    tagline: 'Blood Purifier & Skin Health Support',
    badges: ['3% BITTER COMPOUNDS', 'Blood Purifier & Skin Care'],
    indications: [
      'Standardized to 3% bitter compounds for consistent quality.',
      'Provides antioxidant support against free-radical damage.',
      'Supports skin health and helps manage concerns such as eczema, scabies, ringworm, and dermatitis.',
      'Supports the body’s natural defenses against microbial infections.',
      'Supports liver health and natural detoxification.',
      'Traditionally valued for its blood-purifying properties.'
    ],
    variant: '60 Capsules in a Bottle; 500mg Each',
    keyIngredients: 'Neem Leaf Extract',
    images: ['/assets/uy-Neem-Capsule-Natural-Blood-Purifier-Immune-Booster-Antioxidant-Properties.webp']
  },
  {
    id: 'nvd3',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'NVD3 | 5000IU Natural Vitamin D3 (Daily)',
    tagline: 'Plant-Sourced Lichen/Stone Flower Vitamin D3',
    badges: ['5000 IU DAILY', 'Daily Bone & Immune Care'],
    indications: [
      'Made with naturally sourced Stone Flower (Parmelia perlata).',
      '100% vegetarian capsule, free from preservatives and toxic chemicals.',
      'Supports healthy bones, muscles, and nerves.',
      'Supports cognitive function and overall wellness.',
      'Promotes healthy teeth and gums.',
      'Supports healthy immune function.'
    ],
    variant: '60 Capsules in a Bottle; 50mg Each',
    keyIngredients: 'Saileya (Parmelia perlata) Extract',
    images: ['/assets/Buy-NVD3-50000IU-Natural-Vitamin-D3-Supplement.webp']
  },
  {
    id: 'nvd3-plus',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'NVD3+ | 50000IU Natural Vitamin D3 (Weekly)',
    tagline: 'High Potency Botanical Vitamin D3',
    badges: ['50000 IU WEEKLY', 'High Potency Bone Support'],
    indications: [
      'Made with naturally sourced Stone Flower (Parmelia perlata).',
      '100% vegetarian capsule, free from preservatives and toxic chemicals.',
      'Supports healthy bones, muscles, and nerves.',
      'Supports cognitive function and overall wellness.',
      'Promotes healthy teeth and gums.',
      'Weekly Consumption formulation.'
    ],
    variant: '12 Capsules in a Box; 500mg Each',
    keyIngredients: 'Saileya (Parmelia perlata) Extract',
    images: ['/assets/Shop-NVD3-50000IU-Natural-Vitamin-D3-Supplement.webp']
  },
  {
    id: 'pudin-punch',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Pudin Punch',
    tagline: 'Refreshing Digestant & Respiratory Soother',
    badges: ['ANTIOXIDANT HERBS', 'Digestive & Oral Hygiene'],
    indications: [
      'Supports healthy digestion and helps relieve gas, bloating, indigestion, and nausea.',
      'Supports respiratory health and helps ease congestion, cough, and cold symptoms.',
      'Helps freshen breath and supports oral hygiene.',
      'Contains antioxidant-rich herbs with Vitamins A and C to support overall wellness.'
    ],
    variant: '60gm in a Can',
    keyIngredients: 'Pudina Leaves, Guava Leaves, Sunthi, etc.',
    images: ['/assets/PUDIN-PUNCH-Herbal-Remedy-for-Acidity-and-Upset-Stomach.webp']
  },
  {
    id: 'shallaki',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Shallaki (Boswellia serrata)',
    botanicalName: 'Boswellia serrata',
    tagline: 'Joint Relief & Intestinal Health',
    badges: ['BOSWELLIC ACIDS', 'Joint & Bowel Care'],
    indications: [
      'Standardized to boswellic acids for consistent quality.',
      'Supports joint health and helps ease arthritis-related pain and discomfort.',
      'Supports digestive and intestinal health in conditions such as Crohn’s disease and ulcerative colitis.',
      'Helps relieve pain and supports recovery during viral infections.'
    ],
    variant: '10 Capsules in a Strip; 500mg Each',
    keyIngredients: 'Shallaki Ole-gum extract',
    images: ['/assets/Buy-Shallaki-Capsule-for-Natural-Pain-Management.webp']
  },
  {
    id: 'shatavari',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Shatavari (Asparagus racemosus) Tablet & Powder',
    botanicalName: 'Asparagus racemosus',
    tagline: 'Nourishing Tonic for Female Health & Lactation',
    badges: ['FEMALE REPRODUCTIVE', 'Tablet & Powder Formats'],
    indications: [
      'Supports hormonal balance and female reproductive wellness.',
      'Supports fertility and prepares the body for conception.',
      'Traditionally used to support healthy lactation in nursing mothers.',
      'Helps ease common menopausal discomforts such as hot flashes, night sweats, and vaginal dryness.',
      'Nourishes and supports the female reproductive system.',
      'Supports a healthy inflammatory response.'
    ],
    variant: '90 Tablets in a Bottle / 150g Powder Can',
    keyIngredients: 'Shatavari Root Extract / Pure Powder',
    images: [
      '/assets/Buy-Shatavari-Tablet-Ayurvedic-Womens-Health-Supplement.webp',
      '/assets/shatavaripowder_v2.webp'
    ]
  },
  {
    id: 'triphala',
    categoryId: '02-supplements',
    subCategory: 'Dietary Supplements',
    title: 'Triphala Extract Tablet & Churna',
    tagline: 'Triple-Herb Colon Cleansing & Antioxidant',
    badges: ['TRIDOSHA BALANCING', 'Extract Tablet & Churna Powder'],
    indications: [
      'Supports healthy digestion and regular bowel movements.',
      'Helps relieve occasional and chronic constipation.',
      'Supports healthy blood sugar and lipid levels.',
      'Aids healthy weight management.',
      'Supports liver and intestinal wellness.',
      'Rich in antioxidants and Vitamin C to support overall wellness.'
    ],
    variant: '90 Extract Tablets / 150g Churna Powder Can',
    keyIngredients: 'Haritaki, Bibhitaki, Amalaki',
    images: [
      '/assets/Buy-Triphala-Extract-Tablet-Natural-Constipation-Relief.webp',
      '/assets/Buy-Triphala-Churna-Natural-Antioxidant-Colon-Cleanser.webp'
    ]
  },

  // --- 03. HEMP FOOD & NUTRITION ---
  {
    id: 'hempcool',
    categoryId: '03-hempfood',
    subCategory: 'HEMP FOOD & NUTRITION',
    title: 'Hempcool',
    tagline: 'Cooling Digestive & Gut Comfort Elixir',
    badges: ['HEMPSEED NUTRITION', 'Body Cooling & Gut Relief'],
    indications: [
      'Helps cool the body and support internal balance.',
      'Helps relieve acidity, gastric burning, and digestive discomfort.',
      'Supports healthy digestion and helps reduce gas and bloating.',
      'Helps soothe heat-related irritation and supports gut comfort.',
      'Supports hydration and overall vitality.',
      'Helps promote a feeling of lightness and comfort.',
      'Supports relaxation and emotional balance.'
    ],
    variant: '15 Sachets in a Box; 5g Each',
    keyIngredients: 'Almonds, Muskmelon seeds, Hempseeds, Elaichi, Rose Petals etc.',
    images: ['/assets/Hempcool_V2.webp']
  },
  {
    id: 'hempseed-oil',
    categoryId: '03-hempfood',
    subCategory: 'HEMP FOOD & NUTRITION',
    title: 'Hempseed Oil – Coldpressed',
    tagline: 'Perfect 3:1 Omega-6 to Omega-3 Balance',
    badges: ['COLDPRESSED 3:1 OMEGA', 'Heart & Skin Superfood'],
    indications: [
      'Rich in Omega-3 & Omega-6 fatty acids with a natural 3:1 balance.',
      'Supports heart, metabolic, skin, and nervous system health.',
      'Helps maintain healthy inflammatory balance.',
      'Supports skin hydration and barrier health.',
      'Provides essential plant-based fats and antioxidant support.'
    ],
    variant: '200ml In a Bottle',
    keyIngredients: 'Cold-pressed hempseed oil',
    images: ['/assets/Hempseedoil.webp']
  },

  // --- 04. SKIN CARE & PERSONAL CARE ---
  {
    id: 'castile-liquid-soap',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Castile Liquid Soap',
    tagline: '100% Pure Virgin Plant Oil Cleanser',
    badges: ['LIQUID SOAP RANGE', 'Unscented, Lavender & Cedarwood'],
    indications: [
      'Made with 100% plant-based virgin oils, this natural, handmade soap gently cleanses while moisturizing and nourishing the skin.',
      'Olive Oil – Helps moisturize and protect dry, cracked skin.',
      'Hemp Seed Oil – Nourishes dry skin without clogging pores and helps soothe itchiness.',
      'Coconut Oil – Creates a rich lather and effectively cleanses dirt and impurities.',
      'Castor Oil – Helps soften and hydrate the skin.',
      'Natural Glycerin – Retained during saponification to help keep skin soft and moisturized.'
    ],
    variant: '280ml & 50ml Bottles | Variants: Unscented, Lavender, Cedarwood & Patchouli',
    keyIngredients: 'Olive Oil, Hemp Seed Oil, Coconut Oil, Castor Oil, Natural Glycerin & Pure Essential Oils',
    images: [
      '/assets/Buy-Unscented-Liquid-Castile-Soap-Hempseed-Oil-Vegan-Natural.webp',
      '/assets/Buy-Lavender-Liquid-Castile-Soap-Hempseed-Oil-Organic-Natural.webp',
      '/assets/Buy-Hempseed-Oil-Cedarwood-Patchouli-Liquid-Castile-Soap-Vegan.webp'
    ]
  },
  {
    id: 'castile-bar-soap',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Castile Bar Soap',
    tagline: 'Gentle Cold-Process Soap for Sensitive Skin & Babies',
    badges: ['BAR SOAP RANGE', 'Cold-Process 100g Bars'],
    indications: [
      'A 100% herbal, fragrance-free soap made using the cold-process method, specially formulated for babies and sensitive skin.',
      'Natural Glycerin – Helps hydrate and nourish the skin.',
      'Olive Oil – Moisturizes and helps protect dry, cracked skin.',
      'Hemp Seed Oil – Nourishes and rejuvenates without clogging pores.',
      'Coconut Oil – Creates a rich lather while gently cleansing the skin.',
      'Fragrance-Free & Gentle – Free from artificial fragrances and harsh/toxic chemicals.'
    ],
    variant: '100gm Bar Soap | Variants: Unscented, Lime & Lemon, Lavender, Cedarwood, Holy Tulsi',
    keyIngredients: 'Cold-pressed Olive Oil, Hemp Seed Oil, Coconut Oil, Natural Glycerin',
    images: [
      '/assets/Buy-Natural-Unscented-Castile-Soap-Vedi-Organic.webp',
      '/assets/Buy-Lime-Lemon-Bar-Soap-Hempseed-Oil-Skin-Cleansing.webp',
      '/assets/Buy-Lavender-Bar-Soap-Hempseed-Oil-Skin-Cleansing.webp',
      '/assets/Shop-Organic-Cedarwood-Patchouli-Castile-Soap-Hempseed-Oil.webp',
      '/assets/Buy-Natural-Tulsi-Castile-Soap-Vedi-Organic.webp'
    ]
  },
  {
    id: 'aloe-hemp-cream',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Aloe Vera & Hemp Moisturizing Cream',
    tagline: 'Deep Moisture Barrier & Skin Elasticity Care',
    badges: ['LAVENDER ESSENTIAL OIL', 'Deep Hydration & Firmness'],
    indications: [
      'A moisturizer that deeply hydrates, nourishes and supports healthy skin while promoting a sense of calm and relaxation.',
      'Deep Hydration & Nourishment – Helps replenish moisture and support the skin barrier.',
      'Healthy, Youthful Skin – Improves skin texture, elasticity and firmness while reducing fine lines.',
      'Soothes & Calms – Helps reduce skin irritation and inflammation.',
      'Hemp Seed Oil – Nourishes skin and supports elasticity and firmness.',
      'Lavender Essential Oil – Provides a calming, relaxing experience and supports stress relief.',
      'Multi-Purpose Care – Suitable for all skin types, leaving skin soft, healthy and radiant.'
    ],
    variant: '50gm In A Jar',
    keyIngredients: 'Aloe Vera Juice, Hemp Seed Oil, Lavender Essential Oil',
    images: ['/assets/Buy-Organic-Aloe-Vera-Hemp-Cream-Vitamin-E-Nourishment.webp']
  },
  {
    id: 'aloe-ashwagandha-mulethi',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Aloe Vera Gel with Ashwagandha & Mulethi',
    tagline: 'Lightweight Soothing & Stress Relief Gel',
    badges: ['SOOTHING BOTANICAL GEL', 'Ashwagandha & Mulethi'],
    indications: [
      'A soothing botanical gel combining Aloe Vera, Ashwagandha and Mulethi to provide lightweight hydration and refreshing everyday skin care.',
      'Helps hydrate and soften the skin.',
      'Provides a soothing, refreshing feel.',
      'Helps comfort dry or stressed-looking skin.',
      'Lightweight and easy to absorb.',
      'Suitable for everyday use.'
    ],
    variant: '50ml In A Jar',
    keyIngredients: 'Aloe Vera Gel, Ashwagandha Extract, Mulethi Extract',
    images: ['/assets/aloeveraashwogandha.webp']
  },
  {
    id: 'aloe-rose-gel',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Aloe Vera Gel with Rose',
    tagline: 'Cooling Botanical Refreshment',
    badges: ['PURE ROSE WATER', 'Non-Greasy Cooling Hydration'],
    indications: [
      'A refreshing Aloe Vera and Rose gel that helps hydrate, soften and refresh the skin while providing a pleasant botanical experience.',
      'Helps maintain skin hydration.',
      'Leaves skin feeling soft and refreshed.',
      'Provides a soothing, cooling feel.',
      'Lightweight, non-greasy application.',
      'Suitable for everyday use.'
    ],
    variant: '50ml In A Jar',
    keyIngredients: 'Aloe Vera Gel, Pure Rose Extract & Hydrosol',
    images: ['/assets/ALOE ROSE.webp']
  },
  {
    id: 'aloe-saffron-gel',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Aloe Vera Gel with Saffron',
    tagline: 'Radiance & Complexion Enhancement',
    badges: ['KASHMIRI SAFFRON', 'Radiance & Smoothness'],
    indications: [
      'A nourishing botanical gel combining Aloe Vera and Saffron for lightweight hydration and everyday skin care.',
      'Helps hydrate and soften the skin.',
      'Helps improve the appearance of dull, tired-looking skin.',
      'Leaves skin feeling refreshed and smooth.',
      'Lightweight and non-greasy.',
      'Suitable for everyday use.'
    ],
    variant: '50ml In A Jar',
    keyIngredients: 'Aloe Vera Gel, Kumkuma / Saffron Extract',
    images: ['/assets/ALOE SAFFRONwebp.webp']
  },
  {
    id: 'multi-herbal-shampoo',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Multi-herbal Shampoo With Hempseed Oil',
    tagline: 'Sulfate & Paraben Free Hair & Scalp Nourishment',
    badges: ['SULFATE FREE', 'Scalp Care & Frizz Reduction'],
    indications: [
      'A nourishing blend of Indian Gooseberry, Hibiscus, Curry Leaves, Fenugreek, Coconut Milk and wild-crafted Hemp Seed Oil.',
      'Nourishes Hair – Helps leave hair feeling soft, conditioned and healthy-looking.',
      'Moisture Care – Helps maintain hydration and reduce the appearance of dryness and frizz.',
      'Scalp Care – Gently cleanses the scalp and helps maintain a fresh, comfortable feel.',
      'Hemp Seed Oil – Helps nourish and condition dry-feeling hair.',
      'Lavender Essential Oil – Offers a soothing and refreshing sensory experience.',
      'Gentle Formulation – Free from sulfates, parabens, phthalates and silicones.',
      'For All Hair Types – Suitable for regular hair and scalp cleansing.'
    ],
    variant: '200ml in a Bottle',
    keyIngredients: 'Amla (Gooseberry), Hibiscus, Curry Leaves, Fenugreek, Coconut Milk, Hemp Seed Oil, Lavender Essential Oil',
    images: ['/assets/Buy-Multi-Herbal-Shampoo-with-Hempseed-Oil-Soothing-Lavender-Formula.webp']
  },
  {
    id: 'cherry-blossom-conditioner',
    categoryId: '04-personalcare',
    subCategory: 'Skin care & Personal Care',
    title: 'Cherry Blossom Hair Conditioner with Mango Butter',
    tagline: 'Rich Deep Conditioning & Silky Finish',
    badges: ['MANGO BUTTER', 'Silky Smooth & Floral Fragrance'],
    indications: [
      'A rich, nourishing conditioner formulated with Mango Butter to help soften, smooth and moisturize the hair.',
      'Deep Conditioning – Helps replenish moisture and soften dry-feeling hair.',
      'Smooth & Manageable – Helps reduce the appearance of frizz and makes hair easier to comb.',
      'Mango Butter – Provides nourishing and conditioning care for the hair.',
      'Soft, Silky Finish – Helps improve hair feel and smoothness.',
      'Natural Cherry Blossom Fragrance – Leaves hair delicately scented with a fresh, floral fragrance.',
      'Everyday Hair Care – Suitable for regular use and various hair types.'
    ],
    variant: '200ml In a Bottle',
    keyIngredients: 'Mango Butter, Natural Cherry Blossom Extract, Plant Emulsifiers',
    images: ['/assets/conditioner.webp']
  }
];
