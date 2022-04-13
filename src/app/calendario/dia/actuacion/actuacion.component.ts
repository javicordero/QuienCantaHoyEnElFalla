import { Component, Input, OnInit } from '@angular/core'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-actuacion',
  templateUrl: './actuacion.component.html',
  styleUrls: ['./actuacion.component.scss']
})
export class ActuacionComponent implements OnInit {
  @Input() bgColor: string = ''
  faGithubSquare = faYoutube
  constructor() {}

  ngOnInit(): void {}
}
