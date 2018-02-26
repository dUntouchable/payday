export class MonthlyIncome{
	constructor (
		public net_salary?: number,
		public total_emi?: number,
		public amt_eligible?: number){}
}

export class NameId{
	constructor(
		public id?: number,
		public name?: string
	){}
}
