To run the app, use
npm install (to pull down node modules in case you didn't already have them)

npm start

If I had time to kill I could have written some selenium tests in kotlin/java in a utility project to end to end test the app, the extensive use of html ids makes this easier

 I could have done some nicer error handling leveraging react with some nice red popups and such. The html validations work just as well and are fast, they are just ugly

I could have deployed this with the CallbackApi backend, such that the .war would serve a minified version of this app to anything that hits it.
That while practical is not necesarily the best, since it would couple the UI to the backend. If you want to change one, now you have to deploy both.
Consider also the implications of adding a mobile app, that mobile app only needs to consume the service layer past the load balancer/filter whatever.
It makes sense to separate the SPA UI and the backend in that case.

Probably doesn't work with IE7 :P
