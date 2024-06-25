/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jordi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jordi Nkwamo Portfolio",
    type: "website",
    url: "http://jordi.nkwamo.com/",
  },
};

//Home Page
const greeting = {
  title: "Jordi Nkwamo",
  logo_name: "JordiNkwamo",
  nickname: "",
  subTitle: `Après avoir complété mes  deux années de formation en programmation informatique, j'ai acquis une solide base dans divers language de programmation innovant tels que c#, swift(qui est le language de programmation chez IOS).Durant mon cursus j'ai 
  développé des compétences en développement web, maîtrisant HTML, CSS, JavaScript et aussi des notions d'algorithme et structure de données. En plus des langages de programmation,  j'ai etudié  les principes fondamentaux des bases de données, notamment SQL, et la gestion des bases de données relationnelles, et les procédures stockées
  j'ai egalement été initié au concept de NoSql.`,
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "https://github.com/jordinkwamo",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jordi-nkwamo-bb1086209",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/jordinkwamo",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:nkwamojordi@yahoo.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: 'X-Twitter',
  //   link: 'https://twitter.com/Jordi_1919',
  //   fontAwesomeIcon: 'fa-x-twitter', // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: '#000000', // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: 'Facebook',
  //   link: 'https://www.facebook.com/laymanbrother.19/',
  //   fontAwesomeIcon: 'fa-facebook-f', // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: '#1877F2', // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: 'Instagram',
  //   link: 'https://www.instagram.com/layman_brother/',
  //   fontAwesomeIcon: 'fa-instagram', // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: '#E4405F', // Reference https://simpleicons.org/?q=instagram
  // },
  // {
  //   name: 'YouTube',
  //   link: 'https://youtube.com/c/DevSense19',
  //   fontAwesomeIcon: 'fa-youtube', // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: '#FF0000', // Reference https://simpleicons.org/?q=youtube
  // },
];

const skills = {
  data: [
    {
      title: "Mes principales competences en tant que developpeur web",
      fileName: "FullStackImg",
      skills: [
        " <--creer des application mobiles sous IOS avec (swift comme language de programmation) ",
        "<--creer des application mobiles sous android avec  c#",
        "<--creations des application backend avec java et express",
        "<--maitrise dans la manipulation de plusieurs logiciels informatiques",
        "<-- base en AWS(Amazone web services)"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
        
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: 'Sass',
        //   fontAwesomeClassname: 'simple-icons:sass',
        //   style: {
        //     color: '#CC6699',
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: 'Gatsby',
        //   fontAwesomeClassname: 'simple-icons:gatsby',
        //   style: {
        //     color: '#663399',
        //   },
        // },
        // {
        //   skillName: 'Flutter',
        //   fontAwesomeClassname: 'simple-icons:flutter',
        //   style: {
        //     color: '#02569B',
        //   },
        // },
      ],
    },
    // {
    //   title: 'Data Science & AI',
    //   fileName: 'DataScienceImg',
    //   skills: [
    //     '⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases',
    //     '⚡ Experience of working with Computer Vision and NLP projects',
    //     '⚡ Complex quantitative modelling for dynamic forecasting and time series analysis',
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Tensorflow',
    //       fontAwesomeClassname: 'logos-tensorflow',
    //       style: {
    //         backgroundColor: 'transparent',
    //       },
    //     },
    //     {
    //       skillName: 'Keras',
    //       fontAwesomeClassname: 'simple-icons:keras',
    //       style: {
    //         backgroundColor: 'white',
    //         color: '#D00000',
    //       },
    //     },
    //     {
    //       skillName: 'PyTorch',
    //       fontAwesomeClassname: 'logos-pytorch',
    //       style: {
    //         backgroundColor: 'transparent',
    //       },
    //     },
    //     {
    //       skillName: 'Python',
    //       fontAwesomeClassname: 'ion-logo-python',
    //       style: {
    //         backgroundColor: 'transparent',
    //         color: '#3776AB',
    //       },
    //     },
    //     {
    //       skillName: 'Deeplearning',
    //       imageSrc: 'deeplearning_ai_logo.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   fileName: 'CloudInfraImg',
    //   skills: [
    //     '⚡ Experience working on multiple cloud platforms',
    //     '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases',
    //     '⚡ Deploying deep learning models on cloud to use on mobile devices',
    //     '⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS',
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'GCP',
    //       fontAwesomeClassname: 'simple-icons:googlecloud',
    //       style: {
    //         color: '#4285F4',
    //       },
    //     },
    //     {
    //       skillName: 'AWS',
    //       fontAwesomeClassname: 'simple-icons:amazonaws',
    //       style: {
    //         color: '#FF9900',
    //       },
    //     },
    //     {
    //       skillName: 'Azure',
    //       fontAwesomeClassname: 'simple-icons:microsoftazure',
    //       style: {
    //         color: '#0089D6',
    //       },
    //     },
    //     {
    //       skillName: 'Firebase',
    //       fontAwesomeClassname: 'simple-icons:firebase',
    //       style: {
    //         color: '#FFCA28',
    //       },
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       fontAwesomeClassname: 'simple-icons:postgresql',
    //       style: {
    //         color: '#336791',
    //       },
    //     },
    //     {
    //       skillName: 'MongoDB',
    //       fontAwesomeClassname: 'simple-icons:mongodb',
    //       style: {
    //         color: '#47A248',
    //       },
    //     },
    //     {
    //       skillName: 'Docker',
    //       fontAwesomeClassname: 'simple-icons:docker',
    //       style: {
    //         color: '#1488C6',
    //       },
    //     },
    //     {
    //       skillName: 'Kubernetes',
    //       fontAwesomeClassname: 'simple-icons:kubernetes',
    //       style: {
    //         color: '#326CE5',
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: 'UI/UX Design',
    //   fileName: 'DesignImg',
    //   skills: [
    //     '⚡ Designing highly attractive user interface for mobile and web applications',
    //     '⚡ Customizing logo designs and building logos from scratch',
    //     '⚡ Creating the flow of application functionalities to optimize user experience',
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Adobe XD',
    //       fontAwesomeClassname: 'simple-icons:adobexd',
    //       style: {
    //         color: '#FF2BC2',
    //       },
    //     },
    //     {
    //       skillName: 'Figma',
    //       fontAwesomeClassname: 'simple-icons:figma',
    //       style: {
    //         color: '#F24E1E',
    //       },
    //     },
    //     {
    //       skillName: 'Adobe Illustrator',
    //       fontAwesomeClassname: 'simple-icons:adobeillustrator',
    //       style: {
    //         color: '#FF7C00',
    //       },
    //     },
    //     {
    //       skillName: 'Inkscape',
    //       fontAwesomeClassname: 'simple-icons:inkscape',
    //       style: {
    //         color: '#000000',
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Jordi_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Jordi391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Cité Collégiale Ottawa",
      subtitle: "Diplôme en Programmation Informatique",
      logo_path: "cite_collegiale_logo.jpeg",
      alt_name: "Cite Collegiale Ottawa",
      duration: "2022 - 2024",
      descriptions: [
        // '⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
        // '⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
        // '⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.',
      ],
      website_link: "https://www.collegelacite.ca/",
    },
    {
      title: "Digital college de paris  campus de Douala",
      subtitle: "Deux ans de formation en science du numerique",
      logo_path: "digital_college_logo.png",
      alt_name: "Université Numérique Paris",
      duration: "2020 - 2022",
      descriptions: [
        // '⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.',
        // '⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.',
        // '⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.',
      ],
      website_link: "https://digital-college.fr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Travail et Stage",
  description:
    "Je suis un développeur de logiciels Full Stack de formation avec deux ans d'expérience dans le développement d'applications Web robustes et évolutives. Maîtrise de divers langages de programmation et familiarisé avec plusieurs Framework, bibliothèques et outils de développement Web. Je possède une base en développement front-end et back-end, concentré sur la conception de solutions à des problèmes complexes. Je suis adepte de la collaboration avec des équipes interfonctionnelles pour fournir des produits logiciels de haute qualité qui répondent aux objectifs commerciaux..",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "developeur web",
          company: "LetServU LLC.",
          company_url: "https://www.letservu.com/",
          logo_path: "letservu_logo.png",
          duration: "Septembre 2022 - maintenant",
          location: "En ligne",
          description: `Travailler au sein d'une équipe de 5 développeurs frontend et backend pour développer une plateforme permettant aux entreprises d'offrir différents services à leurs clients:
            ●	Conception d'une interface frontend entièrement fonctionnelle avec React.JS (pour le web) et React Native (pour les applications natives),
            ●	Conception d'un backend avec Node.JS fonctionnant sur un serveur Express et utilisant MongoDB comme base de données,
            ●	Conception de nombreus API internes accessibles à partir de différents points de terminaison, qui permettent la communication entre notre backend et notre front-end et l'utilisation d'API et de webhooks externes pour communiquer avec des tiers.
            `,
          color: "#000000",
        },
        {
          title: "technicien informatique",
          company: "TECH SARL",
          company_url: "",
          logo_path: "letservu_logo.png",
          duration: "Aout 2020 - Juillet 2022",
          location: "Douala (cameroun)",
          description: `J’ai eu à travailler dans une startup qui s’occupe de l’entretien des systèmes informatique, la mise à jour des logiciels, et la gestion des réseaux locaux des grandes entreprise
            ●	 Connaissance approfondie des équipements informatiques, afficheur électroniques, imprimantes aux fins d’installations,
            ●  Maitrise des logiciels de bureaux de la suite office et aussi des logiciels de bureaux de MACOS,
            ●	 Entretien des machine, mise à jour, installation des antivirus `,
          color: "#000000",
        },

        {
          title: "Associé",
          company: "Épicerie IGA, Gatineau",
          company_url: "https://www.iga.net",
          logo_path: "iga_logo.png",
          duration: "Octobre 2022 – Maintenant",
          location: "Gatineau, Qc",
          description: `Assister le directeur des ventes dans les opérations quotidiennes:
            ●	Preparation des commandes pour la vente en magasin et en ligne,
            ●	Gérer le service client et résoudre les problèmes liés aux clients,
            ●	Passer à la caisse et recevoir le paiement des clients ,
            ●	Aider les clients en fournissant des informations détaillées sur les produits du magasins selon les besoins.
            ● Decrocher les appels des clients pour repondres a leurs differentes questions et preoccupation.

            `,
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: 'Internships',
    //   experiences: [
    //     {
    //       title: 'Machine Learning Intern',
    //       company: 'TikTok Inc.',
    //       company_url: 'https://www.tiktok.com/en/',
    //       logo_path: 'tiktok_logo.png',
    //       duration: 'May 2022 - Aug 2022',
    //       location: 'San Francisco, USA',
    //       description:
    //         'Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.',
    //       color: '#000000',
    //     },
    //     {
    //       title: 'Data Science Research Intern',
    //       company: 'Delhivery Pvt. Ltd.',
    //       company_url: 'https://www.delhivery.com/',
    //       logo_path: 'delhivery_logo.png',
    //       duration: 'May 2019 - Sept 2019',
    //       location: 'Gurgaon, Haryana',
    //       description:
    //         'I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.',
    //       color: '#ee3c26',
    //     },
    //     {
    //       title: 'Data Science Intern',
    //       company: 'Intel Indexer LLC',
    //       company_url: 'https://opencorporates.com/companies/us_dc/EXTUID_4170286',
    //       logo_path: 'intel_logo.jpg',
    //       duration: 'Nov 2018 - Dec 2018',
    //       location: 'Work From Home',
    //       description:
    //         'This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.',
    //       color: '#0071C5',
    //     },
    //   ],
    // },
    // {
    //   title: 'Volunteerships',
    //   experiences: [
    //     {
    //       title: 'Google Explore ML Facilitator',
    //       company: 'Google',
    //       company_url: 'https://about.google/',
    //       logo_path: 'google_logo.png',
    //       duration: 'June 2019 - April 2020',
    //       location: 'Hyderabad, Telangana',
    //       description:
    //         'Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.',
    //       color: '#4285F4',
    //     },
    //     {
    //       title: 'Microsoft Student Partner',
    //       company: 'Microsoft',
    //       company_url: 'https://www.microsoft.com/',
    //       logo_path: 'microsoft_logo.png',
    //       duration: 'Aug 2019 - May 2020',
    //       location: 'Hyderabad, Telangana',
    //       description:
    //         'Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.',
    //       color: '#D83B01',
    //     },
    //     {
    //       title: 'Mozilla Campus Captain',
    //       company: 'Mozilla',
    //       company_url: 'https://www.mozilla.org/',
    //       logo_path: 'mozilla_logo.png',
    //       duration: 'Oct 2019 - May 2020',
    //       location: 'Kurnool, Andhra Pradesh',
    //       description:
    //         'My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.',
    //       color: '#000000',
    //     },
    //     {
    //       title: 'Developer Students Club Member',
    //       company: 'DSC IIITDM Kurnool',
    //       company_url: 'https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool',
    //       logo_path: 'dsc_logo.png',
    //       duration: 'Jan 2018 - May 2020',
    //       location: 'Kurnool, Andhra Pradesh',
    //       description:
    //         'We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.',
    //       color: '#0C9D58',
    //     },
    //     {
    //       title: 'Developer Program Member',
    //       company: 'Github',
    //       company_url: 'https://github.com/',
    //       logo_path: 'github_logo.png',
    //       duration: 'July 2019 - PRESENT',
    //       location: 'Work From Home',
    //       description:
    //         'I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.',
    //       color: '#181717',
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "",
    profile_image_path: "",
    description:
      "Je suis disponible pour discuter à tout moment. Je peux vous aider avec le développement d'applications web full stack, et aussi en tant que technicien informatique,pour me contacter par courriel juste appuyer sur le bouton rouge, le  bleu est celui de mon Linkedin et le bouton noir est celui de mon Github qui regorge tous les differents projets de developement que j'ai eu a realiser.  ",
  },
  // blogSection: {
  //   title: 'Blogs',
  //   subtitle:
  //     'I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.',
  //   link: 'https://blogs.JordiNkwamo.com/',
  //   avatar_image_path: 'blogs_image.svg',
  // },
  addressSection: {
    title: "Address",
    subtitle: "CANADA",
    locality: "Quebec",
    country: "Canada",
    region: "Quebec",
    postalCode: "J8Z 1J4",
    // streetAddress: 'Saratoga Avenue',
    avatar_image_path: "address_image.svg",
    // location_map_link: 'https://maps.app.goo.gl/NvYZqa34Wye4tpS17',
  },
  phoneSection: {
    title: "CELLULAIRE",
    subtitle: "581-922-4231",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
