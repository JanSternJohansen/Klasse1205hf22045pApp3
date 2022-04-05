
import { EventData, NavigatedData, Observable, Page } from '@nativescript/core'

export function onNavigatingTo(args: NavigatedData) 
{
  const page = <Page>args.object

  var obs: Observable = new Observable();
  page.bindingContext = obs;

  obs.set("fromHere", "Her kommer det fra");
  obs.set("toHere", "Her skrives det til");

  obs.set("onTap", function(args: EventData)
  {
    obs.set("toHere",  obs.get("fromHere"));
  }); 
}
