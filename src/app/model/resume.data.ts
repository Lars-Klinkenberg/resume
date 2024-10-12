import {
  SideHeaderTranslation,
  SkillTypeTranslation,
  SideHeader,
  ExperienceType,
  ExperienceTypeTranslation,
  Resume,
  SkillType,
} from './resume.model';

export const myResume: Resume = {
  personalData: {
    name: 'Lars Klinkenberg',
    jobTitle: 'Full Stack Entwickler',
  },
  languages: [
    {
      name: 'Deutsch',
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'Englisch',
      index: 4,
      maxIndex: 5,
    },
  ],
  skills: [
    {
      name: 'HTML & CSS',
      type: SkillType.programming,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'JavaScript / TypeScript',
      type: SkillType.programming,
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'Angular',
      type: SkillType.framework,
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'Java',
      type: SkillType.programming,
      index: 3,
      maxIndex: 5,
    },
    {
      name: 'Node.js',
      type: SkillType.framework,
      index: 2,
      maxIndex: 5,
    },
    {
      name: 'MySQL',
      type: SkillType.programming,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'MongoDB',
      type: SkillType.programming,
      index: 1,
      maxIndex: 5,
    },
    {
      name: 'Scrum',
      type: SkillType.other,
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'Git',
      type: SkillType.other,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Linux',
      type: SkillType.other,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'C#, C, PHP, Python',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'Docker, Kubernetes, Maven, Jenkins',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'IBM Cloud, IBM Watson',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'Jira, Confluence, Bitbucket',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
  ],
  hobbies: ['Klettern', 'Gaming', 'Programmieren mit Raspberry Pi'],
  experiences: [
    {
      type: ExperienceType.work,
      jobTitle: 'Werkstudent - Full Stack Entwickler',
      company: 'adesso SE',
      startDate: '04/2024',
      endDate: 'Aktuell',
      descriptions: [
        'Fortführung meiner Tätigkeit als Full Stack Entwickler, während ich mein Studium weiterführe, mit Fokus auf die Bereitstellung hochwertiger Lösungen für Kundenprojekte.',
      ],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Full-Stack Entwickler (Praktikum - 32h/Woche)',
      company: 'adesso SE',
      startDate: '10/2020',
      endDate: '03/2024',
      descriptions: [
        'Spezialisiert auf Frontend-Entwicklung mit JavaScript und Angular, umfangreiche Erfahrung in der Entwicklung und Wartung von kundenorientierten Funktionen.',
        'Leitung der Integration von Chatbot-Lösungen in Kundensysteme, enge Zusammenarbeit mit funktionsübergreifenden Teams, um Geschäfts- und technische Anforderungen zu erfüllen.',
      ],
      technologys: ['Java', 'TypeScript', 'HTML', 'Angular'],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Freiwilliges Praktikum - Vorbereitung auf Full Stack Entwicklung',
      company: 'adesso SE',
      startDate: '08/2020',
      endDate: '10/2020',
      descriptions: [
        'Vorbereitung auf die Rolle eines Full Stack Entwicklers durch das Erlernen grundlegender Fähigkeiten in Frontend- und Backend-Entwicklung.',
      ],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Praktikant - Softwareentwickler',
      company: 'Regionales Rechenzentrum der Universität zu Köln',
      startDate: '06/2019',
      endDate: '08/2019',
      descriptions: [
        'Mitwirkung bei der Entwicklung neuer Funktionen für das Content Management System (CMS) der Universität zu Köln, Verbesserung der Funktionalität und Systemleistung.',
        'Praktische Erfahrung in Java-Entwicklung in einer komplexen technischen Umgebung.',
      ],
      technologys: ['Typo3', 'Java'],
    },
    {
      type: ExperienceType.education,
      jobTitle: "Bachelor-Studium in Wirtschaftsinformatik (Fernstudium)",
      company: 'Wilhelm Büchner Hochschule',
      startDate: '04/2024',
      endDate: '10/2025',
      descriptions: [
        'Derzeit im Bachelor-Studiengang Wirtschaftsinformatik im Fernstudium, Stärkung der Fachkenntnisse in Informationstechnologie und Geschäftsprozessen.',
      ],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Duales Studium - Business Information Management',
      company: 'Provadis School of International Management and Technology AG',
      startDate: '10/2020',
      endDate: '03/2024',
      descriptions: [
        'Teilnahme an einem dualen Studium, das akademische Studien mit praktischen Arbeitserfahrungen kombiniert.',
        'Erworbene fundierte Kenntnisse in Informationstechnologie und Geschäftsmanagement, einschließlich praktischer Erfahrungen in Systemanalyse, Softwareentwicklung und Geschäftsprozessoptimierung. Leider konnte ich das Programm nicht abschließen, da ich die letzte Mathematikprüfung nicht bestanden habe.'
      ],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Fachhochschulreife',
      company: 'Berufskolleg Platz der Republik für Technik und Medien',
      startDate: '08/2017',
      endDate: '06/2020',
      descriptions: ['Abschluss als staatlich geprüfter informationstechnischer Assistent mit spezialisierter Ausbildung in Softwareentwicklung und Systemadministration.'],
    },
    {
      type: ExperienceType.project,
      jobTitle: 'Smart Desk - IoT-Projekt',
      company: 'Privates Projekt',
      startDate: '05/2024',
      endDate: 'Aktuell',
      descriptions: [
        'Entwicklung eines Smart Desk-Systems mit Raspberry Pi zur Überwachung und Steuerung der Tischhöhe und der Standzeit, Integration von Python und Angular mit MySQL zur Datenverwaltung.',
      ],
      technologys: ['Python', 'Angular', 'MySQL'],
    },
    {
      type: ExperienceType.project,
      jobTitle: 'Service Chatbot Integration',
      company: 'adesso SE',
      startDate: '01/2022',
      endDate: 'Aktuell',
      descriptions: [
        'Leitende Rolle bei der Integration von Service-Chatbots für Großkunden wie toom Baumarkt und eprimo, Sicherstellung einer effizienten Zusammenarbeit zwischen internen und externen Teams zur Bereitstellung nahtloser Lösungen.',
      ],
      technologys: ['TypeScript', 'HTML', 'CSS'],
    },
    {
      type: ExperienceType.project,
      jobTitle: 'Zeiterfassungssystem Entwicklung',
      company: 'adesso SE',
      startDate: '01/2021',
      endDate: '01/2022',
      descriptions: [
        'Mitarbeit bei der Entwicklung eines Zeiterfassungssystems, Fokussierung auf Frontend- und Backend-Aspekte zur Optimierung der Systemleistung.',
      ],
      technologys: ['Angular', 'Node.js'],
    },
  ],
  certifications: [
    {
      name: 'ISTQB Certified Tester - Foundation Level (CTFL)',
      date: '01/2023',
    },
    {
      name: 'iSAQB - Certified Professional for Software Architecture, Foundation Level',
      date: '05/2022',
    },
  ],
};

export const myResume_en: Resume = {
  personalData: {
    name: 'Lars Klinkenberg',
    jobTitle: 'Full Stack Developer',
  },
  languages: [
    {
      name: 'German',
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'English',
      index: 4,
      maxIndex: 5,
    },
  ],
  skills: [
    {
      name: 'HTML & CSS',
      type: SkillType.programming,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'JavaScript / TypeScript',
      type: SkillType.programming,
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'Angular',
      type: SkillType.framework,
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'Java',
      type: SkillType.programming,
      index: 3,
      maxIndex: 5,
    },
    {
      name: 'Node.js',
      type: SkillType.framework,
      index: 2,
      maxIndex: 5,
    },
    {
      name: 'MySQL',
      type: SkillType.programming,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'MongoDB',
      type: SkillType.programming,
      index: 1,
      maxIndex: 5,
    },
    {
      name: 'Scrum',
      type: SkillType.other,
      index: 5,
      maxIndex: 5,
    },
    {
      name: 'Git',
      type: SkillType.other,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Linux',
      type: SkillType.other,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'C#, C, PHP, Python',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'Docker, Kubernetes, Maven, Jenkins',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'IBM Cloud, IBM Watson',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'Jira, Confluence, Bitbucket',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
  ],
  hobbies: ['Climbing', 'Gaming', 'Programming with Raspberry Pi'],
  experiences: [
    {
      type: ExperienceType.work,
      jobTitle: 'Working Student - Full Stack Developer',
      company: 'adesso SE',
      startDate: '04/2024',
      endDate: 'Present',
      descriptions: [
        'Continuing development work as a Full Stack Developer while balancing academic studies, with a focus on delivering high-quality solutions for client projects.',
      ],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Full-Stack Developer (Internship - 32h/Week)',
      company: 'adesso SE',
      startDate: '10/2020',
      endDate: '03/2024',
      descriptions: [
        'Specialized in frontend development using JavaScript and Angular, with extensive experience in developing and maintaining client-facing features.',
        'Led the integration of chatbot solutions into customer systems, collaborating closely with cross-functional teams to meet business and technical requirements.',
      ],
      technologys: ['Java', 'TypeScript', 'HTML', 'Angular'],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Voluntary Internship - Full Stack Development Preparation',
      company: 'adesso SE',
      startDate: '08/2020',
      endDate: '10/2020',
      descriptions: [
        'Prepared for a Full Stack Developer role by learning foundational skills in both frontend and backend development.',
      ],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Intern - Software Developer',
      company: 'Regional Data Center of the University of Cologne',
      startDate: '06/2019',
      endDate: '08/2019',
      descriptions: [
        'Contributed to the development of new features for the University’s Content Management System (CMS), enhancing functionality',
        'Gained practical experience in Java development within a complex technical environment.',
      ],
      technologys: ['Typo3', 'Java'],
    },
    {
      type: ExperienceType.education,
      jobTitle: "Bachelor's Degree in Business Informatics (Distance Learning)",
      company: 'Wilhelm Büchner Hochschule',
      startDate: '04/2024',
      endDate: '10/2025',
      descriptions: [
        'Currently pursuing a Bachelor’s degree in Business Informatics through distance learning, strengthening expertise in both information technology and business processes.',
      ],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Dual Study Program - Business Information Management',
      company: 'Provadis School of International Management and Technology AG',
      startDate: '10/2020',
      endDate: '03/2024',
      descriptions: [
        'Participated in a dual study program combining academic studies with practical work experience.',
        'Gained a strong foundation in both information technology and business management, including hands-on experience in system analysis, software development, and business process optimization. Unfortunately, I was unable to complete the program due to not passing the final mathematics exam.'
      ],
    },    
    {
      type: ExperienceType.education,
      jobTitle: 'Vocational Diploma in Information Technology',
      company: 'Berufskolleg Platz der Republik für Technik und Medien',
      startDate: '08/2017',
      endDate: '06/2020',
      descriptions: ['Graduated as a state-certified IT assistant, with specialized training in software development and systems administration.'],
    },
    {
      type: ExperienceType.project,
      jobTitle: 'Smart Desk - IoT Project',
      company: 'Private Project',
      startDate: '05/2024',
      endDate: 'Present',
      descriptions: [
        'Developing a Smart Desk system using Raspberry Pi to monitor and control desk height and time spent standing, integrating Python and Angular with MySQL for data management.',
      ],
      technologys: ['Python', 'Angular', 'MySQL'],
    },
    {
      type: ExperienceType.project,
      jobTitle: 'Service Chatbot Integration',
      company: 'adesso SE',
      startDate: '01/2022',
      endDate: 'Present',
      descriptions: [
        'Spearheaded the integration of service chatbots for major clients like toom Baumarkt and eprimo, ensuring efficient collaboration between in-house and partner teams to deliver seamless solutions.',
      ],
      technologys: ['TypeScript', 'HTML', 'CSS'],
    },
    {
      type: ExperienceType.project,
      jobTitle: 'Time Tracking System Development',
      company: 'adesso SE',
      startDate: '01/2021',
      endDate: '01/2022',
      descriptions: [
        'Contributed to the development of a time tracking system, focusing on both frontend and backend aspects to optimize system performance.',
      ],
      technologys: ['Angular', 'Node.js'],
    },
  ],
  certifications: [
    {
      name: 'ISTQB Certified Tester - Foundation Level (CTFL)',
      date: '01/2023',
    },
    {
      name: 'iSAQB - Certified Professional for Software Architecture, Foundation Level',
      date: '05/2022',
    },
  ],
};

export const ExperienceTypeTranslations: ExperienceTypeTranslation = {
  [ExperienceType.work]: {
    EN: 'Work experience',
    DE: 'Berufserfahrung',
  },
  [ExperienceType.education]: {
    EN: 'Education',
    DE: 'Bildungsweg',
  },
  [ExperienceType.project]: {
    EN: 'Projects',
    DE: 'Projekte',
  },
};

export const SkillTypeTranslations: SkillTypeTranslation = {
  [SkillType.framework]: {
    EN: 'Frameworks',
    DE: 'Frameworks',
  },
  [SkillType.programming]: {
    EN: 'Programming languages',
    DE: 'Programmiersprachen',
  },
  [SkillType.other]: {
    EN: 'Skills',
    DE: 'Skills',
  },
  [SkillType.more]: {
    EN: 'Other',
    DE: 'Weitere',
  },
};

export const SideHeaderTranslations: SideHeaderTranslation = {
  [SideHeader.languages]: {
    EN: 'Languages',
    DE: 'Sprachen',
  },
  [SideHeader.knowledges]: {
    EN: 'Knowledges',
    DE: 'Kenntnisse',
  },
  [SideHeader.hobbys]: {
    EN: 'Hobbys',
    DE: 'Hobbys',
  },
  [SideHeader.certificates]: {
    EN: 'Certificates',
    DE: 'Zertifikate',
  },
};
