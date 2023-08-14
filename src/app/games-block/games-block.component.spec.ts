import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesBlockComponent } from './games-block.component';

describe('GamesBlockComponent', () => {
  let component: GamesBlockComponent;
  let fixture: ComponentFixture<GamesBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesBlockComponent]
    });
    fixture = TestBed.createComponent(GamesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
