import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChEmailComponent, ChEmailModule } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
    {
        path: '',
        component: ChEmailComponent,
        data: { title: 'Email módosítás' },
    }
];

@NgModule({
    imports: [
        CommonModule,
        ChEmailModule,
        RouterModule.forChild(routes)
    ],
})
export class LazyCHEmailModule { }
