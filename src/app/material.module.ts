import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatGridListModule,
  MatListModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDialogModule,
  MatSelectModule,
  MatSliderModule,

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatDatepickerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatPaginatorModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule {}