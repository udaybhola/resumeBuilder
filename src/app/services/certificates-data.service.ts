import { Injectable } from '@angular/core';

@Injectable()
export class CertificatesDataService {

  constructor() { }

  certificates:string[]=['Certificate'];
  certificateId:number=0;

  onSetCertificates(certificates){
    this.certificates=certificates;
  }

  onAddCertificates(){
    this.certificates.push('Certificate');
  }

  onRemoveCertificates(){
    this.certificates.pop();
  }

  onSetCertificatesId(id){
    this.certificateId=id;
  }

}
