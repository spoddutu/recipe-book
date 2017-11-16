import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	status: string;

	constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

	saveData(){
		this.dataStorageService.saveRecipes().subscribe((response: Response) => {
			console.error(response);
			console.error(response.status == 200);
			if(response.status == 200){
				this.status = "Recipes stored succesfully!";
				setTimeout(() => {
					this.status = "";
				}, 1500);
			}
		})
	}

	fetchData(){
		this.dataStorageService.getRecipes();
	}

	doLogout(){
		this.authService.logout();
	}
}