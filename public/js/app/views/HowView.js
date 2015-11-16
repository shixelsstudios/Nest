define(['jquery', 'hbs!templates/how', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            events: {
            },
            initialize: function(options) {
            },
            onRender: function () {
                nest.api.core.cleanView(this, '.how-menu'); // gets view ready to be rendered      
            }
        });
    });