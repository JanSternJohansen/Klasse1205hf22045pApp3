
import { Color, EventData, Frame, Label, NavigatedData, Page, TextField } from '@nativescript/core'
import { MyData } from '~/MyData';

var page: Page;
var lblFromSecond: Label;
var txtWriteToSecond: TextField;

var myData: MyData;

export function onNavigatingTo(args: NavigatedData) 
{
  page = <Page>args.object;
  lblFromSecond = page.getViewById("lblFromSecond");
  txtWriteToSecond = page.getViewById("txtWriteToSecond");

  if(!args.isBackNavigation) 
  {
     myData = new MyData();
  } 
  else
  {
       lblFromSecond.text = myData.backward;
  }  
}

export function onNavigateToSecond(args: EventData)
{
   myData.forward = txtWriteToSecond.text;

   var navigationOptions =
   {
     moduleName: "second/second-page",
     context:
     {
       datadata: myData,
       param1: "Hej fra Jan"
     }
   }
   Frame.topmost().navigate(navigationOptions); 
}
