let rivraddon = {};

rivraddon = {
  analytics: {
    enableAnalytics: function () {
      console.log(
        'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
      );
    },
    trackPbjsEvent: function (e) {
      const params = {
        eventType: e.eventType,
      };

      const http = new XMLHttpRequest();
      http.open('POST', 'https://tracker.simplaex-code-challenge.com');
      http.setRequestHeader('Content-type', 'application/json');
      http.send(JSON.stringify(params));
    },
  },
};

module.exports = rivraddon;
