import { Component, Input,Output, OnInit,EventEmitter,AfterContentChecked }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements AfterContentChecked {
  @Input() questions: any;
 @Output() formSubmitted = new EventEmitter();
  form: FormGroup = new FormGroup({});
  payLoad = '';
  constructor(private qcs: QuestionControlService) {  }
  ngAfterContentChecked() {
   
    let arqu : QuestionBase<any>[] = [];
    this.questions.subscribe(questions => {
    questions.forEach(function(value,key){
      arqu.push(value);
    });
    this.form = this.qcs.toFormGroup(arqu);
    
  });
    
  }
  onSubmit() {
    this.formSubmitted.emit(this.form.value);
    //this.payLoad = JSON.stringify(this.form.value);
  }
}
