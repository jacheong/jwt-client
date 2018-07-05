import { Injectable } from '@angular/core';
import { QuestionBase } from '../models/question-base.model';
import { TextboxQuestion } from '../models/question-textbox.model';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactQuestionService {

    getAddQuestions() {
        let questions: QuestionBase<any>[] = [
            new TextboxQuestion({
                key: 'name',
                label: 'Name',
                type: 'text',
                required: true,
                order: 1
            }),
            new TextboxQuestion({
                key: 'address',
                label: 'Address',
                type: 'text',
                required: true,
                order: 2
            }),
            new TextboxQuestion({
                key: 'phone',
                label: 'Phone Number',
                type: 'text',
                required: false,
                order: 1
            }),
        ];

        return questions.sort((a, b) => a.order - b.order);
    }

    getEditQuestions(contact: Contact) {
        let questions: QuestionBase<any>[] = [
            new TextboxQuestion({
                value: contact.name,
                key: 'name',
                label: 'Name',
                type: 'text',
                required: true,
                order: 1
            }),
            new TextboxQuestion({
                value: contact.address,
                key: 'address',
                label: 'Address',
                type: 'text',
                required: true,
                order: 2
            }),
            new TextboxQuestion({
                value: contact.phone,
                key: 'phone',
                label: 'Phone Number',
                type: 'text',
                required: false,
                order: 1
            }),
        ];

        return questions.sort((a, b) => a.order - b.order);
    }

}