define(["backbone", "marionette"], function(Backbone) {
  "use strict";
  var Bus = {
    commands : new Backbone.Wreqr.Commands(),
    reqres : new Backbone.Wreqr.RequestResponse(),
    vent : new Backbone.Wreqr.EventAggregator()
  };

  return Bus;
});