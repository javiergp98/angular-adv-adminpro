import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
  styles: [
  ]
})
export class BreadcumbsComponent implements OnDestroy{

  public title = 'Blank';
  public tituloSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.tituloSubs$ = this.getArgsRoute().subscribe(
      (data) => {
        data = (data != null)?data: null;

        if(data != null){
          this.title = `AdminPro - ${data.title}`;
        }
      }
     );
   }

   ngOnDestroy(){
     this.tituloSubs$.unsubscribe();
   }

   getArgsRoute(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild == null),
      map((event: ActivationEnd) => event.snapshot.data));
   }

}
