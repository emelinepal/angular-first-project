import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
	host: {'class': 'field'}
})
export class TextInputComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() label: string = '';

	constructor() {}

	ngOnInit(): void {}
}
