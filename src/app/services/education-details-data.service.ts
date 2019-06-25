import { Injectable } from '@angular/core';

@Injectable()
export class EducationDetailsDataService {

  constructor() { }

  educationDetails:{schoolName:string,Qualification:string,Marks:string,yearOfPassing:string}[]=[{schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks',yearOfPassing:'year'}];
  educationId:number=0;

  onSetEducationDetails(educationDetails){
    this.educationDetails=educationDetails;
  }
  onAddEducationDetails(){
    this.educationDetails.push({
      schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks',yearOfPassing:'year'
    })
  }
  onRemoveEducationDetails(){
    this.educationDetails.pop();
  }

  onSetEducationId(id){
    this.educationId=id;
  }

}
