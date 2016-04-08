var demoTwo = {
  variables: {
    click_count: 0
  },
  models: {
    is_even: function (click_count) {
      return click_count % 2 === 0;
    },
    is_greater_than_five: function (click_count) {
      return click_count > 5;
    },
    count_class: function (is_even, is_greater_than_five) {
      return is_greater_than_five ? 'correct' :
        is_even ? 'almostcorrect' : 'incorrect';
    }
  },
  elements: {
    gif: {
      showWhen: 'click_count',
      type: 'util/img',
      args: {
        src: constant('https://cdn1.lockerdome.com/uploads/ef71758b2d5bc95e0771b34d5ce77c1250269695b0939e739d22d58ebacf5a2c_medium_animated'),
        alt: constant('')
      }
    },
    button: {
      type: 'style_guide/blue_button',
      args: {
        text: constant('Click'),
        className: constant('left')
      }
    }
  },
  events: {
    'click button': function (click_count) {
      click_count.set(click_count.get() + 1);
    }
  }
};
