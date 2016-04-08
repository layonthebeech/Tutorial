var demoFour = {
  variables: {
    entry_text: '',
    entries: []
  },
  elements: {
    blue_button: {
      type: 'style_guide/blue_button',
      args: {
        text: constant('Add'),
        className: constant('left')
      }
    },
    textbox: {
      type: 'util/bind_textbox',
      args: {
        value: 'entry_text',
        placeholder: constant('Enter Some Text...'),
        className: constant('')
      }
    }
  },
  dynamicElementLists: {
    // Identity is text it contains, so it will deduplicate entries with the same text.
    entry_display: {
      model: 'entries',
      item: {
        type: 'util/div',
        args: {
          text: 'item',
          className: constant('clear-both')
        }
      }
    }
  },
  events: {
    'click blue_button': function (entries, entry_text) {
      entries.set(entries.get().concat(entry_text.get()));
      entry_text.set('');
    }
  }
};
