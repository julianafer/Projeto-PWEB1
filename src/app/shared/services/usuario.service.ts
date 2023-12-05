import {Injectable} from '@angular/core';
import {Usuario} from '../modelo/usuario';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_USUARIOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  pesquisarPorUser(user: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${user}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }
}