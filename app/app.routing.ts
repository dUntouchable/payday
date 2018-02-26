import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

export const AppRoutes: any = [
	{ path: "page2", component: Page2Component,
		children: [{path: '', component: Page3Component},
			   {path: 'page4', component: Page4Component}]},
	{ path: "", component: Page1Component }
];

export const AppComponents: any = [
	Page1Component,
	Page2Component,
	Page3Component,
	Page4Component
];
