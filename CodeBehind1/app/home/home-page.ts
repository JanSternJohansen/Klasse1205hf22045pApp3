
import { Button, EventData, Label, NavigatedData, Page, TextField } from '@nativescript/core'

var page: Page;
var btnOK: Button;
var lblMessage: Label;
var txtWrite: TextField;

export function onNavigatingTo(args: NavigatedData) 
{
  page = <Page>args.object;
  btnOK = <Button>page.getViewById("btnOk");
  lblMessage = <Label>page.getViewById("lblMessage");
  txtWrite = <TextField>page.getViewById("txtWrite");

  // btnOK.addEventListener("tap", function(args: EventData)
  // {
  //   lblMessage.text = txtWrite.text;
  // });

  //btnOK.on("tap", function...)  
}

export function onTap(args: EventData)
{
  var btn: Button = <Button>args.object;
  if(btn.id === "btnOk")
  {
    console.log("Der blev trykket på OK");
  }
  lblMessage.text = txtWrite.text +  btn.text + " trykket ";
}
