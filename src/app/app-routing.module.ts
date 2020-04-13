import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { ContactComponent } from './misc/contact/contact.component';
import { HelpComponent } from './misc/help/help.component';


const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" }, // always the first route to put
  { path: "home", component: HomeComponent }, // component is a class name
  { path: "about", component: AboutComponent },
  { path: "help", component: HelpComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
