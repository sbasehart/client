import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order';
import { ItemComponent } from './item/item';
import { LocationComponent } from './location/location';
@NgModule({
	declarations: [OrderComponent,
    ItemComponent,
    LocationComponent],
	imports: [],
	exports: [OrderComponent,
    ItemComponent,
    LocationComponent]
})
export class ComponentsModule {}
