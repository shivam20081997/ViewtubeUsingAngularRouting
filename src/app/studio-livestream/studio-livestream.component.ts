import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent {
  livestreamForm=new FormGroup({
    livestreamTitle:new FormControl(''),
    event:new FormGroup({
      startDate:new FormControl(''),
      startTime:new FormControl(''),
      endDate:new FormControl(''),
      endTime:new FormControl(''),
      details:new FormControl('')

    })
  
  });
  Times: any = ['08:00', '10:00', '12:00', '14:00', '16:00']

  constructor(private build: FormBuilder) { 
    this.livestreamForm = this.build.group({
    livestreamTitle: ['', Validators.maxLength(100)],
    
    event: this.build.group({
      startDate: [''],
      startTime: [''],
      endDate: [''],
      endTime: [''],
      details:['']
    }),
    guest: this.build.array([
      this.build.control('')
    ])
  });
}

  get guests() {
    return this.livestreamForm.get('guest') as FormArray;
  }

  get startTimes() {
    return this.livestreamForm.get('startTime');
  }

  startTime:any;

  changestartTime(e:any) {
    this.startTime.setValue(e.target.value, {
      onlySelf:true
    })
  }

endTime:any;
  changeEndTime(e:any) {
    this.endTime.setValue(e.target.value, {
      onlySelf:true
    })
  }


  addGuest() {
    this.guests.push(this.build.control(''));
  }



  onSubmit() {
    console.log(this.livestreamForm.value);
  }
  


}