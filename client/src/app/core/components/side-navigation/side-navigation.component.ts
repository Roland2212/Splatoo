import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { NavigationItem } from '@core/interfaces/navigation.interface';
import { NAVIGATION_ITEMS } from '@core/routes/routes';
import { CoreSideNavigationService } from '@core/services/side-navigation.service';
import { SharedSubscriptionDirective } from '@shared/directives/subscription.directive';

@Component({
    selector: 'app-core-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrl: './side-navigation.component.scss',
})
export class CoreSideNavigationComponent extends SharedSubscriptionDirective implements AfterViewInit {
    @ViewChild('drawer') public sideNavigationRef!: MatSidenav;
    @Input() backdrop: boolean = true;
    @Input() mode: MatDrawerMode = 'over';

    navigationItems: NavigationItem[] = NAVIGATION_ITEMS;

    constructor(private sideNavigationService: CoreSideNavigationService) {
        super();
    }

    ngAfterViewInit(): void {
        this.sideNavigationService.setSideNavigation(this.sideNavigationRef);
    }
}
