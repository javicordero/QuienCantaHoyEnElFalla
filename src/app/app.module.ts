import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CalendarioComponent } from './calendario/calendario.component'
import { DiaComponent } from './calendario/dia/dia.component'
import { ActuacionComponent } from './calendario/dia/actuacion/actuacion.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ModalidadComponent } from './calendario/dia/actuacion/modalidad/modalidad.component';
import { FooterComponent } from './calendario/dia/actuacion/footer/footer.component'

@NgModule({
  declarations: [AppComponent, CalendarioComponent, DiaComponent, ActuacionComponent, ModalidadComponent, FooterComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
