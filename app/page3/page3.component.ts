import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonthlyIncome, NameId } from './page3.model';
import { DataService } from '../data.service';

@Component({
	selector: 'app-page3',
	templateUrl: './page3.component.html',
	styleUrls: ['./page3.component.css']
})
export class Page3Component {

	model: MonthlyIncome;
	submitted: boolean = false;
	elicheck: FormGroup;
	nameId: NameId[] = [];

	constructor(public fb: FormBuilder, public data: DataService){
		this.model = new MonthlyIncome();
		this.nameId = [
			new NameId(1,"abc"),
			new NameId(2,"xyz")];
		this.createForm();
	}

	getNameId(): NameId[]{
		return this.nameId;
	}

	selectedId: string;

	getSelected(nameId: NameId){
		return nameId.name == this.selectedId;
	}

	createForm(){
		this.elicheck = this.fb.group({
			net_salary: ["", Validators.required],
			total_emi: ["", Validators.required]
		});
		this.data.getIncome().subscribe(data1 => this.model = data1);
	}

	eligibilityCheck(event){
		this.submitted = true;
		this.updateModel();
	}

	updateModel(){
		this.model.net_salary = this.elicheck.value.net_salary;
		this.model.total_emi = this.elicheck.value.total_emi;
		this.model.amt_eligible = this.model.net_salary - this.model.total_emi;
		this.data.updateModel(this.model);
	}



}
