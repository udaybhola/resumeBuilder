import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceDataService {

  constructor() { }

  experiences:{designation:string,company:string,duration:string,details:string}[]=[{designation:'Designation',company:'Company',duration:'Duartion',details:'Details'}];
  experienceId:number=0;

  onSetExperienceDetails(experiences){
    this.experiences=experiences;
  }
  onAddExperienceDetails(){
    this.experiences.push(
      {designation:'Designation',company:'Company',duration:'Duartion',details:'Details'}
    )
  }
  onRemoveExperienceDetails(){
    this.experiences.pop();
  }

  onSetExperienceId(id){
    this.experienceId=id;
  }

}
