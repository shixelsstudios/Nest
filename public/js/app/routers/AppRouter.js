define(['backbone', 'marionette'], function(Backbone, Marionette) {
   return Backbone.Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "": "index",
           "landing": "landing",
           "about-us": "about",
           "operations": "operations",
           "services": "services",
           "contact-us": "contact",
           "how-it-works": "how",
           "quote": "quote",
           "services/:type": "product",
           "services/:type/:subtype": "subproduct"
       }
   });
});