import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="navbar bg-white border-bottom px-4 sticky-top" style="height: 60px;">
      <span class="navbar-brand mb-0 h1 fs-5">Pannello di gestione</span>
    </header>
  `,
})
export class HeaderComponent {}