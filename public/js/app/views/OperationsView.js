define(['jquery', 'hbs!templates/operations', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            events: {
                'click .thumbnail': 'showFullImage'
            },
            initialize: function(options) {
            },
            onRender: function () {
                nest.api.core.cleanView(this, '.op-menu'); // gets view ready to be rendered      
            },
            showFullImage: function(e) {
                e.preventDefault();
                var currentImg = $('.mainimg').find('img')[0].src;
                var galImg = new Image();
                galImg.src = $(e.currentTarget).find('img')[0].src;
               $('.mainimg').html(galImg);
               $(e.currentTarget).html('<img src="' + currentImg + '">');
                
            }
        });
    });