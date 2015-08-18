
define(function (require, exports, module){

    var Backbone = require("backbone"),
        projectListTemplate = require("text!/templates/item_template.html");

    var ItemView = Backbone.View.extend({
        tagName: "li",
        className: "view",

        render: function() {
            var compiledTemplate = _.template( projectListTemplate, this.model.toJSON() );

            this.$el.html(compiledTemplate);
            return this;
        }
    });

    module.exports = ItemView;

});
