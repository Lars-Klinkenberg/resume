import { Component } from '@angular/core';
import { SkillIndexComponent } from './skill-index/skill-index.component';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { CertificateComponent } from './certificate/certificate.component';
import {
  myResume,
  myResume_en,
  ExperienceTypeTranslations,
  SkillTypeTranslations,
  SideHeaderTranslations,
} from './model/resume.data';
import {
  AvailableLanguages,
  ExperienceType,
  ExperienceTypeTranslation,
  SideHeader,
  SideHeaderTranslation,
  SkillOrder,
  SkillType,
  SkillTypeTranslation,
} from './model/resume.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SkillIndexComponent,
    ExperienceComponent,
    CertificateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume';

  resumeData = myResume_en;
  skillOrder = SkillOrder;
  experienceTypes = ExperienceType;
  sideHeader = SideHeader;
  currentLanguage: AvailableLanguages = AvailableLanguages.EN;

  getSkillTypes() {
    return Object.values(SkillOrder);
  }

  getSkillByType(type: SkillType) {
    return this.resumeData.skills.filter((skill) => skill.type === type);
  }

  getExperiencesByType(type: ExperienceType) {
    return this.resumeData.experiences.filter(
      (experience) => experience.type === type
    );
  }

  changeLanguage() {
    if (this.currentLanguage == AvailableLanguages.EN) {
      this.resumeData = myResume;
      this.currentLanguage = AvailableLanguages.GER;
    } else {
      this.resumeData = myResume_en;
      this.currentLanguage = AvailableLanguages.EN;
    }
  }

  getChangeLanguageLabelText() {
    if (this.currentLanguage == AvailableLanguages.EN) {
      return AvailableLanguages.GER;
    } else {
      return AvailableLanguages.EN;
    }
  }

  getExperienceLabelText(type: keyof ExperienceTypeTranslation) {
    return ExperienceTypeTranslations[type][this.currentLanguage];
  }

  getSkillTypeLabelText(type: keyof SkillTypeTranslation) {
    return SkillTypeTranslations[type][this.currentLanguage];
  }

  getSideHeaderLabelText(type: keyof SideHeaderTranslation) {
    return SideHeaderTranslations[type][this.currentLanguage];
  }

  printPage() {
    window.print();
  }
}
