 `*libIfLoader` is a structural directive that conditionally includes a template based on the value of
  an expression.
  When the expression evaluates to true, Angular renders the template
  provided in a `then` clause, and when false or null,
  Angular renders the component provided through DI an optional `loaderComponent` or template provided in `fallbackTemplate` clause is specified . The default template for the `fallbackTemplate` clause is blank.

  Based on [Angular *ngIf directive](https://github.com/angular/angular/blob/bdf13fe376b3a99ce28616df64c2fd43953d4175/packages/common/src/directives/ng_if.ts)

# IfLoader

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

## Code scaffolding

Run `ng generate component component-name --project if-loader` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project if-loader`.
> Note: Don't forget to add `--project if-loader` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build if-loader` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build if-loader`, go to the dist folder `cd dist/if-loader` and run `npm publish`.

## Running unit tests

Run `ng test if-loader` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
