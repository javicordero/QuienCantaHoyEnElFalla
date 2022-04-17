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
  constructor() {}

  ngOnInit(): void {}
}
