## Week 1

### How to run the app

* Go to [http://developer.rottentomatoes.com/](http://developer.rottentomatoes.com/) and sign up to get your own API key
* Add the API key to the `API_KEY` variable in `src/values.js`
* Run `npm install` to install dependencies
* Run `node server.js` to start the server on *http://localhost:8000*

### Branches

* `master` - Initial Angular 1.5 app with *ui-router* and *ngResource*
* `component-router` - App completely refactored using *components* and the *component router*

### Note about component router

* Installing the ngComponentRouter through npm throws an error in the browser console once the app is run and you navigate to the URL. 
However, removing the code causing the error allows the app to work with no issues, so a custom version of the router has been included with the app,
located in `src/support`.
