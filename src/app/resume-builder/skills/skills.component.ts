import { Component, OnInit } from '@angular/core';

import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { SkillsDataService } from '../../services/skills-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

   templateId:number;
   options: Object;
   skills:{name:string,details:string}[];
   id:number;
   froalaId:number=0; 

  constructor(
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private skillsService:SkillsDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.skills=this.skillsService.skills;
    this.id=this.skillsService.skillId;
  }

  onAddDetails(){
    this.skillsService.onAddSkillDetails();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(){
    if(this.id>=1){
      this.skillsService.onRemoveSkillDetails();
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
  this.skillsService.onSetSkillDetails(this.skills)
  this.skillsService.onSetSkillId(this.id)
}

}
