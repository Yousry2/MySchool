import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Quiz } from '../dto/quiz';
import { School } from '../dto/school';
import { Department } from '../dto/department';
import { Observable } from 'rxjs/Rx';
import { Quizes } from '../mock/mock-quizes'
import { DEPARTMENTS } from '../mock/mock-departments'
import { SCHOOLS } from '../mock/mock-schools';
import { FIELDS } from '../mock/mock-fields';
import { QuizService } from './quiz.service';
import { FieldBase } from '../dto/fields/field-base';
import { FieldText } from '../dto/fields/field-text';
import { FieldDropdown } from '../dto/fields/field-dropdown';

@Injectable()
export class MockQuizService extends QuizService {

    constructor() { super(); }


    getQuizes( depId ): Observable<Quiz[]> {
        return this.getDummyQuizes().map(( quizes ) => {
            var newQuizes: Array<Quiz> = [];
            for ( var i = 0; i < quizes.length; i++ ) {
                if ( quizes[i].depId == depId ) {
                    newQuizes.push( quizes[i] );
                }
            }
            return newQuizes;
        })
    }


    getDummyQuizes(): Observable<Quiz[]> {
        return Observable.of( Quizes ).delay( 1000 );
    }

    getSchools(): Observable<School[]> {
        return Observable.of( SCHOOLS ).delay( 1000 );
    }

    getDepartments( schoolId: number ): Observable<Department[]> {
        return this.getDummyDepartments().map(( departments ) => {
            var newDepartments: Array<Department> = [];
            for ( var i = 0; i < departments.length; i++ ) {
                if ( departments[i].schoolId == schoolId ) {
                    newDepartments.push( departments[i] );
                }
            }
            return newDepartments;
        })  
    }
    
    getDummyDepartments(): Observable<Department[]> {
        return Observable.of( DEPARTMENTS ).delay( 1000 );
    }


    getFields( quizId: number ): Observable<FieldBase<any>[]> {
        return this.getDummyFields().map(( fields ) => {
            var newfields: Array<FieldBase<any>> = [];
            for ( var i = 0; i < fields.length; i++ ) {
                if ( fields[i].quizId == quizId ) {
                    newfields.push( fields[i] );
                }
            }
            return newfields;
        })
    }

    getDummyFields(): Observable<FieldBase<any>[]> {
        return Observable.of( FIELDS.sort(( a, b ) => a.order - b.order ) ).delay( 1000 );
    }










    handleError( error: any ) {
        console.error( 'An error occurred', error );
        return Promise.reject( error.message || error );
    }

}