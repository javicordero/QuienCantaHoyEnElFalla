import { Agrupacion } from 'src/app/models/agrupacion.model'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-agrupacion-card',
  templateUrl: './agrupacion-card.component.html',
  styleUrls: ['./agrupacion-card.component.scss']
})
export class AgrupacionCardComponent implements OnInit {
  @Input() agrupacion!: Agrupacion
  constructor() {}

  ngOnInit(): void {}
}
