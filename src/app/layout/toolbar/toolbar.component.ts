import { Component } from '@angular/core';
import {LayoutService} from '../../core/layout/layout.service';
import { EmitterService } from '../../core/event/emitter.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
 
    
    constructor(private layoutService : LayoutService){
        
    }
    
    toggleSideNav(){
        EmitterService.get("sidenav").emit();
    }    
}
