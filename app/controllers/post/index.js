import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    delete: function(post) {
      post.destroyRecord();
      this.transitionToRoute('posts');
    }
  }
});
