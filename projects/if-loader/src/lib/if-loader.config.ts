import { InjectionToken, Type } from '@angular/core';

export interface IFLoaderConfigModel {
  loaderComponent: Type<unknown>;
}
export const IFLOADER_MODULE_CONFIG_TOKEN = new InjectionToken<IFLoaderConfigModel>(
    'If loader module config token',
  );
  