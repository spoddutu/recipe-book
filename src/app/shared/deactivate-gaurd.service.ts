import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean 
}

@Injectable()
export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate> {
	canDeactivate(component: CanComponentDeactivate) {
		return component.canDeactivate();
	}
}