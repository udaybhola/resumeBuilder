import { Component, OnInit } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { ExperienceDataService } from '../../services/experience-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  templateId:number;
   options: Object;
   experiences:{designation:string,company:string,duration:string,details:string}[];
   id:number;
   froalaId:number=0; 

  constructor(
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private experienceDataService:ExperienceDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.experiences=this.experienceDataService.experiences;
    this.id=this.experienceDataService.experienceId;
  }

  onAddDetails(){
    this.experienceDataService.onAddExperienceDetails();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(){
    if(this.id>=1){
      this.experienceDataService.onRemoveExperienceDetails();
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
  this.experienceDataService.onSetExperienceDetails(this.experiences);
  this.experienceDataService.onSetExperienceId(this.id)
}

}
