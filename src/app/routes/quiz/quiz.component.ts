import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EmitterService } from '../../core/event/emitter.service';
import { Quiz } from '../../core/dto/quiz';
import { FieldBase } from '../../core/dto/fields/field-base';
import { QuizService } from '../../core/quiz/quiz.service';
import { Department } from '../../core/dto/department';
import { FieldControlService } from '../../core/quiz/field-control.service';




@Component( {
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {

    @Input() fields: FieldBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    quizList: Array<any>;
    department: Department;
    selectedQuiz: Quiz;

    constructor( private quizService: QuizService, private fcs: FieldControlService ) { }

    ngOnInit() {
        this.form = this.fcs.toFormGroup( this.fields );
        EmitterService.get( "quizes" ).subscribe(( department ) => {
            this.department = department;
            this.getQuizes( department.id );
        });
    }

    onSubmit() {
        //this.payLoad = JSON.stringify(this.form.value);
        console.log( JSON.stringify( this.form.value ) );
    }



    getQuizes( depId: number ) {
        this.quizService.getQuizes( depId ).
            subscribe(( quizes ) => {
                this.quizList = quizes;
                if ( this.quizList !== null && this.quizList.length > 0 ) {
                    this.selectedQuiz = this.quizList[0];
                    this.getForms( this.selectedQuiz.id );
                }
                else {
                    this.quizList = [];
                    this.selectedQuiz = null;
                    this.fields = [];
                }
            });
    }

    getForms( quizId: number ) {
        this.quizService.getFields( quizId ).subscribe(( fields ) => {
            this.fields = fields;
            this.form = this.fcs.toFormGroup( this.fields );
        });

    }



}
