import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export class SharedSubscriptionDirective implements OnDestroy {
    private _subscriptions: Subscription = new Subscription();

    constructor() {}

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    subscription(subscription: Subscription): void {
        this._subscriptions.add(subscription);
    }
}
