module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  report_file: "reports/qunit/TEST-tests.xunit.xml",
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  browser_args: {
    Chrome: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--headless",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--mute-audio",
      "--remote-debugging-port=9222",
      "--window-size=1440,900"
    ]
  }
};
