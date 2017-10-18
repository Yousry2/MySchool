import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Quiz} from '../dto/quiz';
import { School} from '../dto/school';
import { Department} from '../dto/department';
import { Observable} from 'rxjs/Rx';
import { Quizes} from '../mock/mock-quizes'
import { DEPARTMENTS} from '../mock/mock-departments'
import { SCHOOLS} from '../mock/mock-schools';
import { FieldBase} from '../dto/fields/field-base';


@Injectable()
export class  QuizService {
    
    constructor(){}
    
    
    getQuizes( depId : number) : Observable<Quiz[]> {
        return new Observable(Quizes => {
            setTimeout(() => { Quizes;
            }, 1000);
        })
    }
    
    getSchools() : Observable<School[]> {
        return Observable.create((observer) => {
            setTimeout(() => { return SCHOOLS;
            }, 1000);
        })
    }
    
    getDepartments( schoolId : number) : Observable<Department[]> {
        return new Observable(DEPARTMENTS => {
            setTimeout(() => { DEPARTMENTS;
            }, 1000);
        })
    }
    
    getFields(quizId :number): Observable<FieldBase<any>[]>{
        return null;
    }


    
    
    
  
    
    
    public handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    
}