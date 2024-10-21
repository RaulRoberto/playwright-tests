module.exports = {
  default: {
    require: ["tests/step-definitions/*.js"],
    format: ["progress", "json:reports/cucumber_report.json"],
    publishQuiet: true
  },
};

