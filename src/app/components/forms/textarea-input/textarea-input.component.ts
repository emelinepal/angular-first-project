import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-textarea-input',
	templateUrl: './textarea-input.component.html',
	styleUrls: ['./textarea-input.component.scss'],
	host: {'class': 'field'}
})
export class TextAreaInputComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() label: string = '';

	constructor() {}

	ngOnInit(): void {}
}
