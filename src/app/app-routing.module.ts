import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarwashAboutComponent } from "./carwash-about/carwash-about.component";
import { CarwashProductsComponent } from "./carwash-products/carwash-products.component";


const routes: Routes=[
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: CarwashProductsComponent
    },
    {
        path: 'about',
        component: CarwashAboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }