define([
    'Nest', 
    'backbone', 
    'marionette', 
    'views/NavView',
    'views/FooterView',
    'views/LandingView',
    'views/AboutView',
    'views/OperationsView',
    'views/ServicesView',
    'views/ContactView',
    'views/ProductView',
    'views/SubProductView',
    'views/HowView',
    'views/QuoteView'
    ],
    function (
    Nest, 
    Backbone, 
    Marionette, 
    NavView,
    FooterView,
    LandingView,
    AboutView,
    OperationsView,
    ServicesView,
    ContactView,
    ProductView,
    SubProductView,
    HowView,
    QuoteView
    ){
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
           Nest.navRegion.show(new NavView());          
        },
        index:function () {
            window.location.hash = '#landing';
        },
        landing:function () {
            Nest.mainAppRegion.show(new LandingView());
        },
        about: function() {
            Nest.mainAppRegion.show(new AboutView());
        },
        operations: function() {
            Nest.mainAppRegion.show(new OperationsView());
        },
        services: function() {  
            Nest.mainAppRegion.show(new ServicesView());
        },
        contact: function() {
            Nest.mainAppRegion.show(new ContactView());
        },
        product: function(type) {
            Nest.mainAppRegion.show(new ProductView({type: type}));
        },
        how: function() {
            Nest.mainAppRegion.show(new HowView());
        },
        subproduct: function(type, subtype) {
            Nest.mainAppRegion.show(new SubProductView({subtype: subtype}));
        },
        quote: function() {
            Nest.mainAppRegion.show(new QuoteView());
        }

    });
});