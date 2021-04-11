import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {


    // this.retornaObs().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs: ' + valor),
    //   (err) => console.warn('Error: '+ err),
    //   () => console.info('Completed')
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(){
     this.intervalSubs.unsubscribe();
  }

  retornaObs(){
    let i = -1;
    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(()=>{
        i++;
        observer.next(i);

        if(i == 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i == 2){
          observer.error('I llegó al valor 2');
        }
      }, 1000);
    });
    return obs$;
  }

  retornaIntervalo(): Observable<number>{
    const interval$ = interval(1000).pipe(
      map(
        valor => valor + 1
      ),
      filter(
        valor => valor % 2 == 0
      ),
      take(10)
    );
    return interval$;
  }


}
