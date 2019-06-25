import { Component, OnInit } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { FroalaEditorService } from '../../services/froala-editor.service';
import { CertificatesDataService } from '../../services/certificates-data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  templateId:number;
   options: Object;
   certificates:string[];
   id:number;
   froalaId:number=0; 

  constructor(
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private certificatesService:CertificatesDataService
  ) { }

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.certificates=this.certificatesService.certificates;
    this.id=this.certificatesService.certificateId;
  }

  onAddDetails(){
    this.certificatesService.onAddCertificates();
    this.id++;
    this.froalaId++;
  }

  onRemoveDetails(){
    if(this.id>=1){
      this.certificatesService.onRemoveCertificates();
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
  this.certificatesService.onSetCertificates(this.certificates)
  this.certificatesService.onSetCertificatesId(this.id)
}

}
