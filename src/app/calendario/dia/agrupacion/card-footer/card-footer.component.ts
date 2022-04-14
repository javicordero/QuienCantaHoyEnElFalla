import { Component, OnInit } from '@angular/core'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class FooterComponent implements OnInit {
  faYotube = faYoutube

  constructor() {}

  ngOnInit(): void {}
}
