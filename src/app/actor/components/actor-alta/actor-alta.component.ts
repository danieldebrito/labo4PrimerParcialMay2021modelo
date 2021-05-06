import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Actor } from 'src/app/class/actor';
import { Pais } from 'src/app/class/pais';
import { ActoresService } from '../../actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  @Input() pais: Pais;
  public errorPais = false;

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}"), this.spacesValidator]),
    apellido: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{1,41}")]),
    sexo: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    foto: new FormControl('/assets/actores/ted.jpg', [Validators.required]),
    // paisOrigen: new FormControl(''),
    terminos: new FormControl('', [Validators.required]),
  });

  constructor(
    private actoresSv: ActoresService
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
      this.actoresSv.addItem(actor);

      this.resetFrom();
    }
  }

  ngOnInit(): void {
  }

}
