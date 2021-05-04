import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/class/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {


  ItemsCollection: AngularFirestoreCollection<Pelicula>;
  ItemDoc: AngularFirestoreDocument<Pelicula>;
  Items: Observable<Pelicula[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('Peliculas');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Pelicula;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Pelicula) {
    this.ItemDoc = this.db.doc(`Peliculas/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Pelicula) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Pelicula) {
    this.ItemDoc = this.db.doc(`Peliculas/${Item.id}`);
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
