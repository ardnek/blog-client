import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    // model would be better called data
    // return [{body: 'foo'}, {body: 'bar'} {body: 'baz'}]

    return this.store.find('post');
  }
});
