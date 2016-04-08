var demoOne = {
  variables: {
    click_count: 0
  },
  elements: {
    blue_button: {
      type: 'style_guide/blue_button',
      args: {
        text: constant('Click'),
        className: constant('left')
      }
    }
  },
  events: {
    'click blue_button': function (click_count) {
      click_count.set(click_count.get() + 1);
    }
  }
};
