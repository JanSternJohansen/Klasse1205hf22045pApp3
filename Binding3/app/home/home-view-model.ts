import { EventData, Observable } from '@nativescript/core'

export class HomeViewModel extends Observable 
{
  constructor() {
    super()
  }

  private _toHere: string;

  public get toHere(): string {
    return this._toHere;
  }
  public set toHere(value: string) {
    this._toHere = value;
    this.notifyPropertyChange("toHere", value)
  }

  private _fromHere : string;

  public get fromHere() : string {
    return this._fromHere;
  }
  public set fromHere(v : string) {
    this._fromHere = v;
  }

  public onTap(args: EventData)
  {
    this.toHere = this.fromHere;
  }
}
