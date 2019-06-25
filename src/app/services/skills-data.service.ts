import { Injectable } from '@angular/core';

@Injectable()
export class SkillsDataService {

  constructor() { }

  skills:{name:string,details:string}[]=[{name:'Name',details:'Details'}];
  skillId:number=0;

  onSetSkillDetails(skills){
    this.skills=skills;
  }
  onAddSkillDetails(){
    this.skills.push({
      name:'Name',details:'Details'
    })
  }
  onRemoveSkillDetails(){
    this.skills.pop();
  }

  onSetSkillId(id){
    this.skillId=id;
  }

}
