import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from 'app/models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl({value: question.value || null,disabled: question.disabled}, Validators.required)
                                              : new FormControl({value: question.value || null,disabled: question.disabled});
    });
    return new FormGroup(group);
  }
}
