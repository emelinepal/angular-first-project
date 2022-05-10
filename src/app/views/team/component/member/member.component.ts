import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-member',
	templateUrl: './member.component.html',
	styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
	@Input() id: number = 0;
	@Input() firstname: string = '';
	@Input() lastname: string = '';
	@Input() framework: string = '';

	@Output() removeUser : EventEmitter<number> = new EventEmitter<number>()

	constructor () {
	}

	ngOnInit (): void {
	}

	get frameworkImg () {
		return `../../../../assets/img/${this.framework.trim().toLowerCase()}.png`
	}

	emitRemoveUser () {
		this.removeUser.emit(this.id)
	}
}
