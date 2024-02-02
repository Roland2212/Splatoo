import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { LayoutTypes } from '@core/interfaces/layout.interface';
import { SharedSubscriptionDirective } from '@shared/directives/subscription.directive';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoreLayoutService extends SharedSubscriptionDirective {
    private _currentLayoutType$: BehaviorSubject<LayoutTypes> = new BehaviorSubject<LayoutTypes>(LayoutTypes.DESKTOP);

    layoutBreakpoints: Map<string, LayoutTypes> = new Map([
        [Breakpoints.XSmall, LayoutTypes.MOBILE],
        [Breakpoints.Small, LayoutTypes.TABLET],
        [Breakpoints.Medium, LayoutTypes.TABLET],
        [Breakpoints.Large, LayoutTypes.DESKTOP],
        [Breakpoints.XLarge, LayoutTypes.DESKTOP],
    ]);

    get layoutType$(): Observable<LayoutTypes> {
        return this._currentLayoutType$.asObservable();
    }

    get isMobile$(): Observable<boolean> {
        return this._currentLayoutType$.pipe(
            map(layoutType => {
                return layoutType === LayoutTypes.MOBILE;
            }),
        );
    }

    get isTablet$(): Observable<boolean> {
        return this._currentLayoutType$.pipe(
            map(layoutType => {
                return layoutType === LayoutTypes.TABLET;
            }),
        );
    }

    get isDesktop$(): Observable<boolean> {
        return this._currentLayoutType$.pipe(
            map(layoutType => {
                return layoutType === LayoutTypes.DESKTOP;
            }),
        );
    }

    constructor(private breakpointObserver: BreakpointObserver) {
        super();
        this._calculateLayoutType();
    }

    private _calculateLayoutType(): void {
        this.subscription(
            this.breakpointObserver
                .observe(Array.from(this.layoutBreakpoints.keys()))
                .pipe(
                    tap(res => {
                        for (const query of Object.keys(res.breakpoints)) {
                            if (res.breakpoints[query]) {
                                this._currentLayoutType$.next(this.layoutBreakpoints.get(query)!);
                            }
                        }
                    }),
                )
                .subscribe(),
        );
    }

    setLayoutBreakpoints(breakpoints: Map<string, LayoutTypes>): void {
        this.layoutBreakpoints = breakpoints;
    }
}
