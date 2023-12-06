import {Injectable} from '@angular/core';
import {Diaria} from '../modelo/diaria';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DiariaService {

  colecaoDiarias: AngularFirestoreCollection<Diaria>;
  NOME_COLECAO = 'diarias';

  constructor(private afs: AngularFirestore) {
    this.colecaoDiarias = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Diaria[]> {
    return this.colecaoDiarias.valueChanges({idField: 'id'});
  }

  inserir(diaria: Diaria): Observable<object> {
    delete diaria.id;
    return from(this.colecaoDiarias.add(Object.assign({}, diaria)))
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoDiarias.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Diaria> {
    return this.colecaoDiarias.doc(id).get().pipe(
      map(document => {
        const data = document.data() as Diaria;
        return { ...data, id };
      })
    );
  }
  

  atualizar(diaria: Diaria): Observable<void> {
    const id = diaria.id;
    delete diaria.id;
    return from(this.colecaoDiarias.doc(id).update(Object.assign({}, diaria)))
  }
}
