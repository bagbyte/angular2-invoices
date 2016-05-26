import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/components/app.component';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location } from '@angular/router';

bootstrap(AppComponent, [ROUTER_DIRECTIVES]);