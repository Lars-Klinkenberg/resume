import { Component } from '@angular/core';
import { SkillIndexComponent } from './components/skill-index/skill-index.component';
import { myResume, myResume_en } from './model/resume.data';
import { CommonModule } from '@angular/common';
import { SkillOrder } from './model/resume.model';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificateComponent } from './components/certificate/certificate.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    SkillIndexComponent,
    ExperienceComponent,
    CertificateComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  resumeData = myResume;
  skillOrder = SkillOrder;

  getSkillTypes() {
    return Object.values(SkillOrder);
  }

  getSkillByType(type: string) {
    return this.resumeData.skills.filter(
      (skill) => skill.type?.toString() === type
    );
  }

  getExperiencesByType(type: string) {
    return this.resumeData.experiences.filter(
      (experience) => experience.type.toString() === type
    );
  }
}
