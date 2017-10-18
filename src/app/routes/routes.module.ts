import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';


import {QuizComponent} from './quiz/quiz.component';


import { routes } from './routes';

@NgModule({
    imports: [      
              SharedModule,
              RouterModule.forRoot(routes)
    ],
    declarations: [QuizComponent],
    exports: [
              QuizComponent
    ]
})
export class RoutesModule {
   
}
