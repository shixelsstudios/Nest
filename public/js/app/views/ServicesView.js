define(['jquery', 'hbs!templates/services', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            events: {
                'click .more-info': 'MoreInfo'
            },
            initialize: function(options) {
            },
            onRender: function () {
                nest.api.core.cleanView(this, '.serv-menu'); // gets view ready to be rendered      
            },
            MoreInfo: function(e) {
                e.preventDefault();

                var hash = $(e.currentTarget).data('hash');

                window.location.hash = hash;
            } 
        });
    });