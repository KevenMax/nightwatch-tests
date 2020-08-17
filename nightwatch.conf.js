const Services = {}; loadServices();

module.exports = {
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: (Services.chromedriver ? Services.chromedriver.path : '')
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities: {
        browserName: 'chrome',
      }
    }
  }
};

function loadServices() {
  try {
    Services.seleniumServer = require('selenium-server');
  } catch (err) { }

  try {
    Services.chromedriver = require('chromedriver');
  } catch (err) { }

  try {
    Services.geckodriver = require('geckodriver');
  } catch (err) { }
}
