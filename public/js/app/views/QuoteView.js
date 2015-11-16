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
                          max: 10,
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
                $('.to_dest').toggle();
                $('.to_cal').toggle();
            },
            sendQuote: function(e) {
                e.preventDefault();
                $('.quote-wait').show();
                setTimeout(function(){  
                    $('.quote-wait').hide();
                    $('.quote-message').show();
                }, 1000);
                
            }
        });
    });