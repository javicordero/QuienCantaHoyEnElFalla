import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.scss'],
})
export class ModalidadComponent implements OnInit {
  @Input() modalidad!: string;
  iconoModalidad!: string;
  iconoModalidadAlt!: string;
  bgClass!: string;

  constructor() {}

  ngOnInit(): void {
    this.loadImage();
    this.loadColor();
  }

  loadImage(): void {
    if (this.modalidad === 'comparsa') {
      this.iconoModalidad = 'assets/img/guitarra.png';
      this.iconoModalidadAlt = 'guitarra';
    }
    if (this.modalidad === 'coro') {
      this.iconoModalidad = 'assets/img/bandurria.png';
      this.iconoModalidadAlt = 'bandurria';
    }
    if (this.modalidad === 'chirigota') {
      this.iconoModalidad = 'assets/img/bombo.png';
      this.iconoModalidadAlt = 'bombo';
    }
    if (this.modalidad === 'cuarteto') {
      this.iconoModalidad = 'assets/img/claves.png';
      this.iconoModalidadAlt = 'claves';
    }
  }

  loadColor(): void {
    if (this.modalidad === 'comparsa') {
      this.bgClass = 'bg-red';
    }
    if (this.modalidad === 'coro') {
      this.bgClass = 'bg-brown';
    }
    if (this.modalidad === 'chirigota') {
      this.bgClass = 'bg-blue';
    }
    if (this.modalidad === 'cuarteto') {
      this.bgClass = 'bg-green';
    }
  }
}
