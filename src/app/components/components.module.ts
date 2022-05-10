import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './forms/text-input/text-input.component';
import { TextAreaInputComponent } from './forms/textarea-input/textarea-input.component';
import { SelectInputComponent } from './forms/select-input/select-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldContainerComponent } from './forms/field-container/field-container.component';

const components = [
	FieldContainerComponent,
	TextInputComponent,
	TextAreaInputComponent,
	SelectInputComponent,
];

@NgModule({
	declarations: components,
	imports: [CommonModule, ReactiveFormsModule],
	exports: components,
})
export class ComponentsModule {}
