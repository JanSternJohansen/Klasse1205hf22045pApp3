
import { EventData, NavigatedData, Observable, Page, PropertyChangeData } from '@nativescript/core'

import { HomeViewModel } from './home-view-model'

export function onNavigatingTo(args: NavigatedData) 
{
  const page = <Page>args.object
  var vm: HomeViewModel = new HomeViewModel();
  page.bindingContext = vm;

  vm.on(Observable.propertyChangeEvent, 
    (propertyChange: PropertyChangeData) => 
  {
    console.log("Name: " + propertyChange.propertyName);
    console.log("Old: " + propertyChange.oldValue);
    console.log("New: " + propertyChange.value);

    if(propertyChange.propertyName === "fromHere")
    {
      
    }
  })



}
