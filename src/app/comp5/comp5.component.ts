import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {

  detailsForm: FormGroup;
  @ViewChild('fform') detaiksFormDirective;

  constructor(private fb: FormBuilder,
              private dataService: DataService) { 
    this.createForm();
  }

  createForm(){
    this.detailsForm = this.fb.group({
      message: ''
    })

    this.detailsForm.valueChanges.subscribe(data => this.dataService.onValueChange(data.message));
  }

  // onValueChanges(data: any){
  //   console.log(data.message);
  // }

  ngOnInit(): void {
  }

}
