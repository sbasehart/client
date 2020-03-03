import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order';
import { ItemComponent } from './item/item';
import { LocationComponent } from './location/location';
import { ClientComponent } from './client/client';
import { LocationEditComponent } from './location/location-edit/location-edit';
@NgModule({
	declarations: [OrderComponent,
    ItemComponent,
    LocationComponent,
    ClientComponent,
    LocationEditComponent],
	imports: [],
	exports: [OrderComponent,
    ItemComponent,
    LocationComponent,
    ClientComponent,
    LocationEditComponent]
})
export class ComponentsModule {}
