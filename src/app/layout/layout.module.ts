import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
              SharedModule
    ],
    declarations: [
        SideNavComponent,
        ToolbarComponent
    ],
    exports: [
        SideNavComponent,
        ToolbarComponent
    ]
})
export class LayoutModule { }
