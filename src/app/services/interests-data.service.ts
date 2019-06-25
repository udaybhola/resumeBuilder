import { Injectable } from '@angular/core';

@Injectable()
export class InterestsDataService {

  constructor() { }

  interests:string[]=['Interest'];
  interestId:number=0;

  onSetInterests(interests){
    this.interests=interests;
  }

  onAddInterests(){
    this.interests.push('Interest');
  }

  onRemoveInterests(){
    this.interests.pop();
  }

  onSetInterestsId(id){
    this.interestId=id;
  }

}
