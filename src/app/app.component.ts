import { Component } from '@angular/core';
import { SkillIndexComponent } from './skill-index/skill-index.component';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { CertificateComponent } from './certificate/certificate.component';
import { myResume_en } from './model/resume.data';
import { SkillOrder } from './model/resume.model';

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
