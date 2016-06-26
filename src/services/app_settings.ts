import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
  private _resourceType;

  get resourceType(): string {
    return this._resourceType;
  }

  set resourceType(name) {
    this._resourceType = name;
  }

  get API_KEY(): string {
    return 'your key here';
  }
}
