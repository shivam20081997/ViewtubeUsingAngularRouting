import { Component} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent{

  studioUploadForm=new FormGroup({
    videourl:new FormControl(''),
    event:new FormGroup({
      videotitle:new FormControl(''),
      videodescription:new FormControl(''),
      videoduration:new FormControl(''),
      kids:new FormControl(''),
      notkids:new FormControl(''),
      egthn:new FormControl(''),
      notegthn:new FormControl(''),
      videoCategory:new FormControl('')

    })
  
  });

  categories:any=['Music','Sports','Gaming','Comedy']

  constructor(private fb: FormBuilder) { 
   this.studioUploadForm = this.fb.group({
    videourl: ['', Validators.maxLength(100)],
    
    event: this.fb.group({
      videotitle:[''],
      videodescription:[''],
      videoduration:[''],
      kids:[''],
      notkids:[''],
      egthn:[''],
      notegthn:[''],
      videoCategory:['']
    })
    });
  }

  videoSelect:any;

  changeVideoCategory(e:any) {
    this.videoSelect.setValue(e.target.value, {
      onlySelf:true
    })
  }

  onSubmit() {
    console.log(this.studioUploadForm.value);
  }
  
}

