let rivraddon = {};

rivraddon = {
  analytics: {
    enableAnalytics: function () {
      console.log(
        'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
      );
    },
    trackPbjsEvent: function (e) {
      var params = {
        eventType: e.eventType,
      };

      var http = new XMLHttpRequest();
      http.open('POST', 'https://tracker.simplaex-code-challenge.com');
      http.setRequestHeader('Content-type', 'application/json');
      http.send(JSON.stringify(params));
    },
  },
};

export default rivraddon;
