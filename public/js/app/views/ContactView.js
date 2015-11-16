define(['jquery', 'hbs!templates/contact', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            events: {
                'click .contact-send': 'sendMessage'
            },
            initialize: function(options) {
            },
            onRender: function () {
                nest.api.core.cleanView(this, '.contact-menu'); // gets view ready to be rendered      
            },
            sendMessage: function(e) {
                e.preventDefault();

                $('.contact-wait').show();
                setTimeout(function(){  
                    $('.contact-wait').hide();
                    $('.contact-error').html('Message Successfully sent').show();
                }, 1000);
            }
        });
    });