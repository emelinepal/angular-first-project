import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from 'src/app/interfaces/select-option';

@Component({
	selector: 'app-select-input',
	templateUrl: './select-input.component.html',
	styleUrls: ['./select-input.component.scss'],
	host: {'class': 'field'}
})
export class SelectInputComponent implements OnInit {
	@Input() id: string = '';
	@Input() control!: FormControl;
	@Input() label: string = '';
	@Input() options: SelectOption[] = [];

	constructor() {}

	ngOnInit(): void {}
}
