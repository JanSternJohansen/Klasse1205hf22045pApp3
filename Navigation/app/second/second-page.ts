import { EventData, Label, NavigatedData, Page, TextField } from "@nativescript/core";
import { MyData } from "~/MyData";

var page: Page;
var data: MyData;

export function onNavigatingTo(args: NavigatedData)
{
    page = <Page>args.object;
    data = <MyData>page.navigationContext.data;
    var lblFromMain: Label = page.getViewById("lblFromMain");
    lblFromMain.text = data.forward;

    var p: string = page.navigationContext.param1;
    console.log(p);  
}

export function onNavigateBack(args: EventData)
{
    var txtWriteToMain: TextField= <TextField>page.getViewById("txtWriteToMain");
    data.backward = txtWriteToMain.text;
    page.frame.goBack();
}
