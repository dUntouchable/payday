import { Component, OnInit } from '@angular/core';
import { MonthlyIncome } from '../page3/page3.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {

	dumnum: number = 10;

	model: MonthlyIncome = new MonthlyIncome(50000, 5000);

	constructor(public data: DataService) { 
		this.data.getIncome().subscribe(data1 => this.model = data1);
	}

	
}
