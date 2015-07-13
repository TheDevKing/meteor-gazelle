Template.userProfile.helpers({
  hasClasses: function() {
    return this.user && this.user.classes;
  },

  classes: function() {
    return Object.keys(this.user.classes)
      .map(function(className) {
        return {className: className}
      });
  }
});

Template.userProfile.events({
  //add your events here
});

Template.userProfile.onCreated(function() {
});

Template.userProfile.onRendered(function() {
  //add your statement here
});

Template.userProfile.onDestroyed(function() {
  //add your statement here
});

