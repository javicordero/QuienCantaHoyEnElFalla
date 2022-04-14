import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AgrupacionCardComponent } from './agrupacion-card.component'

describe('AgrupacionCardComponent', () => {
  let component: AgrupacionCardComponent
  let fixture: ComponentFixture<AgrupacionCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgrupacionCardComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupacionCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
