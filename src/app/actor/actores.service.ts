import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actor } from 'src/app/class/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  ItemsCollection: AngularFirestoreCollection<Actor>;
  ItemDoc: AngularFirestoreDocument<Actor>;
  Items: Observable<Actor[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('actores');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Actor;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Actor) {
    this.ItemDoc = this.db.doc(`actores/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Actor) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Actor) {
    this.ItemDoc = this.db.doc(`actores/${Item.id}`);
    this.ItemDoc.update(Item);
  }

  getfecha() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString();
    const mes = (fechaActual.getMonth() + 1).toString();
    const anio = fechaActual.getFullYear().toString();
    const hora = fechaActual.getHours().toString();
    const minutos = fechaActual.getMinutes().toString();

    return dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos;

    /*this.hora = hora + ':' + minutos + ':' + segundos;
    const ret = this.fecha;
    return ret;*/
  }
}
