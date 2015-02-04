import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
});

// the adapter points to your Rails server
