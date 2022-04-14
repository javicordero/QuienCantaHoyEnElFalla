import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ModalidadComponent } from './modalidad/modalidad.component'
import { FooterComponent } from './card-footer/card-footer.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AgrupacionCardComponent } from './agrupacion-card/agrupacion-card.component'

@NgModule({
  declarations: [AgrupacionCardComponent, FooterComponent, ModalidadComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AgrupacionCardComponent]
})
export class AgrupacionModule {}
