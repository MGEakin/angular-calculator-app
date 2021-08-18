import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-calculator-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-calculator-app');
  });

  it(`press 1 key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('1')
    expect(app.mainDisplayText).toEqual('1');
  });

  it(`press 11 key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('1')
    app.pressKey('1')
    expect(app.mainDisplayText).toEqual('11');
  });

  it(`press 1+ key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('1')
    app.pressKey('+')
    expect(app.mainDisplayText).toEqual('1+');
    expect(app.operatorSet).toEqual(true);
    expect(app.operand1).toEqual(1);
    expect(app.operator).toEqual('+');
  });

  it(`press 11+22 key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('1')
    app.pressKey('1')
    app.pressKey('+')
    app.pressKey('2')
    app.pressKey('2')
    expect(app.mainDisplayText).toEqual('11+22');
    expect(app.operatorSet).toEqual(true);
    expect(app.operand1).toEqual(11);
    expect(app.operator).toEqual('+');
  });

  it(`press 1+2=3 key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('2')
    app.pressKey('+')
    app.pressKey('1')
    app.getAnswer()
    // expect(app.operand1).toEqual(11);
    expect(app.calculationString).toEqual('2+1'); //Error: Expected '' to equal '11+22'.
    expect(app.operand2).toEqual(1); //Error: Expected 0 to equal 22.
    expect(app.operator).toEqual('+');
    expect(app.operatorSet).toEqual(true);
    expect(app.subDisplayText).toEqual('2+1'); //Error: Expected '' to equal '11+22'.
    expect(app.mainDisplayText).toEqual('3'); //Expected '11+22=' to equal '33'.
    expect(app.answered).toEqual(true); //Error: Expected 0 to equal 22.
  });

  it(`press 33-22=11 key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('3')
    app.pressKey('3')
    app.pressKey('-')
    app.pressKey('2')
    app.pressKey('2')
    app.getAnswer()
    expect(app.operatorSet).toEqual(true);
    expect(app.operand1).toEqual(33);
    expect(app.operator).toEqual('-');
    expect(app.calculationString).toEqual('33-22');
    expect(app.operand2).toEqual(22);
    expect(app.subDisplayText).toEqual('33-22');
    expect(app.mainDisplayText).toEqual('11');
  });

  it(`press 11x2=22 key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('1')
    app.pressKey('1')
    app.pressKey('x')
    app.pressKey('2')
    app.getAnswer()
    expect(app.operatorSet).toEqual(true);
    expect(app.operand1).toEqual(11);
    expect(app.operator).toEqual('x');
    expect(app.calculationString).toEqual('11x2');
    expect(app.operand2).toEqual(2);
    expect(app.subDisplayText).toEqual('11x2');
    expect(app.mainDisplayText).toEqual('22');
  });

  it(`press 22/2=11 key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('2')
    app.pressKey('2')
    app.pressKey('/')
    app.pressKey('2')
    app.getAnswer()
    expect(app.operatorSet).toEqual(true);
    expect(app.operand1).toEqual(22);
    expect(app.operator).toEqual('/');
    expect(app.calculationString).toEqual('22/2');
    expect(app.operand2).toEqual(2);
    expect(app.subDisplayText).toEqual('22/2');
    expect(app.mainDisplayText).toEqual('11');
  });

  it(`press All Clear key'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pressKey('2')
    app.pressKey('2')
    app.pressKey('/')
    app.pressKey('2')
    app.getAnswer()
    expect(app.operatorSet).toEqual(true);
    expect(app.operand1).toEqual(22);
    expect(app.operator).toEqual('/');
    expect(app.calculationString).toEqual('22/2');
    expect(app.operand2).toEqual(2);
    expect(app.subDisplayText).toEqual('22/2');
    expect(app.mainDisplayText).toEqual('11');
    app.allClear()
    expect(app.mainDisplayText).toEqual('');
    expect(app.subDisplayText).toEqual('');
    expect(app.operatorSet).toEqual(false);
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-calculator-app');
  // });
});
