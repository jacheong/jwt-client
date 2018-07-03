import { Injectable } from '@angular/core';
import { QuestionBase } from '../models/question-base.model';
import { TextboxQuestion } from '../models/question-textbox.model';

@Injectable()
export class LoginQuestionsService {

    getQuestions(): QuestionBase<any>[] {
        let questions: QuestionBase<any>[] = [
            new TextboxQuestion({
                key: 'username',
                label: 'User Name',
                type: 'text',
                required: true,
                order: 1
            }),
            new TextboxQuestion({
                key: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }

}