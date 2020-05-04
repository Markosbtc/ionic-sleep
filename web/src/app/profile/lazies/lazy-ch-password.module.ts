import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChPasswordComponent, ChPasswordModule } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
    {
        path: '',
        component: ChPasswordComponent,
        data: { title: 'Jelszó módosítás' },
    }
];

@NgModule({
    imports: [
        CommonModule,
        ChPasswordModule,
        RouterModule.forChild(routes)
    ],
})
export class LazyCHPasswordModule { }
