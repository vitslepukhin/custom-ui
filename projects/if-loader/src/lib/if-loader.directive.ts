import {
  ComponentFactoryResolver,
  Directive,
  Inject,
  Input,
  Optional,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import {
  IFLoaderConfigModel,
  IFLOADER_MODULE_CONFIG_TOKEN,
} from './if-loader.config';

export class IfLoaderContext<T = unknown> {
  public $implicit: T = null;
  public libIfLoader: T = null;
}

@Directive({
  selector: '[libIfLoader]',
})
export class IfLoaderDirective<T> {
  @Input()
  public set libIfLoader(condition: T) {
    this.context.$implicit = this.context.libIfLoader = condition;
    this.updateView();
  }

  @Input()
  set libIfLoaderThen(templateRef: TemplateRef<IfLoaderContext<T>> | null) {
    this.thenTemplateRef = templateRef;
    this.viewRef = null;
    this.updateView();
  }

  @Input()
  public set libIfLoaderFallbackTemplate(
    templateRef: TemplateRef<IfLoaderContext<T>> | null
  ) {
    this.fallbackTemplateRef = templateRef;
    this.updateView();
  }
  private context: IfLoaderContext<T> = new IfLoaderContext<T>();
  private fallbackTemplateRef: TemplateRef<IfLoaderContext<T>> | null = null;
  private thenTemplateRef: TemplateRef<IfLoaderContext<T>> | null = null;
  private viewRef: ViewRef = null;

  constructor(
    @Inject(IFLOADER_MODULE_CONFIG_TOKEN)
    @Optional()
    private readonly ifLoaderConfig: IFLoaderConfigModel,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    templateRef: TemplateRef<IfLoaderContext<T>>
  ) {
    this.thenTemplateRef = templateRef;
  }

  private updateView(): void {
    if (this.context.$implicit) {
      if (!this.viewRef) {
        this.viewContainerRef.clear();
        if (this.thenTemplateRef) {
          this.viewRef = this.viewContainerRef.createEmbeddedView(
            this.thenTemplateRef,
            this.context
          );
        }
      }
    } else {
      this.viewRef = null;
      this.viewContainerRef.clear();
      if (this.fallbackTemplateRef) {
        this.viewContainerRef.createEmbeddedView(this.fallbackTemplateRef);
      } else if (this.ifLoaderConfig?.loaderComponent) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          this.ifLoaderConfig?.loaderComponent
        );
        this.viewContainerRef.createComponent(componentFactory);
      }
    }
  }
}
