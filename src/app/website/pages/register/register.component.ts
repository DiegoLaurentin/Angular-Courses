import { Component, OnInit } from '@angular/core';

import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor() { }


  onExit() {
    const rta = confirm('Estas seguro de que deseas salir de esta pagina?')
    return rta;
  }
}
