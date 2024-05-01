const { Builder, By, Key, until } = require('selenium-webdriver');

(async function clickSignIn() {
    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();
  
    try {
      // Navigate to your web page
      await driver.get('http://localhost:3000'); // Adjust the URL to your site
  
      // Click the 'Browse Trending' button
      await driver.findElement(By.css('a[href="/sign-in"]')).click();
  
      // Wait for the navigation to complete
      await driver.wait(until.urlContains('/sign-in'));
  
      // Get the current URL
      const url = await driver.getCurrentUrl();
      console.log('New Page URL:', url);
  
      // Perform any assertions here
      if (url.includes('/sign-inc')) {
        console.log('Test passed: Navigated to sign in page.');
      } else {
        console.error('Test failed: Did not navigate to the sign in page.');
      }
    } finally {
      // Close the browser
      await driver.quit();
    }
  })();