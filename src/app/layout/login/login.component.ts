import { Component } from '@angular/core';
import {Diaria } from 'src/app/shared/modelo/diaria';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    hide = true;

    usuario: Diaria;

    constructor() {
        this.usuario = new Diaria();
    }

    check() {
        if (this.usuario.dataDia == '' || this.usuario.emocao == '') {
            
        }
    }

}
