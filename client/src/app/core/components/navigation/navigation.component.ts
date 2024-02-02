import { Component } from '@angular/core';
import { NavigationItem } from '@core/interfaces/navigation.interface';
import { NAVIGATION_ITEMS } from '@core/routes/routes';
// import { MatDialog } from '@angular/material/dialog';
// import { CoreSettingsDialogComponent } from '@core/components/dialogs/settings/settings.component';
// import { SETTINGS_DIALOG_CONFIG } from './navigation.config';
// import { CoreLayoutService } from '@core/services/layout.service';
// import { NavigationItem } from '@core/interfaces/navigation.interface';
// import { NAVIGATION_ITEMS } from '@core/routes/routes';
// import { CoreSideNavigationService } from '@core/services/side-navigation.service';
// import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { AppState } from '@store/reducers/app.reducer';
// import { signOut } from '@store/actions/auth/auth.action';

@Component({
    selector: 'app-core-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class CoreNavigationComponent {
    navigationItems: NavigationItem[] = NAVIGATION_ITEMS;
    // isMobileLayout$: Observable<boolean> = this.layoutService.isMobile$;
    // constructor(
    //     private dialog: MatDialog,
    //     private layoutService: CoreLayoutService,
    //     private sideNavigationService: CoreSideNavigationService,
    //     private store: Store<AppState>,
    // ) {}

    onOpenSettingsDialog(): void {
        // this.dialog.open(CoreSettingsDialogComponent, SETTINGS_DIALOG_CONFIG);
    }

    onSignOut(): void {
        // this.store.dispatch(signOut());
    }
    // onToggleSideNavigation(): void {
    //     this.sideNavigationService.toggle();
    // }
}
