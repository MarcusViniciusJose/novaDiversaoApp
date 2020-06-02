import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { F1917Page } from './f1917.page';

describe('F1917Page', () => {
  let component: F1917Page;
  let fixture: ComponentFixture<F1917Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1917Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(F1917Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
