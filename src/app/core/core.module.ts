import { NgModule ,Optional,SkipSelf} from '@angular/core';
import { QuizService } from './quiz/quiz.service';
import { LayoutService } from './layout/layout.service';
import { EmitterService } from './event/emitter.service';
import { FieldControlService } from './quiz/field-control.service';
import { MockQuizService } from './quiz/mock.quiz.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [
       
    ],
    providers: [
                { provide: QuizService, useClass:  MockQuizService},
                LayoutService,EmitterService,FieldControlService    
        
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
