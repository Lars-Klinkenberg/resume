export enum AvailableLanguages {
  GER = 'DE',
  EN = 'EN',
}

export interface Resume {
  personalData: PersonalData;
  languages: Skill[];
  skills: Skill[];
  hobbies: string[];
  experiences: Experience[];
  certifications: Certificates[];
}

export interface PersonalData {
  name: string;
  jobTitle: string;
}

export interface Skill {
  name: string;
  type?: SkillType;
  index: number;
  maxIndex: number;
}

export interface Experience {
  type: ExperienceType;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  technologys? : string[]
}

export enum ExperienceType {
  work = 1,
  project = 2,
  education = 3,
}

export interface Certificates {
  name: string;
  date: string;
}

export enum SkillType {
  programming,
  framework,
  other,
  more,
}

export const SkillOrder = {
  1: SkillType.programming,
  2: SkillType.framework,
  3: SkillType.other,
  4: SkillType.more,
};

export interface Link {
  name: string;
  url: string;
}

export enum SideHeader {
  languages,
  knowledges,
  hobbys,
  certificates,
}

export interface ExperienceTypeTranslation {
  [key: string]: {
    [lang in AvailableLanguages]: string;
  };
}

export interface SkillTypeTranslation {
  [key: string]: {
    [lang in AvailableLanguages]: string;
  };
}

export interface SideHeaderTranslation {
  [key: string]: {
    [lang in AvailableLanguages]: string;
  };
}
