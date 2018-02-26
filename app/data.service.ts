import { Injectable } from '@angular/core';
import { MonthlyIncome } from './page3/page3.model';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/from";

@Injectable()
export class DataService {
	private mIncome: MonthlyIncome = new MonthlyIncome(60000, 6000);

	constructor(){}

	getIncome(): Observable<MonthlyIncome> {
		return Observable.from([this.mIncome]);
	}

	updateModel(newModel: MonthlyIncome){
		this.mIncome = newModel;
	}
}
