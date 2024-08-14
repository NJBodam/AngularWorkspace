import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebproductComponent } from './pages/website/webproduct/webproduct.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'AllProducts',
        pathMatch: 'full'

    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: 'AllProducts',
                component: WebproductComponent
            },
            {
                path: 'products/:id',
                component: CategoryProductsComponent
            },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        // All the components that will be available after login
        children: [
            {   // once user logs in we need to navigate here
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'category',
                component: CategoriesComponent
            }
        ]
    },
    
];
