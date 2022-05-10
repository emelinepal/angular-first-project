import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	form: FormGroup = new FormGroup({
		'subject': new FormControl(),
		'email': new FormControl(),
		'message': new FormControl()
	})

	constructor () {
	}

	ngOnInit (): void {
	}

	get formSubject () {
		return this.form.get('subject');
	}
}
