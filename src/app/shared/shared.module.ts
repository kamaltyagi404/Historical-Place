import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
// import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Ng5SliderModule } from 'ng5-slider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    // IvyCarouselModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    Ng5SliderModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    IvyCarouselModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    Ng5SliderModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTabsModule,
    IvyCarouselModule
  ]
})
export class SharedModule { }
