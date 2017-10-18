import { QuizComponent } from './quiz/quiz.component';

export const routes = [

    {
        path: '',
        component: QuizComponent,
    },
    // Not found
    { path: '**', redirectTo: 'posts' }

];

