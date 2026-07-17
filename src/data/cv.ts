/**
 * CV DATA: the structured content of the extended CV.
 *
 * Everything the /cv page and the "Selected work" home section render comes
 * from here. Edit entries in plain objects; no layout knowledge needed.
 *
 * Notes:
 *  - `selected: true` surfaces an item in the curated home-page section.
 *  - Author lists put Dhriti in bold automatically when the name matches
 *    `ME` below. No em dashes anywhere (firm house style).
 */

export const ME = 'Nagar D';

/* ---- Education ------------------------------------------------------- */
export const EDUCATION = [
  {
    degree: 'PhD, Biology (Neuroscience)',
    place: 'IISER Pune, India',
    year: '2021',
    detail: 'Doctoral work in zebrafish nervous system biology. Supervisor: Aurnab Ghose, PhD.',
  },
  {
    degree: 'MS, Biology',
    place: 'IISER Pune, India',
    year: '2015',
    detail: '',
  },
  {
    degree: 'BSc (Honours), Biochemistry',
    place: 'University of Delhi, India',
    year: '2013',
    detail: 'Top of class. Silver Jubilee Merit Scholarship and Proficiency Award.',
  },
] as const;

/* ---- Positions ------------------------------------------------------ */
export const POSITIONS = [
  {
    role: 'Postdoctoral Research Scholar',
    place: 'Brain Therapeutics Lab, Stanford University, Department of Pediatrics',
    period: '2022 to present',
    detail:
      'Human iPSC-derived brain organoids and assembloids to model neurodevelopmental and neonatal brain disorders, and to discover and test therapies.',
  },
  {
    role: 'Doctoral Researcher',
    place: 'Ghose Lab, IISER Pune, India',
    period: '2015 to 2021',
    detail: 'Cytoskeletal regulation of neural circuit development in zebrafish.',
  },
  {
    role: 'Technical Research Assistant',
    place: 'IISER Pune COVID-19 Sequencing Project, India',
    period: '2020 to 2021',
    detail: '',
  },
  {
    role: 'Indo-US GETin Fellow (predoctoral)',
    place: 'NHGRI, NIH, Bethesda, MD, USA',
    period: '2018',
    detail: '',
  },
  {
    role: 'Summer Undergraduate Research Fellow',
    place: 'ACBR, New Delhi, India',
    period: '2013',
    detail: '',
  },
] as const;

/* ---- Publications & preprints --------------------------------------- *
 * `selected: true` shows the item on the home page. Keep that list short.
 * Author string uses the literal names; ME is bolded at render time.       */
export const PUBLICATIONS = [
  {
    selected: true,
    authors: 'Nagar D, Choi JB, Hu Z, House MS, Park S, Abel B, Nikhil A, Aich M, Htun S, Wang W, Weinacht KG, Gu Z, Pasca AM',
    title:
      'Adrenomedullin restores mitochondrial bioenergetics and rescues interneuron phenotypes in human models of 22q11.2 deletion syndrome',
    venue: 'bioRxiv',
    year: '2026',
    note: 'preprint',
    doi: '10.64898/2026.05.24.726075',
  },
  {
    selected: true,
    authors:
      'Puno A, Michno WP, Li L, Everitt A, McCluskey K, Htun S, Nagar D, Choi JB, Dai Y, Park S, Gurwitz E, Willsey AJ, Birey F, Pasca AM',
    title: 'Adrenomedullin restores the human cortical interneuron migration defects induced by hypoxia',
    venue: 'eLife',
    year: '2026',
    note: '',
    doi: '10.7554/eLife.108134',
  },
  {
    selected: false,
    authors:
      'Li L, Choi JB, Shin CH, Htun S, Mestan S, Voss A, Shadrach JL, Puno A, Nagar D, Ramirez N, Rojo D, Lee SH, Gibson EM, Kaltschmidt JA, Sloan SA, Chung WS, Pasca AM',
    title: 'Hypoxia disrupts circadian rhythms in astrocytes and causes synapse engulfment defects',
    venue: 'bioRxiv',
    year: '2024',
    note: 'preprint',
    doi: '10.1101/2024.02.22.581651',
  },
  {
    selected: false,
    authors: 'Niveditha D, Khan S, Khilari A, Nadkarni S, Bhalerao U, Kadam P, Nagar D, et al.',
    title:
      'A tale of two waves: diverse genomic and transmission landscapes over 15 months of the COVID-19 pandemic in Pune, India',
    venue: 'medRxiv',
    year: '2022',
    note: 'preprint',
    doi: '10.1101/2022.11.05.22281203',
  },
  {
    selected: false,
    authors: 'Kundu T, Siva Das S, Sewatkar LK, Kumar DS, Nagar D, Ghose A',
    title:
      'Antagonistic activities of Fmn2 and ADF regulate axonal F-actin patch dynamics and the initiation of collateral branching',
    venue: 'Journal of Neuroscience',
    year: '2022',
    note: '42(39):7355 to 7369',
    doi: '10.1523/JNEUROSCI.3107-20.2022',
  },
  {
    selected: false,
    authors: 'Ghosh U, Kundu J, Ghosh A, Das A, Nagar D, Ghose A, Sinha S',
    title:
      'Synthesis of Phosphorodiamidate Morpholino Oligonucleotides using Trityl and Fmoc chemistry in an automated oligo synthesizer',
    venue: 'The Journal of Organic Chemistry',
    year: '2022',
    note: '87(15):9466 to 9478',
    doi: '',
  },
  {
    selected: true,
    authors: 'Nagar D, James TK, Mishra R, Guha S, Burgess SM, Ghose A',
    title:
      'The Formin Fmn2b is required for the development of an excitatory interneuron module in the zebrafish acoustic startle circuit',
    venue: 'eNeuro',
    year: '2021',
    note: '8(4):ENEURO.0329-20.2021',
    doi: '',
  },
  {
    selected: false,
    authors: 'Kundu T, Dutta P, Nagar D, Maiti S, Ghose A',
    title: 'Coupling of dynamic microtubules to F-actin by Fmn2 regulates chemotaxis of neuronal growth cones',
    venue: 'Journal of Cell Science',
    year: '2021',
    note: '134(13):jcs252916',
    doi: '',
  },
  {
    selected: false,
    authors: 'Nagar D, Carrington B, Burgess SM, Ghose A',
    title: 'Development of motor neurons and motor activity in zebrafish requires F-actin nucleation by Fmn2b',
    venue: 'bioRxiv',
    year: '2021',
    note: 'preprint, under revision at PLOS Genetics',
    doi: '10.1101/2021.08.10.455777',
  },
] as const;

/* ---- Patents -------------------------------------------------------- *
 * House style: platform acronyms are removed from titles to honour the
 * "no proprietary platform names" rule. To restore the full public titles
 * and filing numbers, edit the strings below. See README > "Patents".     */
export const PATENTS = [
  {
    title: 'Adrenomedullin analogs and methods of use thereof',
    status: 'Published and pending',
    detail: 'US patent application, non-provisional filed 2025.',
  },
  {
    title: 'Methods for brain region-specific organoids and assembloids',
    status: 'PCT international pending',
    detail: 'PCT application filed 2026.',
  },
  {
    title: 'Antisense oligonucleotides for Down syndrome and tauopathies',
    status: 'Provisional pending',
    detail: 'US provisional filed 2026.',
  },
] as const;

/* ---- Invited talks & presentations ---------------------------------- */
export const TALKS = [
  {
    title: 'Brain organoid models for CNS drug discovery: disease modeling and therapeutic testing',
    venue: 'Stanford Drug Discovery Symposium, Stanford University, CA',
    year: '2026',
    selected: true,
  },
  {
    title:
      'Functional and metabolic dissection of inhibitory neuron dysfunction in 22q11.2DS: from mechanisms to potential therapeutics',
    venue: 'Stanford Department of Pediatrics Research Retreat (17th Annual), Stanford, CA',
    year: '2026',
    selected: true,
  },
  {
    title: 'Mitochondrial dysfunction in 22q11.2DS neuropathology',
    venue: '9th Biennial Molecular Psychiatry Meeting, Kona, HI',
    year: '2024',
    selected: false,
  },
  {
    title: 'Mitochondrial dysfunction in 22q11.2 deletion syndrome neuropathology',
    venue: '4th Biennial 22q11 Deletion Syndrome Symposium, Stanford University, CA',
    year: '2023',
    selected: true,
  },
  {
    title: 'Modeling development and disease with human tissue organoids',
    venue: 'EMBO Meeting, Bangalore, India',
    year: '2023',
    selected: false,
  },
  {
    title: 'Neuroimmune interactions',
    venue: 'FENS-Hertie Winter School, Obergurgl, Austria',
    year: '2023',
    selected: false,
  },
] as const;

/* ---- Honors, fellowships & grants ----------------------------------- */
export const HONORS = [
  { title: 'Stanford Bio-X Center for Biological Microfluidics C-ShaRP Experiential Learning Award', year: '2026', selected: true },
  { title: 'Outstanding Lightning Talk Award, Stanford Department of Pediatrics Research Retreat', year: '2026', selected: false },
  { title: 'Stanford Postdoc JEDI (Justice, Equity, Diversity and Inclusivity) Champion Award', year: '2024', selected: true },
  { title: 'MCHRI Postdoctoral Fellowship, Stanford University', year: '2024', selected: true },
  { title: 'EMBO Travel Grant and Oral Presentation Award, Bangalore, India', year: '2023', selected: false },
  { title: 'Pathways to Neuroscience Trainee, Stanford University', year: '2022', selected: false },
  { title: 'WLF Young Investigator, 4th World Laureate Forum, Shanghai (IBRO)', year: '2021', selected: false },
  { title: 'Indo-US GETin Predoctoral Fellowship (IUSSTF and DBT-GOI), NIH, USA', year: '2018', selected: true },
  { title: 'CSIR Junior and Senior Research Fellowships, India', year: '2015 to 2020', selected: false },
] as const;

/* ---- Teaching & mentorship ------------------------------------------ */
export const TEACHING = [
  'Mentor, MCHRI DRIVE, Stanford SPAN, and PIPS programs for under-represented minorities in science (2022 to present).',
  'Co-founder, Graduate PodCast Reporter science-communication series, IISER Pune (2018).',
  'Teaching Assistant in Neurobiology, Evolution and Ecology, and Systems Biology, IISER Pune (2015 to 2017).',
  'Teacher, B4 Bioimaging Workshop (Building Bharat-Boston Biosciences), 2019.',
  'Judge and reporter, NIH PostBac Poster Day and Career Symposium (2018).',
] as const;

/* ---- Service, outreach & leadership --------------------------------- */
export const SERVICE = [
  'Co-chair, Stanford LGBTQ+ Postdocs Group (SURPAS affinity group), 2022 to present.',
  'Invited participant, SynBioBeta Genetic Agency Leadership Luncheon, San Jose, CA (2026).',
  'Public science talk, "Modeling brains in a dish for personalized medicine," Pint of Science, Palo Alto, CA (2026).',
  'Student representative, Internal Complaints Committee (POSH), IISER Pune (2018 to 2021).',
  'Science street plays and volunteer teaching, Disha NGO, Pune (2013 to 2016).',
  'COVID-19 Testing Centre volunteer, IISER Pune (2020).',
] as const;
