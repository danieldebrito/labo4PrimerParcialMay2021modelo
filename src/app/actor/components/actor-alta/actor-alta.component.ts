import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/class/pais';
import { ActoresService } from '../../actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  @Input() pais: Pais = {};

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}"), this.spacesValidator]),
    apellido: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{1,41}")]),
    sexo: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    foto: new FormControl('', [Validators.required]),
    paisOrigen: new FormControl(this.pais),
  });

    // CUSTOM VALIDATOR
    private spacesValidator(control: AbstractControl): null | object {
      const nombre = <string>control.value;
      const spaces = nombre.includes(' ');
  
      return spaces
        ? { containsSpaces: true }
        : null;
    }
  constructor(
    private actoresSv: ActoresService
  ) { }

  public cargarActor(){
    this.actoresSv.addItem(this.formulario.getRawValue());
  }

  ngOnInit(): void {
  }

}
