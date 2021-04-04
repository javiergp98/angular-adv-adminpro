import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme  = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const currentTheme = this.linkTheme.getAttribute('href');
    /**
     * En vez de estar declarando todo el rato los LINKS,
     * se podría pasárselo desde el accountSettings por parámetros en la función
     */
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach((elemento) => {
      elemento.classList.remove('working');
      const btnTheme = elemento.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      if(currentTheme === btnThemeUrl){
        elemento.classList.add('working');
      }
  });
  }
}
