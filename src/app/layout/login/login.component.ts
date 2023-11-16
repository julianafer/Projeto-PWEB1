import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    hide = true;

    usuario: Usuario;

    constructor() {
        this.usuario = new Usuario();
    }

    check() {
        if (this.usuario.user == '' || this.usuario.senha == '') {
            alert('Você deixou algum campo em branco');
        }
    }

}
