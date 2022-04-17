import { Agrupacion } from '../models/agrupacion.model'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.scss']
})
export class DiaComponent implements OnInit {
  dia = {
    dia: 31,
    mes: 'Enero'
  }

  agrupaciones: Agrupacion[] = [
    {
      nombre: 'La Brigada',
      modalidad: 'comparsa',
      letra: 'Tino Tovar',
      musica: 'Tino Tovar',
      direccion: 'Ágel Subiela',
      nombreAnterior: '¡Oh capitán, my capitán!',
      yearAnterior: 2020,
      enlaceYoutubeAnterior: 'https://www.youtube.com/watch?v=QN-DOx-nW3U'
    },
    {
      nombre: 'Tierra y libertad',
      modalidad: 'coro',
      letra: 'Miguel Ángel García Argüez',
      musica: 'Miguel Ángel García Argüez',
      direccion: 'Francisco José Oliveros',
      nombreAnterior: 'Gloria Bendita',
      yearAnterior: 2020,
      enlaceYoutubeAnterior: 'https://www.youtube.com/watch?v=WhXQPWIb3gc&ab_channel=carnavalsur'
    },
    {
      nombre: 'Los Caraduras de Cai',
      modalidad: 'chirigota',
      letra: 'Juan Manuel Braza "Sheriff"',
      musica: 'Juan Manuel Braza "Sheriff"',
      direccion: 'José Sibón Pereira',
      nombreAnterior: 'Los Niños de la pretróleo',
      yearAnterior: 2020,
      enlaceYoutubeAnterior: 'https://www.youtube.com/watch?v=E6W6-a0Ruew&ab_channel=ONDAC%C3%81DIZCARNAVAL'
    },
    {
      nombre: 'Los ultraortodoxos de los callejones Cardoso',
      modalidad: 'cuarteto',
      letra: 'Miguel Ángel Moreno Gómez y José Manuel Cossi González',
      musica: 'Miguel Ángel Moreno Gómez y José Manuel Cossi González',
      direccion: 'Ángel Gago',
      nombreAnterior: 'Vida y obra de Juan Carlos I bajo D',
      yearAnterior: 2020,
      enlaceYoutubeAnterior:
        'https://www.youtube.com/watch?v=HyNHVj2P824&feature=emb_title&ab_channel=ONDAC%C3%81DIZCARNAVAL'
    }
  ]
  constructor() {}

  ngOnInit(): void {}

  goToPreviousDay() {
    this.dia.dia--
  }

  goToNextDay() {
    this.dia.dia++
  }
}
