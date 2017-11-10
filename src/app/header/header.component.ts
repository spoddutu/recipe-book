import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Output() menuItemSelected = new EventEmitter<string>();
	
	onSelect(menuItem: string){
		this.menuItemSelected.emit(menuItem);
	}
}