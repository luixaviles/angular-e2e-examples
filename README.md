Angular & E2E test examples
---------------------------

Repository with runnable examples that uses Grunt as tasks runner and Protractor as E2E test framework for Angular app.

The project allows to add code in a fast way into client side using generators, as defined in generator-angular-fullstack page.

For more information
 
 - [read angular-fullstack generators](https://github.com/DaftMonk/generator-angular-fullstack#generators)
 - [read Grunt docs](https://github.com/gruntjs/grunt-docs/blob/master/Getting-started.md)
 - [read Protractor docs](https://github.com/angular/protractor/tree/master/docs/getting-started.md)
 - [Read Protractor FAQ](https://github.com/angular/protractor/blob/master/docs/faq.md)
 - See the [supported browsers](https://github.com/angular/protractor/tree/master/docs/browser-setup.md)
 - [See Protractor API](https://github.com/angular/protractor/blob/master/docs/api.md)
 

To run sample tests
-------------------

Install grunt with.

    npm install -g grunt

Install protractor with.

    npm install -g protractor

Download source code from repository with.

    git clone https://github.com/luixaviles/angular-e2e-examples.git
    
Change directory to angular-e2e-examples project with.

    cd angular-e2e-examples

Install dependences with.

    npm install
    
Download web-drivers with.

    npm run update-webdriver
    
Run End-to-End (e2e) tests with.

    grunt protractor

Contributing
------------

Please feel free to fork the repository and implement a new example for End-to-End testing and send a pull request after that.

License
-------

MIT
