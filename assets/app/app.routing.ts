import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: '/mensagens', pathMatch: 'full'
    },
    {
        path: 'mensagens', component: MessagesComponent
    },
    {
        path: 'autenticacao', component: AuthenticationComponent
    }
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);