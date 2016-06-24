import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
  private _resourceType;
  static instance: AppSettings;
  static isCreating:Boolean = false;

  constructor() {
    if (!AppSettings.isCreating) {
      throw new Error("You can't call new in App Settings instances!");
    }
  }

  static getInstance() {
    if (AppSettings.instance == null) {
      AppSettings.isCreating = true;
      AppSettings.instance = new AppSettings();
      AppSettings.isCreating = false;
    }

    return AppSettings.instance;
  }

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
