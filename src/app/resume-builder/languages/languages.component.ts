import { Component, OnInit } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { LanguagesDataService } from '../../services/languages-data.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  templateId:number;
   options: Object;
   languages:string[];
   id:number;
   froalaId:number=0; 

  constructor(
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private languagesService:LanguagesDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.languages=this.languagesService.languages;
    this.id=this.languagesService.languageId;
  }

  onAddDetails(){
    this.languagesService.onAddLanguages();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(){
    if(this.id>=1){
      this.languagesService.onRemoveLanguages();
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
  this.languagesService.onSetLanguages(this.languages)
  this.languagesService.onSetLanguagesId(this.id)
}

}
