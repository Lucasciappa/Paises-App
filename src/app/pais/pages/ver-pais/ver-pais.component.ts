import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";


import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisSevice:PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisSevice.getPaisPorId( id )),
      tap(console.log)
    )
      .subscribe(pais => {
        this.pais = pais
        
      })


      
    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log(id);

    //     this.paisSevice.getPaisPorId(id)
    //       .subscribe(pais => {
    //         console.log(pais);           
    //       });
    //   });

  }

}
