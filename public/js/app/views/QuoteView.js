define(['jquery','kalendar', 'hbs!templates/quote', 'backbone','models/Model', 'marionette'],
    function ($, kalendar, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            airports: null,
            events: {
                'keyup .to_dest': 'getAirport',
                'click .more-info': 'MoreInfo',
                'click .toggle_trip': 'toggleTrip',
                'click .request-quote-button': 'sendQuote'
            },
            initialize: function(options) {
                
            },
            onRender: function () {
                nest.api.core.cleanView(this, '.quote-menu'); // gets view ready to be rendered  
                var tooptions = { 
                    events: [],
                    firstDayOfWeek: "Monday",
                    showDays: true,
                    onDayClick: function(e) {
                        $('.to_cal .c-day').removeClass('this-day');
                        nest.todate =  e.data.date;
                        $(e.currentTarget).addClass('this-day');
                      console.log("The Date Object " + e.data.date + " and it’s " + e.data.info);
                    }
                };
                var fromoptions = { 
                    events: [],
                    firstDayOfWeek: "Monday",
                    showDays: true,
                    onDayClick: function(e) {
                         $('.from_cal .c-day').removeClass('this-day');
                          nest.fromdate =  e.data.date;
                        $(e.currentTarget).addClass('this-day');
                      console.log("The Date Object " + e.data.date + " and it’s " + e.data.info);
                    }
                };
                setTimeout(function(){  
                    $('.to_cal').kalendar(tooptions);  
                    $('.from_cal').kalendar(fromoptions); 
                    $( "#slider-range-max" ).slider({
                          range: "max",
                          min: 1,
                          max: 20,
                          value: 2,
                          slide: function( event, ui ) {
                            $( "#amount" ).val( ui.value );
                          }
                        });
                        $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
                }, 500);
    
               
            },
            getAirports: function(e) {
                var self = this;
                if (!this.airports) {
                    $.ajax({
                        url: 'https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json',
                        type: 'GET',
                        async: false,
                        success: function(res) {
                            self.airports = JSON.parse(res);
                        }
                    });
                } 

                return this.airports;
                
            },
            getAirport: function(e) {
                e.preventDefault();
                var self = this;

                this.getAirports();

               
                    $( "#autocomplete" ).autocomplete({
                        source: function(request, response){
                            var searchTerm = request.term.toLowerCase();
                            var ret = [];
                             console.log(self.airports);
                            $.each(self.airports, function(i, airportItem){
                                //Do your search here...
                                if (airportItem.name && airportItem.iata) {
                                   if (airportItem.iata.toLowerCase().indexOf(searchTerm) !== -1 || airportItem.name.toLowerCase().indexOf(searchTerm) === 0) {
                                    ret.push(airportItem.name + ' - ' + airportItem.iata);
                                } 
                                }
                                
                            });

                            response(ret);
                        }
                    });
               
            },
            MoreInfo: function(e) {
                e.preventDefault();

                var hash = $(e.currentTarget).data('hash');

                window.location.hash = hash;
            },
            toggleTrip: function(e) {
                $('.to_cal').toggle();
            },
            sendQuote: function(e) {
                e.preventDefault();
                $('.quote-wait').show();
                var name = $('#Name').val();
                var phone = $('#Phone').val();
                var pass = $('#amount').val();
                var origin = $('.from_dest').val();
                var email = $('#Email').val();
                var dest = $('.to_dest').val();
                var inttitle = "You've received a quote!";
                var exttitle = "Your quote has been received!";
                var extmessage = 'Thanks for requesting a quote, it has been received. We will be in touch shortly.<p> Please view details below: </p>';
                var intmessage = 'You have a pending quote. kindly address as soon as possible.<p> Please view details below: </p>';
                var comment = $('#Routing').val();

                if (!comment) {
                    comment = 'N/A';
                }

                if (!nest.todate) {
                    nest.todate = nest.moment();
                } 

                if (!nest.fromdate) {
                    nest.fromdate = 'N/A';
                }

                console.log(name , phone , pass , origin , dest , nest.todate , nest.fromdate);
                if (name && phone && pass && origin && dest && nest.todate) {
                    console.log('send quote!');
                    $.ajax({
                       type: "POST",
                       url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
                       data: {
                         "key": "1ZhveFmXFPmbGWpENrJ0yQ",
                         "template_name": 'nest-quote-internal',
                         "template_content": [
                           {
                               "name": "name",
                               "content": name
                           }
                         ],
                         "message": {
                           "from_email": 'fly@nestav.com.ng',
                           "to": [
                               {
                                 "email": email,
                                 "type": "to"
                               }
                               ],
                               "merge_vars": [
                               {
                                   "rcpt": email,
                                   "vars": [
                                       {
                                           "name": "qname",
                                           "content": name
                                       },
                                       {
                                            "name": 'name',
                                            "content": name
                                       },
                                       {
                                           "name": 'phone',
                                           "content": phone
                                       },
                                       {
                                          "name": 'origin',
                                           "content": origin
                                       },
                                       {
                                         "name": "message",
                                         "content": extmessage
                                       },
                                       {
                                         "name": "dest",
                                         "content": dest
                                       },
                                       {
                                         "name": "fromdate",
                                         "content": nest.fromdate
                                       },
                                       {
                                         "name": "pass",
                                         "content": pass
                                       },

                                       {
                                         "name": "todate",
                                         "content": nest.todate
                                       },
                                       {
                                         "name": "title",
                                         "content": exttitle
                                       },
                                       {
                                         "name": "comment",
                                         "content": comment
                                        }
                                   ]
                               }
                               
                             ],
                           "autotext": "true"
                         }
                       }
                  }).done(function(response) {
                        $.ajax({
                       type: "POST",
                       url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
                       data: {
                         "key": "1ZhveFmXFPmbGWpENrJ0yQ",
                         "template_name": 'nest-quote-internal',
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
                                         "name": "pass",
                                         "content": pass
                                       },
                                       {
                                           "name": 'phone',
                                           "content": phone
                                       },
                                       {
                                          "name": 'origin',
                                           "content": origin
                                       },
                                       {
                                         "name": "message",
                                         "content": intmessage
                                       },
                                       {
                                         "name": "dest",
                                         "content": dest
                                       },
                                       {
                                         "name": "fromdate",
                                         "content": nest.fromdate
                                       },

                                       {
                                         "name": "todate",
                                         "content": nest.todate
                                       },
                                       {
                                         "name": "title",
                                         "content": inttitle
                                       },
                                       {
                                         "name": "comment",
                                         "content": comment
                                       }
                                   ]
                               }
                               
                             ],
                           "autotext": "true"
                         }
                       }
                  }).done(function(response) {
                        $('.quote-wait').hide();
                        $('.quote-message').show();
                    
                  });
                    
                  });
                }
                else  {
                    $('.quote-wait').hide();
                    $('.quote-error').show();
                }

                
                // setTimeout(function(){  
                //     
                // }, 1000);
                
            }
        });
    });