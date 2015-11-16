define(['jquery', 'hbs!templates/nav', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            events: {
                'click .mobile-menu': 'showMobNav',
                'click .mobile-menu-hide': 'hideMobNav'
            },
            initialize: function(options) {
            },
            onRender: function () {
             nest.api.core.cleanView(this); // gets view ready to be rendered    
            },
            showMobNav: function(e) {
                $('.desk-menu').animate({"right": 0});
                $('.mobile-menu').hide();
                $('.mobile-menu-hide').show();
            },
            hideMobNav: function(e) {
                $('.desk-menu').animate({"right": '-80%'});
                $('.mobile-menu').show();
                $('.mobile-menu-hide').hide();
            }
        });
    });