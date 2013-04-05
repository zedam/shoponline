define(['backbone', 'text!/templates/item_template.html'],
    function(Backbone, projectListTemplate) {

    var ItemView = Backbone.View.extend({
        tagName: "li",
        className: "view",

        render: function() {
            var compiledTemplate = _.template( projectListTemplate, this.model.toJSON() );

            this.$el.html(compiledTemplate);
            return this;
        }
    });
    return ItemView;
});
