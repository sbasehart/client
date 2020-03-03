import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order';
import { ItemComponent } from './item/item';
import { LocationComponent } from './location/location';
import { ClientComponent } from './client/client';
@NgModule({
	declarations: [OrderComponent,
    ItemComponent,
    LocationComponent,
    ClientComponent],
	imports: [],
	exports: [OrderComponent,
    ItemComponent,
    LocationComponent,
    ClientComponent]
})
export class ComponentsModule {}
