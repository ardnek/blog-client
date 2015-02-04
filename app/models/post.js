// always define data in model

import DS from "ember-data";

export default DS.Model.extend({
  body: DS.attr('string'),
  title: DS.attr('string')
});
