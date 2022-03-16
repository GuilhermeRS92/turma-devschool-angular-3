import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsListComponent } from './collaborators-list/collaborators-list.component';
import { CollaboratorsCardComponent } from './collaborators-card/collaborators-card.component';



@NgModule({
  declarations: [
    CollaboratorsListComponent,
    CollaboratorsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollaboratorsListComponent,
    CollaboratorsCardComponent
  ]
})
export class CollaboratorsModule { }
