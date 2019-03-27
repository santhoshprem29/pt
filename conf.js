var jasmineReporters = require('jasmine-reporters');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// conf.js
// An example configuration file
exports.config = {
   
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl:'http://juliemr.github.io/protractor-demo/',
    specs: '*.js', //Change it to the Spec which you wish to execute
 
  // Use different reports
  //   onPrepare: function() {
  //     var jasmineReporters = require('jasmine-reporters');
  //     jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
  //         consolidateAll: true,
  //         savePath: 'testresults',
  //         filePrefix: 'xmloutput'
  //     }));
  // }
    onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   }
  };

  
  
  

  

 
