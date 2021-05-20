# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Installing the Front-End

* I have developed this under following versions(Node, NPM, Angular)
	* Angular CLI: 10.0.5
	* Node: 12.14.1
	* NPM: 6.13.4 

* Here we have very straight forward thing to do

* You just need to install this with "npm install" command

* Then you can run the front-end using "ng serve --open" command
	* To work with fron-end first you need to install and run the back-end
	* Anyway if you just want to see it is with only data retreiving related operations you can use dummy back-end data(sample json responses) to see that
		* For this what you need to do is go to the "/home/vidumini/Activities/Projects/Angular-Test-01/my-app/src/app/services/api.service.ts" file and change the "type" variable as "type = 1".
		* Here value "0" indicate to interact with real backend that we have installed and run earlier and value "1" indicate to work with dummy backend data(sample json responses)


Possible Issues and Solutions

Issue -

shows filter related issue

Solution -

Recompile the app while running it(give save command for a file and it will recompile the app)
