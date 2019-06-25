import { Component, OnInit, OnDestroy } from '@angular/core';

import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { EducationDetailsDataService } from '../../services/education-details-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit ,OnDestroy{

  constructor(
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private educationDetailsData:EducationDetailsDataService
  ) { }

   templateId:number;
   options:object;
   educationDetails:{schoolName:string,Qualification:string,Marks:string,yearOfPassing:string}[];
   id:number;
   froalaId:number=0;

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.educationDetails=this.educationDetailsData.educationDetails;
    this.id=this.educationDetailsData.educationId;
    }

    onAddDetails(){
      this.educationDetailsData.onAddEducationDetails();
      this.id++;
      this.froalaId++;
    }

    onRemoveDetails(){
      if(this.id>=1){
        this.educationDetailsData.onRemoveEducationDetails();
        this.id--;
      }
      if(this.froalaId>0){
        this.froalaId--;
      }
    }

    onUpdateButton(buttonId){
      this.froalaId=buttonId.id;
    }

  ngOnDestroy(){
    this.educationDetailsData.onSetEducationDetails(this.educationDetails)
    this.educationDetailsData.onSetEducationId(this.id)
  }
}
