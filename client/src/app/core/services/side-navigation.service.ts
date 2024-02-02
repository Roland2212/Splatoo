import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root',
})
export class CoreSideNavigationService {
    private sideNavigation!: MatSidenav;

    setSideNavigation(sideNavigation: MatSidenav): void {
        this.sideNavigation = sideNavigation;
    }

    open(): void {
        void this.sideNavigation.open();
    }

    close(): void {
        void this.sideNavigation.close();
    }

    toggle(): void {
        void this.sideNavigation.toggle();
    }
}
