const rivraddon = require('./rivraddon');

test('rivraddon available on window', () => {
  global.rivraddon = expect.any(Object);
});

test('rivraddon.analytics exposes the two functions', () => {
  expect(rivraddon).toMatchObject({
    analytics: {
      enableAnalytics: expect.any(Function),
      trackPbjsEvent: expect.any(Function),
    },
  });
});
