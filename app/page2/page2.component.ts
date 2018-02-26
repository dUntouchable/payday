import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
})
export class Page2Component {

	constructor(
		private location: Location){}

	goBack() {
		this.location.back();
	}
}
