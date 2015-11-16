/*
    MansardAPI
    - Does all API calls and returns JSON objects for use
*/
define([
    "jquery",
    "underscore",
    "backbone"
    ],
    function(
    $,
    _,
    Backbone
    ){
    // Creates a new Backbone Model class object
    var NestCore = Backbone.Model.extend({
      defaults: {
          core_api: 'http://localhost:3000/'
      },
      initialize: function() {
          _.bindAll(this);

      },
      email: function(to, from, body, subject) {
          console.log(to);
          $.ajax({
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                  "key": "4lByu_bOpA3rhnMsc54A_w",
                  "message": {
                    "from_email": from,
                    "to": [
                        {
                          "email": to,
                          "type": "to"
                        }
                      ],
                    "autotext": "true",
                    "html": body,
                    "subject": subject
                  }
                }
               }).done(function(response) {
                 console.log(response[0]); // if you're into that sorta thing
                 $('.notify-wait').addClass('sent');
                 if (response[0].status === 'sent') {

                      $(".notify-wait").html('Email successfully sent! We\'ll notify you on launch!');
                 } else {

                      $(".notify-wait").html('An error occured! Please <a href="#" class="shownotify">Try Again</a>');
                       $( ".shownotify" ).on( "click", function(e) {
                          e.preventDefault();
                          $('.notified-submit').fadeIn();
                          $('.notified-input').fadeIn();
                          $('.notified-country').fadeIn();
                          $(".notify-wait").fadeOut();
                          $(".notify-wait").html('<i class="notify-wait-icon fa fa-spinner fa-pulse"></i><div class="notify-wait-box"></div>');
                      });
                 }
                 
               });
          },
        cleanView: function(view, menu) {
            view.$el = view.$el.children(); // get rid of that pesky wrapping-div
            view.setElement(view.$el);  // assumes 1 child element.

            $('.enel-top-menu li').removeClass('active');
            $(menu).addClass('active');
            $('.desk-menu').animate({"right": '-80%'});
                $('.mobile-menu-hide').hide();
        },
        modal: function(the_modal) {
            var selector = '#main-body-container';
            $(selector).prepend(the_modal.render().el);
        },   
        getFormObj: function(form) {
          var formObj = {};
          var inputs = $(form).serializeArray();
          $.each(inputs, function (i, input) {
              formObj[input.name] = input.value;
          });
          return formObj;
        },
        isEmail: function(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
        },
        dynamicSort: function(property) {
          var sortOrder = 1;
          if(property[0] === "-") {
              sortOrder = -1;
              property = property.substr(1);
          }
          return function (a,b) {
              var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
              return result * sortOrder;
          }
      }
     });

    // Returns the Model class
    return  NestCore;

}

);
