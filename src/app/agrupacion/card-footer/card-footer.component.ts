import { Agrupacion } from './../../models/agrupacion.model'
import { Component, Input, OnInit } from '@angular/core'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() agrupacion!: Agrupacion
  faYotube = faYoutube
  bgClass!: string
  constructor() {}

  ngOnInit(): void {
    this.loadBgColor()
  }

  loadBgColor(): void {
    if (this.agrupacion.modalidad === 'comparsa') {
      this.bgClass = 'bg-red'
    }
    if (this.agrupacion.modalidad === 'coro') {
      this.bgClass = 'bg-brown'
    }
    if (this.agrupacion.modalidad === 'chirigota') {
      this.bgClass = 'bg-blue'
    }
    if (this.agrupacion.modalidad === 'cuarteto') {
      this.bgClass = 'bg-green'
    }
  }
}
