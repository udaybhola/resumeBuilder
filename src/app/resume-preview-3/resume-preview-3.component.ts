import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataStoreService } from '../services/data-store.service';
import { PersonalDetailsDataService } from '../services/personal-details-data.service';
import { EducationDetailsDataService } from '../services/education-details-data.service';
import { SkillsDataService } from '../services/skills-data.service';
import { ExperienceDataService } from '../services/experience-data.service';
import { HobbiesDataService } from '../services/hobbies-data.service';
import { InterestsDataService } from '../services/interests-data.service';
import { CertificatesDataService } from '../services/certificates-data.service';
import { LanguagesDataService } from '../services/languages-data.service';
import { DownloadService } from '../services/download.service';

@Component({
  selector: 'app-resume-preview-3',
  templateUrl: './resume-preview-3.component.html',
  styleUrls: ['./resume-preview-3.component.css']
})
export class ResumePreview3Component implements OnInit {

  links:{activateHobbies,activateInterests,activateCertificates,activateLanguages,activateSummary}
  personalDetails:{name,profession,dob,phoneNo,email,address};
  newFields:{fieldName:string,fieldInfo:string}[];
  educationDetails:{schoolName:string,Qualification:string,Marks:string}[];
  skills:{name:string,details:string}[];
  experiences:{designation:string,company:string,duration:string,details:string}[];
  hobbies:string[];
  interests:string[];
  certificates:string[];
  languages:string[];
  
  constructor(
    private route:Router,
    private dataStore:DataStoreService,
    private personalDetailsData:PersonalDetailsDataService,
    private educationDetailsData:EducationDetailsDataService,
    private skillsData:SkillsDataService,
    private experienceData:ExperienceDataService,
    private hobbiesData:HobbiesDataService,
    private interestsData:InterestsDataService,
    private certificatesData:CertificatesDataService,
    private languagesData:LanguagesDataService,
    private downloadData:DownloadService
  ) { }

  ngOnInit() {
    this.links=this.dataStore.links;
    this.personalDetails=this.personalDetailsData.personalDetails;
    this.newFields=this.personalDetailsData.newFields;
    this.educationDetails=this.educationDetailsData.educationDetails;
    this.skills=this.skillsData.skills;
    this.experiences=this.experienceData.experiences;
    this.hobbies=this.hobbiesData.hobbies;
    this.interests=this.interestsData.interests;
    this.certificates=this.certificatesData.certificates;
    this.languages=this.languagesData.languages;
  }
  
  downloadPDF(){
    this.downloadData.downloadPDF();
  }

  onBackPage(){
    this.route.navigate(['resumeDetails','4']);
  }

}
