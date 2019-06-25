import { Injectable } from '@angular/core';

@Injectable()
export class LanguagesDataService {

  constructor() { }

  languages:string[]=['Language'];
  languageId:number=0;

  onSetLanguages(languages){
    this.languages=languages;
  }

  onAddLanguages(){
    this.languages.push('Language');
  }

  onRemoveLanguages(){
    this.languages.pop();
  }

  onSetLanguagesId(id){
    this.languageId=id;
  }

}
