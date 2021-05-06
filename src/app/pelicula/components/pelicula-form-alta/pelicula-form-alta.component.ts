import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/class/actor';
import { Pais } from 'src/app/class/pais';
import { PeliculaService } from '../../pelicula.service';

@Component({
  selector: 'app-pelicula-form-alta',
  templateUrl: './pelicula-form-alta.component.html',
  styleUrls: ['./pelicula-form-alta.component.css']
})
export class PeliculaFormAltaComponent implements OnInit {

  @Input() pais: Pais = {};
  public errorPais = false;

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{1,41}")]),
    tipo: new FormControl('', [Validators.required]),
    fechaEstreno: new FormControl('', [Validators.required]),
    cantPublico: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(100), Validators.pattern("^[0-9]*$")]),
    fotoPelicula: new FormControl('/assets/peliculas/killbill.jpg', [Validators.required]),
  });

  constructor(
    private peliculasSv: PeliculaService
  ) { }


  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

  public resetFrom() {
    this.formulario.reset({
      nombre: '',
      apellido: '',
      sexo: '',
      fechaNacimiento: '',
      foto: '',
      terminos: '',
    });
    this.pais = {};
  }

  public cargarActor() {
    if (this.pais.name === undefined) {
      this.formulario.invalid;
      this.errorPais = true;
    } else {
      this.errorPais = false;
      let actor: Actor = this.formulario.getRawValue();
      actor.paisOrigen = this.pais;
      this.peliculasSv.addItem(actor);

      this.resetFrom();
    }
  }

  ngOnInit(): void {
  }

}
