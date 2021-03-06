import { NgModule } from '@angular/core';

import { OrderComponent } from './order/order';
import { ItemComponent } from './item/item';
import { LocationComponent } from './location/location';
import { ClientComponent } from './client/client';
import { LocationEditComponent } from './location/location-edit/location-edit';
import { ClientEditComponent } from './client/client-edit/client-edit';
import { ItemEditComponent } from './item/item-edit/item-edit';
import { OrderEditComponent } from './order/order-edit/order-edit';
import { LocationDetailsComponent } from './location/location-details/location-details';
import { ItemDetailsComponent } from './item/item-details/item-details';
import { OrderDetailsComponent } from './order/order-details/order-details';
import { AuthComponent } from './auth/auth';
import { IonicModule } from 'ionic-angular';


@NgModule({
	declarations: [
        OrderComponent,
        ItemComponent,
        LocationComponent,
        ClientComponent,
        LocationEditComponent,
        ClientEditComponent,
        ItemEditComponent,
        OrderEditComponent,
        LocationDetailsComponent,
        ItemDetailsComponent,
        OrderDetailsComponent,
        AuthComponent
    ],
	imports: [
        IonicModule
    ],
	exports: [
        OrderComponent,
        ItemComponent,
        LocationComponent,
        ClientComponent,
        LocationEditComponent,
        ClientEditComponent,
        ItemEditComponent,
        OrderEditComponent,
        LocationDetailsComponent,
        ItemDetailsComponent,
        OrderDetailsComponent,
        AuthComponent
    ]
})
export class ComponentsModule {}
