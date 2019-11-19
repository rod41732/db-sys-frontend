import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchInfoPage } from './branch-info-page.component';

describe('CreateBranchDialogComponent', () => {
  let component: BranchInfoPage;
  let fixture: ComponentFixture<BranchInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchInfoPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
