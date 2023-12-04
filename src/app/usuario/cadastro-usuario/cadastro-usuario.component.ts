import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { IMensagem } from 'src/app/shared/modelo/IMensagem';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CadastroUsuarioComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('',[Validators.required, Validators.minLength(4)]);
  hide = true;
  usuarioDeManutencao: Usuario;


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router,
    private usuarioService: UsuarioService, private mensagemService: IMensagem) {
  this.usuarioDeManutencao = new Usuario();
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Você deve enserir um valor';
    }
    return this.email.hasError('email') ? 'email não válido' : '';
  }

  getErrorMessageSenha() {
    if (this.senha.hasError('required')) {
      return 'Você deve enserir um valor';
    }
    return this.senha.hasError('minLength') ? 'A senha deve ter pelo menos 4 caracteres' : '';
  }

  manter(): void {
    if (!this.usuarioDeManutencao.user || !this.usuarioDeManutencao.email || !this.usuarioDeManutencao.senha) {
      this.mensagemService.erro('Preencha todos os campos obrigatórios.');
      return;
    }
  
    if (this.usuarioService.pesquisarPorUser(this.usuarioDeManutencao.user)) {
      this.mensagemService.erro('Já existe um usuário com esse username.');
      return;
    }
  
    
    this.usuarioService.inserir(this.usuarioDeManutencao).subscribe(
      usuarioInserido => {
        this.mensagemService.sucesso('Usuário cadastrado com sucesso!');
        this.usuarioDeManutencao = new Usuario();
        this.roteador.navigate(['']);
      },
      error => {
        this.mensagemService.erro('Houve um erro ao cadastrar o usuário.');
      }
    );
  }
  
}

