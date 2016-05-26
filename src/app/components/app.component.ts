import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component'


@Component({
    selector: 'invoice-app',
    directives: [SidebarComponent],
    template: `
    <div class="container body">
      <div class="main_container">
        <sidebar></sidebar>
      
        <footer>
          <div class="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
          </div>
          <div class="clearfix"></div>
        </footer>

      </div>
    </div>
    `
})
export class AppComponent {

}