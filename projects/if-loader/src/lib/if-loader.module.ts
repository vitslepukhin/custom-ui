import { ModuleWithProviders, NgModule } from '@angular/core';
import { IFLoaderConfigModel, IFLOADER_MODULE_CONFIG_TOKEN } from './if-loader.config';
import { IfLoaderDirective } from './if-loader.directive';

@NgModule({
  declarations: [IfLoaderDirective],
  imports: [],
  exports: [IfLoaderDirective],
})
export class IfLoaderModule {
  static forRoot(config: IFLoaderConfigModel): ModuleWithProviders<IfLoaderModule> {
    return {
      ngModule: IfLoaderModule,
      providers: [
        {
          provide: IFLOADER_MODULE_CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
