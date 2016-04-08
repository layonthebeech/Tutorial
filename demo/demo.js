var demo = {
  variables: {
    demo_chosen: 'demo_one'
  },
  models: {
    demo_option: function (demo_chosen) {
      return [demo_chosen];
    }
  },
  elements: {
    demo_select: {
      type: 'util/bind_select',
      args: {
        value: 'demo_chosen',
        choices: constant({
          'demo_one': 'Demo One',
          'demo_two': 'Demo Two',
          'demo_three': 'Demo Three',
          'demo_four': 'Demo Four'
        }),
        className: constant('styled-select'),
        defaultChoice: constant([])
      }
    }
  },
  dynamicElementLists: {
    demo: {
      model: 'demo_option',
      options: {
        demo_one: {
          type: 'demo/one'
        },
        demo_two: {
          type: 'demo/two'
        },
        demo_three: {
          type: 'demo/three'
        },
        demo_four: {
          type: 'demo/four'
        }
      },
      identity: '',
      map: function (item) { return item; }
    }
  }
};
