var HtmlReporter = require('protractor-beautiful-reporter');
var jasmineReporters = require('jasmine-reporters');

// Run some shared setup once before all of the specs in the describe are run
beforeAll(function() {
  console.log("\nIn beforeAll::Gets executed before all the specs");

});


// Run some shared setup before each of the specs in the describe in which it is called.
beforeEach(function() {
  console.log("\nIn beforeEach:: Launch baseurl:"+browser.baseUrl)
  browser.get(browser.baseUrl);
});

// DESCRIBE - Create a group of specs (often called a suite).
// Calls to describe can be nested within other calls to compose your suite as a tree.
describe('sample test', function() {
  //Specs are defined by calling the global Jasmine function it
  // spec contains one or more expectations that test the state of the code
  //An expectation in Jasmine is an assertion that is either true or false.
    it('launch  demo website', function() {
      debugger
      browser.getTitle().then(function(text){console.log(text)});
      expect(browser.getTitle()).toContain('Super Calculator');
      element(by.model('first')).sendKeys("10");
      element(by.model('second')).sendKeys("10");
      element(by.id('gobutton')).click();
      browser.sleep(5000);

    });
  });

//Run some shared teardown after each of the specs in the describe in which it is called.
afterEach(function() {
  console.log("\nIn afterEach::This will get called after each of the spec");
});

// Run some shared teardown once after all of the specs in the describe are run.
afterAll(function() {
  console.log("\nIn afterAll::Gets executed after all the specs.Note: Be careful, sharing the teardown from a afterAll makes it easy to accidentally leak state between your specs so that they erroneously pass or fail.");

});


// var myReporter = {
//   jasmineStarted: function(suiteInfo) {
//     console.log('Running suite with '
//       + suiteInfo.totalSpecsDefined);
//   },
// }

	


