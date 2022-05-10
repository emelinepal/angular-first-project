import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorComponent } from './views/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldContainerComponent } from './components/field-container/field-container.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		ErrorComponent,
		FieldContainerComponent
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
