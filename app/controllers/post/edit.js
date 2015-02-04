import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    edit: function() {
      var title = this.get('title');

      var body = this.get('body');

      this.set('title', title);
      this.set('body', body);
      this.get('model').save().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }
});



// import Ember from "ember";
//
// export default Ember.ObjectController.extend({
//   actions: {
//     savePosts: function(post){
//       var title = this.get('title');
//
//       var body = this.get('body');
//
//       // set is setting to memory & save is update in Rails
//       // TransitionToRoute is a redirect in Rails
//       post.set('title', title);
//       post.set('body', body);
//       post.save().then(function(){
//         this.transitionToRoute('posts');
//       }.bind(this));
//       }
//     }
// });

// .bind(this) when you call my function you are fixing the value of this
// When you pass your function to someone else
// Call where you are now down the road. Bind it for a callback then(function)
