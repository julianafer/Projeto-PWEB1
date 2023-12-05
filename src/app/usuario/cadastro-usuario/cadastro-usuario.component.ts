import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { IMensagem } from 'src/app/shared/modelo/IMensagem';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required, Validators.minLength(4)]);
  hide = true;
  usuarioDeManutencao: Usuario;

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private usuarioService: UsuarioService,
    private mensagemService: IMensagem
  ) {
    this.usuarioDeManutencao = new Usuario();
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um valor';
    }
    return this.email.hasError('email') ? 'Email inválido' : '';
  }

  getErrorMessageSenha() {
    if (this.senha.hasError('required')) {
      return 'Você deve inserir um valor';
    }
    return this.senha.hasError('minlength') ? 'A senha deve ter pelo menos 4 caracteres' : '';
  }

  manter(): void {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!this.usuarioDeManutencao.user || !this.usuarioDeManutencao.email || !this.usuarioDeManutencao.senha) {
      this.mensagemService.erro('Preencha todos os campos obrigatórios.');
      return;
    }
  
    // Verifica se já existe um usuário com o mesmo 'user' no banco de dados
    this.usuarioService.pesquisarPorUser(this.usuarioDeManutencao.user).pipe(
      switchMap(usuarioExistente => {
        if (usuarioExistente) {
          this.mensagemService.erro('Já existe um usuário com esse username.');
          return EMPTY; // Retorna um Observable vazio para interromper a execução
        } else {
          // Continua com a lógica de inserção
          return this.usuarioService.inserir(this.usuarioDeManutencao);
        }
      })
    ).subscribe(
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
