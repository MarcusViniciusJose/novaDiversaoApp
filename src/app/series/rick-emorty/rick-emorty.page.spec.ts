import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RickEmortyPage } from './rick-emorty.page';

describe('RickEmortyPage', () => {
  let component: RickEmortyPage;
  let fixture: ComponentFixture<RickEmortyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickEmortyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RickEmortyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
