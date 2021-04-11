import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
      if(true){
        resolve('Hola mundo');
      } else {
        reject('Algo salió mal');
      }
    });

    promesa.then((resp) => {
      console.log(resp);
    }).catch(err => console.error('Error: ' + err));

    console.log('Fin del Init');
    this.getUsuarios().then(usuarios => console.log(usuarios));
  }

  // getUsuarios(){

  //   fetch('https://reqres.in/api/users')
  //   .then((resp) => {
  //     if(resp.ok){
  //       resp.json().then((resp) => {
  //         console.log(resp);
  //       })
  //     }
  //   })
  // }


  getUsuarios(){
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users').then(resp => resp.json())
      .then(body => resolve(body.data))
      .catch(err => console.error(err));
    });
  }
}
