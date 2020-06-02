import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontoCegoPage } from './ponto-cego.page';

describe('PontoCegoPage', () => {
  let component: PontoCegoPage;
  let fixture: ComponentFixture<PontoCegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontoCegoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontoCegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
