import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { PersonalDetailsDataService } from '../services/personal-details-data.service';
import { EducationDetailsDataService } from '../services/education-details-data.service';
import { SkillsDataService } from '../services/skills-data.service';
import { ExperienceDataService } from '../services/experience-data.service';
import { CertificatesDataService } from '../services/certificates-data.service';
import { HobbiesDataService } from '../services/hobbies-data.service';
import { InterestsDataService } from '../services/interests-data.service';
import { LanguagesDataService } from '../services/languages-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  templateId:number;
  templateIdprev:number;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private dataStore:DataStoreService,
    private personalDetailsData:PersonalDetailsDataService,
    private educationDetailsData:EducationDetailsDataService,
    private skillsData:SkillsDataService,
    private experienceData:ExperienceDataService,
    private hobbiesData:HobbiesDataService,
    private interestsData:InterestsDataService,
    private certificatesData:CertificatesDataService,
    private languagesData:LanguagesDataService
  ){}

  ngOnInit(){
    this.templateId=this.dataStore.templateId;
    this.templateIdprev=this.dataStore.templateIdprev;
  }

  onNext(){
    if(this.templateId<4){
    this.templateIdprev=this.templateId;
    this.templateId++;
    }
    else{
      this.templateIdprev=this.templateId;
      this.templateId=1;
    }
  }

  onPrev(){
    if(this.templateIdprev>0){
    this.templateId=this.templateIdprev
    this.templateIdprev--;
  }
    else{
      this.templateIdprev=4;
      this.templateId=this.templateIdprev
      this.templateIdprev--;
    }
  }
  onFirst()
{
  this.router.navigate(['index']);
}  onSuccess(){

    this.dataStore.onSetTemplateId(this.templateId,this.templateIdprev);

    // PERSONAL DETAILS NULLIFY
    this.personalDetailsData.onSetPersonalDetails(
      {
        name:'Name',
        profession:'Profession',
        dob:'Dob',
        phoneNo:'Phone',
        email:'Email',
        address:'Address',
        image:'Image'
        }
    );

    this.personalDetailsData.onSetNewFields(
      []
    );

    this.personalDetailsData.onSetNewFieldsId(0);

    // EDUCATION DETAILS NULLIFY
    this.educationDetailsData.onSetEducationDetails(
      [{schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks',yearOfPassing:'year'}]
    );

    this.educationDetailsData.onSetEducationId(0);

    // SKILL DETAILS NULLIFY
    this.skillsData.onSetSkillDetails(
      [{name:'Name',details:'Details'}]
    );

    this.skillsData.onSetSkillId(0);

    // EXPERIENCE DETAILS NULLIFY
    this.experienceData.onSetExperienceDetails(
      [{designation:'Designation',company:'Company',duration:'Duartion',details:'Details'}]
    );

    this.experienceData.onSetExperienceId(0);

    // HOBBIES DETAILS NULLIFY
    this.hobbiesData.onSetHobbies(
      ['Hobbies']
    );

    this.hobbiesData.onSetHobbiesId(0);

    // INTERESTS DETAILS NULLIFY
    this.interestsData.onSetInterests(
      ['Interest']
    );

    this.interestsData.onSetInterestsId(0);

    // CERTIFICATES DETAILS NULLIFY
    this.certificatesData.onSetCertificates(
      ['Certificate']
    );

    this.certificatesData.onSetCertificatesId(0);

    // LANGUAGES DETAILS NULLIFY
    this.languagesData.onSetLanguages(
      ['Language']
    );

    this.languagesData.onSetLanguagesId(0);


    this.router.navigate(['resumeDetails',this.templateId]);
  }

}
