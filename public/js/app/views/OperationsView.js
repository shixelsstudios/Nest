define(['jquery', 'hbs!templates/operations', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            events: {
                'click .subfeature': 'showFullImage'
            },
            initialize: function(options) {
            },
            onRender: function () {
                nest.api.core.cleanView(this, '.op-menu'); // gets view ready to be rendered      
            },
            showFullImage: function(e) {
                e.preventDefault();

                var galImg = new Image();
                galImg.src = $(e.currentTarget).find('img')[0].src;
                console.log('image clicked: ',$(e.currentTarget), $(e.currentTarget).find('img'));
                $('.imageModal .modal-title').html(this.subproduct.name);
                $('.imageModal .modal-body').html(galImg);
                $('.imageModal').modal();
            }
        });
    });