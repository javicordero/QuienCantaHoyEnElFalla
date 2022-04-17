import { AgrupacionModule } from './agrupacion/agrupacion.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CalendarioComponent } from './calendario/calendario.component'
import { DiaComponent } from './dia/dia.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [AppComponent, CalendarioComponent, DiaComponent],
  imports: [BrowserModule, FontAwesomeModule, AgrupacionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
