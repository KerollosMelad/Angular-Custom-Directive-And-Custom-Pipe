import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-aa1',
  templateUrl: './aa1.component.html',
  styleUrls: ['./aa1.component.css']
})
export class Aa1Component implements OnInit, OnDestroy {

  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.user = {id : 5, name: 'assed'};
   }

  ngOnInit() {

    // this.user = {
    //   id: this.route.snapshot.params.id,
    //   name: this.route.snapshot.params.id
    // };


    this.paramsSubscription = this.route.params           // hint 7 we subsc. 3lashan lw 7sl change f l routing w nta f
                                                          // nfs l component msh hed5ol tani 3la  onInt
    .subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
