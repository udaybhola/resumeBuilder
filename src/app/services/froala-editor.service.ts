import { Injectable } from '@angular/core';

@Injectable()
export class FroalaEditorService {

  constructor() { }

  public options: Object = { 
    placeholderText: 'Edit Me',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic','underline','fontSize','fontFamily'],
    height:30,
    width:'auto',
    toolbarInline: true,
    toolbarVisibleWithoutSelection: true,
    overflow:false,
    fontSizeDefaultSelection:'10',
    // toolbarSticky: false
  
  }
 

    public imageOptions: Object = { 
    placeholderText: 'My Photo',
    charCounterCount: false,
    toolbarButtons: ['insertImage'],
    height:110,
    width:140,
    toolbarSticky: false,
    imageInsertButtons: ['imageBack', '|', 'imageUpload']
  }

}
