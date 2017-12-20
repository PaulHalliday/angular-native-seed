import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { HomeComponent } from './components/home/home.component';
import { SHARED_MODULES } from './home.common';
import { CalendarModule } from '@progress/kendo-angular-dateinputs'
@NgModule({
    imports: [
        CalendarModule,
        ...SHARED_MODULES
    ],
    declarations: [HomeComponent]
})
export class HomeModule {

    constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
        if (parentModule) {
            throw new Error('HomeModule already loaded; Import in root module only.');
        }
    }
}
