import { Component, ViewChild, OnInit } from '@angular/core';
import { EmitterService } from '../../core/event/emitter.service';
import { QuizService } from '../../core/quiz/quiz.service';
import { School } from '../../core/dto/school';
import { Department } from '../../core/dto/department';

@Component( {
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

    @ViewChild( 'sidenav' ) public sideNav;

    public schools: School[];

    ngOnInit() {
        this.sideNav.mode = "side";
        EmitterService.get( "sidenav" ).subscribe(() => {
            this.sideNav.toggle();
        });
        this.quizService.getSchools().subscribe(( schools ) => {
            this.schools = schools;
        });
    }

    constructor( private quizService: QuizService ) {

    }

    getQuizes( department ) {
        EmitterService.get( "quizes" ).emit( department );
        EmitterService.get( "sidenav" ).emit();
    }


    openDepartment( schoolId: number ) {
        this.quizService.getDepartments( schoolId ).
            subscribe(( departments ) => {
                for ( var i = 0; i < this.schools.length; i++ ) {
                    if ( this.schools[i].id == schoolId ) {
                        this.schools[i].departments = departments;
                    }
                }

            });
    }
}

