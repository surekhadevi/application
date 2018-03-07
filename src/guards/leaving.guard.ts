import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EmployeeFormComponent } from "../app/employee/employee-form.component";
import { Observable } from "rxjs/Observable";
import { Form } from "../app/form";


export class LeavingGuard implements CanDeactivate<Form>{
    canDeactivate(component: Form, currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(component.hasUnsavedChanges()){
            return confirm("Unsaved Changes!! Do you want to leave this page");
        }
           return true;
    }

}