import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectOnlyThis(id: number) {
    const checkBox = Array.from(document.getElementsByClassName('check') as HTMLCollectionOf<HTMLInputElement>);

    checkBox.forEach(element => {
      element.checked = false;
    });

    checkBox[id].checked = true;
}

}
