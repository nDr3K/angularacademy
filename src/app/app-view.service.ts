import {Injectable} from "@angular/core";
import {TestConfiguration} from "./models/config.interface";

@Injectable({
    providedIn: 'root'
})
export class AppViewService {
    getConfig = (): TestConfiguration => ({
        title: 'La mia prima applicazione Angular',
        subtitle: 'Ci stiamo divertendo un sacco'
    });
}