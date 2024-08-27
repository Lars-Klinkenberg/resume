import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Experience } from '../model/resume.model';

@Component({
  selector: 'resume-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experienceData!: Experience;

  getDate() {
    if (!this.experienceData.endDate) return this.experienceData.startDate;
    if (this.experienceData.endDate === this.experienceData.startDate) {
      return this.experienceData.startDate;
    }

    return `${this.experienceData.startDate} - ${this.experienceData.endDate}`;
  }
}
