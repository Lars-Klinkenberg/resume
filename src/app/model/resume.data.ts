import { ExperienceType, Resume, SkillType } from './resume.model';

export const myResume: Resume = {
  personalData: {
    name: 'Lars Klinkenberg',
    jobTitle: 'Full-Stack-Entwickler',
  },
  languages: [
    {
      name: 'Deutsch',
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Englisch',
      index: 3,
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
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Angular',
      type: SkillType.framework,
      index: 4,
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
      index: 3,
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
      index: 4,
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
      name: 'C#, C PHP, Python',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'Docker, Kubernates, Maven, Jenkins',
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
  hobbies: ['Klettern', 'Gaming', 'Programmieren z.B. mit Raspberry Pi'],
  experiences: [
    {
      type: ExperienceType.work,
      jobTitle: 'Studienbegleitendes Praktikum als Fullstack-Entwickler',
      company: 'adesso SE',
      startDate: '10/2020',
      endDate: '03/2024',
      descriptions: [
        'Ich habe meinen Fokus besonders auf die Frontendentwicklung gesetzt. Hier habe ich durch meine Arbeit in Kundenprojekten meine Kenntnisse in JavaScript und Angular weiter vertiefen können.',
        'Ich war hauptsächlich in Kundenprojekten für Chatbotlösungen beschäftigt. Hier war ich Hauptverantwortlicher für die Anbindung im Frontend der Kundensysteme an den Servicebot. Zudem unterstützte ich die Entwicklung neuer Features.',
      ],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Freiwilliges Praktikum',
      company: 'adesso SE',
      startDate: '08/2020',
      endDate: '10/2020',
      descriptions: [''],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Praktikum',
      company: 'Regionales Rechenzentrum der Universität zu Köln',
      startDate: '06/2019',
      endDate: '08/2019',
      descriptions: [
        '- Erstellung neuer Websitetemplates zur Darstellung aller möglichen Funktionen des Systems',
        '- Einarbeitung in komplexere Java-Programmierumgebungen ',
        '- Programmierung kleinerer Funktionen',
      ],
    },
    // {
    //   type: ExperienceType.work,
    //   jobTitle: 'Praktikum',
    //   company: 'IT.NRW',
    //   startDate: '04/2016',
    //   endDate: '04/2016',
    //   descriptions: [''],
    // },
    {
      type: ExperienceType.education,
      jobTitle: 'Duales Studium -  Business Information Management',
      company: 'Provadis School of International Management and Technology AG',
      startDate: '10/2020',
      endDate: '03/2024',
      descriptions: [''],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Fachhochschulreife',
      company: 'Berufskolleg Platz der Republik für Technik und Medien',
      startDate: '08/2017',
      endDate: '06/2020',
      descriptions: [
        'Abschluss als staatlich geprüfter informationstechnischer Assistent',
      ],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Qualifikationsvermerk',
      company: 'Realschule Jüchen',
      startDate: '08/2011',
      endDate: '07/2017',
      descriptions: [''],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Abschluss der Grundschule',
      company: 'Grundschule Gierath',
      startDate: '08/2007',
      endDate: '06/2011',
      descriptions: [''],
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
    {
      name: 'CCNA Routing and Switching',
      date: '07/2018',
    },
  ],
};

export const myResume_en: Resume = {
  personalData: {
    name: 'Lars Klinkenberg',
    jobTitle: 'Full-Stack-Developer',
  },
  languages: [
    {
      name: 'German',
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'English',
      index: 3,
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
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Angular',
      type: SkillType.framework,
      index: 4,
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
      index: 3,
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
      index: 4,
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
      name: 'C#, C PHP, Python',
      type: SkillType.more,
      index: 0,
      maxIndex: 0,
    },
    {
      name: 'Docker, Kubernates, Maven, Jenkins',
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
  hobbies: ['Climbing', 'Gaming', 'Programming e.g. with Raspberry Pi'],
  experiences: [
    {
      type: ExperienceType.work,
      jobTitle: 'Working student',
      company: 'adesso SE',
      startDate: '04/2024',
      endDate: 'today',
      descriptions: [''],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Study-related internship as Fullstack-Developer (32h/week)',
      company: 'adesso SE',
      startDate: '10/2020',
      endDate: '04/2024',
      descriptions: [
        'I focused particularly on frontend development. Here I was able to deepen my knowledge in JavaScript and Angular through my work in customer projects.',
        'I was mainly involved in customer projects for chatbot solutions. Here I was responsible for the connection in the frontend of the customer systems to the service bot. I also supported the development of new features.',
      ],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Voluntary internship',
      company: 'adesso SE',
      startDate: '08/2020',
      endDate: '10/2020',
      descriptions: [''],
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Internship',
      company: 'Regional Computing Center of the University of Cologne',
      startDate: '06/2019',
      endDate: '08/2019',
      descriptions: [
        'Assisted in the development of templates for a content management system and gained exposure to complex Java programming environments.',
      ],
    },
    // {
    //   type: ExperienceType.work,
    //   jobTitle: 'Internship',
    //   company: 'IT.NRW',
    //   startDate: '04/2016',
    //   endDate: '04/2016',
    //   descriptions: [''],
    // },
    {
      type: ExperienceType.education,
      jobTitle: 'Distance Learning - Business Informatics',
      company: 'Wilhelm büchner hochschule',
      startDate: '04/2024',
      endDate: '10/2025',
      descriptions: [
        "Pursuing a Bachelor's degree in Business Informatics through remote study, developing strong self-discipline and time management skills.",
      ],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Dual Studies - Business Information Management',
      company: 'Provadis School of International Management and Technology AG',
      startDate: '10/2020',
      endDate: '03/2024',
      descriptions: [
        "Discontinued studies shortly before completing the bachelor's degree due to failure to pass the mathematics 2 examination.",
      ],
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Technical College Entrance Qualification',
      company: 'Berufskolleg Platz der Republik für Technik und Medien',
      startDate: '08/2017',
      endDate: '06/2020',
      descriptions: [
        'Graduation as a state-certified "informationstechnischer Assistent"',
      ],
    },
    // {
    //   type: ExperienceType.education,
    //   jobTitle: 'Secondary school graduation',
    //   company: 'Realschule Jüchen',
    //   startDate: '08/2011',
    //   endDate: '07/2017',
    //   descriptions: [''],
    // },
    // {
    //   type: ExperienceType.education,
    //   jobTitle: 'Primary school graduation',
    //   company: 'Grundschule Gierath',
    //   startDate: '08/2007',
    //   endDate: '06/2011',
    //   descriptions: [''],
    // },
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
    {
      name: 'CCNA Routing and Switching',
      date: '07/2018',
    },
  ],
};
