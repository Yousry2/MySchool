import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule,
    MatSidenavModule,MatMenuModule,MatIconModule,
    MatToolbarModule,MatExpansionModule,MatSelectModule,MatInputModule
    ,MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
            MatSidenavModule,MatMenuModule,MatIconModule,
            MatToolbarModule,MatExpansionModule,MatSelectModule,MatInputModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,
            MatSidenavModule,MatMenuModule,MatIconModule,
            MatToolbarModule,MatExpansionModule,MatSelectModule,MatInputModule,MatCardModule]
})
export class CustomMaterialModule { }