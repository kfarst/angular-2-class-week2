## Week 2

### Uses

* Angular 2.0.0-rc2
* Angular Router 3.0.0-alpha.7

### How to run the app

* Go to [http://developer.rottentomatoes.com/](http://developer.rottentomatoes.com/) and sign up to get your own API key
* [`master` only] Add the API key to the `API_KEY` variable in `src/values.js`
* [all other branches] Add the API key to the `API_KEY()` function in `src/service/app_settings.ts`
* Run `npm install` to install dependencies
* Run `npm start` to start the server on *http://localhost:8000*

### Branches

* `master` - Initial Angular 1.5 app with *ngComponentRouter* and *ngResource*
* `upgrade-setup` - Setup Angular 1 and Angular 2 running in tandem
* `providers` - Refactor Angular 1 services into Angular 2 providers
* `pipes` - Refactor Angular 1 filters into Angular 2 pipes
* `components` - Refactor Angular 1 directives into Angular 2 components
