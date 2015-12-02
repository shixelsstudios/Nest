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
            // sendMessage: function(e) {
            //     e.preventDefault();

                // $('.contact-wait').show();
                // setTimeout(function(){  
                //     $('.contact-wait').hide();
                //     $('.contact-error').html('Message Successfully sent').show();
                // }, 1000);

                sendMessage: function(e) {
                e.preventDefault();
               
                var name = $('#name').val();
                var email = $('#email').val();
                var subject = $('#subject').val();
                var message = $('#message').val();

              

                  if(name === ""){
                  // alert('This is it');
                  $('#fullname-error').after('<small style=color:red;position:relative;left:-200px;  class="name-error">*Please enter your Fullname</small>');            
                  } 

                  if(email === ""){
                  // alert('This is it');
                  $('#email-error').after('<small style=color:red;position:relative;left:-170px;  class="phone-error">*Please enter your email address</small>');            
                  }
                
                  if(message === ""){
                  // alert('That was it');
                  $('#message-error').after('<small style=color:red;position:relative;left:-200px;  class="Air-error">*Type message here</small>');            
                  }
                
              

                console.log("VALUES ->",name , email , subject , message);
                if (name && email && subject && message) {
                   $('.contact-wait').show();
                    console.log('send message!');
                
                        $.ajax({
                       type: "POST",
                       url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
                       data: {
                         "key": "1ZhveFmXFPmbGWpENrJ0yQ",
                         "template_name": 'nest-contact-us-internal',
                         "template_content": [
                           {
                               "name": "name",
                               "content": name
                           }
                         ],
                         "message": {
                           "from_email": email,
                           "to": [
                               {
                                 "email": 'o.edinbus@nestav.com.ng',
                                 "type": "to"
                               }
                               ],
                               "merge_vars": [
                               {
                                   "rcpt": 'o.edinbus@nestav.com.ng',
                                   "vars": [
                                       {
                                           "name": "qname",
                                           "content": 'NestAv'
                                       },
                                       {
                                            "name": 'name',
                                            "content": name
                                       },
                                       {
                                         "name": "email",
                                         "content": email
                                       },
                                       {
                                         "name": "subject",
                                         "content": subject
                                       },
                                       {
                                           "name": 'message',
                                           "content": message
                                       }
                                   ]
                               }
                               
                             ],
                           "autotext": "true"
                         }
                       }
                  }).done(function(response) {
                        $('.contact-wait').hide();
                        $('.contact-message').show();

                         });
                }
                else  {
                    $('.contact-wait').hide();
                    $('.contact-error').html('Message Successfully sent').show();
                }

                
            }
        });
    });