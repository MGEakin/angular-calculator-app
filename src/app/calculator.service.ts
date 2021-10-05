import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Calculator } from './calculator';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class CalculatorService {

  private calculatorsUrl = 'api/calculators';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET calculator from the server */
  getCalculators(): Observable<Calculator[]> {
    return this.http.get<Calculator[]>(this.calculatorsUrl)
      .pipe(
        tap(_ => this.log('fetched calculators')),
        catchError(this.handleError<Calculator[]>('getCalculators', []))
      );
  }

  // /** GET calculator by id. Return `undefined` when id not found */
  // getCalculatorNo404<Data>(id: number): Observable<Calculator> {
  //   const url = `${this.calculatorUrl}/?id=${id}`;
  //   return this.http.get<Calculator[]>(url)
  //     .pipe(
  //       map(calculators => calculators[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} calculator id=${id}`);
  //       }),
  //       catchError(this.handleError<Calculator>(`getCalculator id=${id}`))
  //     );
  // }

  /** GET calculator by id. Will 404 if id not found */
  getCalculator(id: number): Observable<Calculator> {
    const url = `${this.calculatorsUrl}/${id}`;
    return this.http.get<Calculator>(url).pipe(
      tap(_ => this.log(`fetched calculator id=${id}`)),
      catchError(this.handleError<Calculator>(`getCalculator id=${id}`))
    );
  }

  // /* GET calculators whose name contains search term */
  // searchCalculators(term: string): Observable<Calculator[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty calculator array.
  //     return of([]);
  //   }
  //   return this.http.get<Calculator[]>(`${this.calculatorUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //       this.log(`found calculators matching "${term}"`) :
  //       this.log(`no calculators matching "${term}"`)),
  //     catchError(this.handleError<Calculator[]>('searchCalculators', []))
  //   );
  // }
  //
  // //////// Save methods //////////
  //
  // /** POST: add a new calculator to the server */
  // addCalculator(calculator: Calculator): Observable<Calculator> {
  //   return this.http.post<Calculator>(this.calculatorUrl, calculator, this.httpOptions).pipe(
  //     tap((newCalculator: Calculator) => this.log(`added calculator w/ id=${newCalculator.id}`)),
  //     catchError(this.handleError<Calculator>('addCalculator'))
  //   );
  // }
  //
  // /** DELETE: delete the calculator from the server */
  // deleteCalculator(id: number): Observable<Calculator> {
  //   const url = `${this.calculatorUrl}/${id}`;
  //
  //   return this.http.delete<Calculator>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted calculator id=${id}`)),
  //     catchError(this.handleError<Calculator>('deleteCalculator'))
  //   );
  // }
  //
  // /** PUT: update the calculator on the server */
  // updateCalculator(calculator: Calculator): Observable<any> {
  //   return this.http.put(this.calculatorUrl, calculator, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated calculator id=${calculator.id}`)),
  //     catchError(this.handleError<any>('updateCalculator'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for calculator consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CalculatorService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CalculatorService: ${message}`);
  }
}
