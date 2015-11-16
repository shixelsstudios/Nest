define(['jquery', 'hbs!templates/subproduct', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            subproduct: {},
            events: {
                'click .more-info': 'MoreInfo',
                'mouseover .subfeature': 'ShowSubFeat',
                'mouseout .subfeature': 'HideSubFeat'
            },
            initialize: function(options) {

                this.subproduct.slug = options.subtype;
                this.subproduct.gallery = {};

                if (this.subproduct.slug === 'gulfsteam-giv-sp') {
                   
                    this.subproduct.banner = 'bg-op';

                    this.subproduct.name = 'The Gulfstream GIV-SP';

                    this.subproduct.des = '<p>The Gulfstream GIV-SP provides the edge that every smart executive traveller is looking for. From its advanced sound suppression system, to its fresh air circulation; from its roomy cabin, to its signature oval windows which give two times more natural light to the cabin; the GIV-SP has been labeled “Best of the Best in the large aircraft category”. This jet has a cabin height of 1.88m (6ft 2in), a cabin length of 12.29m (40ft 4 in), and a total interior length of 13.74m (49ft 1in).</p>';
                    
                    this.subproduct.title = 'Aircraft Details';
                    
                    this.subproduct.features = [
                    {
                            icon: 'check',
                            cols: '12',
                            align: 'center',
                            title: 'On-board Amenities',
                            subfeatures: [
                                {
                                    icon: 'phone',
                                    value: '7 channel Honeywell satellite communications system for phone and modem transmissions'
                                },
                                {
                                    icon: 'mobile-phone',
                                    value: 'Satellite Phone'
                                },
                                {
                                    icon: 'wifi',
                                    value: 'Wireless Local Network'
                                },
                                {
                                    icon: 'print',
                                    value: 'multi-function printer'
                                },
                                {
                                    icon: 'bed',
                                    value: '4 single beds and 1 double bed capacity'

                                },
                                {
                                    icon: 'music',
                                    value: 'CD/DVD and sound system'

                                },
                                {
                                    icon: 'cutlery',
                                    value: 'microwave and oven'
                                },
                                {
                                    icon: 'coffee',
                                    value: 'coffee maker'
                                },
                                {
                                    icon: 'male',
                                    value: 'restroom'
                                },
                                {
                                    icon: 'desktop',
                                    value: 'hi-definition TV screens'

                                }


                            ]
                        },
                        {
                            icon: 'calendar',
                            cols: '3',
                            align: 'center',
                            title: 'Year of Manufacture',
                            value: '2000'
                        },
                        {
                            icon: 'clock-o',
                            cols: '3',
                            align: 'center',
                            title: 'Non-stop Flight Time',
                            value: '8 Hours'
                        },
                        {
                            icon: 'send',
                            cols: '3',
                            align: 'center',
                            title: 'Range',
                            value: '8,056 km (5005 miles)'
                        },
                        
                        {
                            icon: 'group',
                            cols: '3',
                            align: 'center',
                            title: 'Seating Capacity',
                            value: '14 Passengers'
                        }
                    ];

                    this.subproduct.gallery.title = 'Inside the Gulfstream G-IV SP';

                    this.subproduct.gallery.count = 55;
                    this.subproduct.gallery.path = '../img/g450/g450-';
                    this.subproduct.gallery.images = [];

                    for (var i = 1; i <= this.subproduct.gallery.count; i++) {
                        this.subproduct.gallery.images.push(
                            {
                                path: this.subproduct.gallery.path + i + '.jpg'
                            }
                        );
                    }
                }
            
            
                if (this.subproduct.slug === 'gulfsteam-G200') {
                   
                    this.subproduct.banner = 'bg-op';

                    this.subproduct.name = 'The Gulfstream G200';

                    this.subproduct.des = '<p>The G-200 offers the range and comfort of a large jet, but is a super mid-size jet. This jet is a 2 crew aircraft with a length of 18.97m (62ft 3 in), a cabin width of 2.18m (7ft 2in), and a cabin height of 1.91m (6ft 3in).</p>';
                    
                    this.subproduct.title = 'Aircraft Details';
                    
                    this.subproduct.features = [
                    {
                            icon: 'check',
                            cols: '12',
                            align: 'center',
                            title: 'On-board Amenities',
                            subfeatures: [
                                {
                                    icon: 'mobile-phone',
                                    value: 'Satellite Phone'
                                },
                                {
                                    icon: 'suitcase',
                                    value: 'accessible rear baggage compartment'
                                },
                                {
                                    icon: 'bed',
                                    value: '4 bed capacity'

                                },
                                {
                                    icon: 'music',
                                    value: 'iPod touch, DVD player, & cabin sound system'

                                }

                            ]
                        },
                        {
                            icon: 'calendar',
                            cols: '3',
                            align: 'center',
                            title: 'Year of Manufacture',
                            value: '2008'
                        },
                        {
                            icon: 'clock-o',
                            cols: '3',
                            align: 'center',
                            title: 'Non-stop Flight Time',
                            value: '6 Hours'
                        },
                        {
                            icon: 'send',
                            cols: '3',
                            align: 'center',
                            title: 'Range',
                            value: '6300km (3,910 miles)'
                        },
                        
                        {
                            icon: 'group',
                            cols: '3',
                            align: 'center',
                            title: 'Seating Capacity',
                            value: '8 Passengers'
                        }
                    ];

                    this.subproduct.gallery.title = 'Inside the G200';

                    this.subproduct.gallery.count = 1;
                    this.subproduct.gallery.path = '../img/g200/g200-';
                    this.subproduct.gallery.images = [];

                    for (var i = 1; i <= this.subproduct.gallery.count; i++) {
                        this.subproduct.gallery.images.push(
                            {
                                path: this.subproduct.gallery.path + i + '.jpg'
                            }
                        );
                    }
                }

                if (this.subproduct.slug === 'sikorsky-s76') {
                   
                    this.subproduct.banner = 'bg-op';

                    this.subproduct.name = 'The Sikorsky S-76 ';

                    this.subproduct.subheading = 'Operates out of Port Harcourt';

                    this.subproduct.des = '<p>VIP configured aircraft which is able to fly passengers in safety and comfort to all locations, onshore or offshore. It is a twin-engine multi-purpose aircraft with a length of 16m (52ft 49in), a height of 4.42m (14ft 5in), and a rate of climb of 495 miles/min (1625 ft/min).</p>';
                    
                    this.subproduct.title = 'Aircraft Details';
                    
                    this.subproduct.features = [
                    {
                            icon: 'check',
                            cols: '12',
                            align: 'center',
                            title: 'On-board Amenities',
                            subfeatures: [
                                {
                                    icon: 'mobile-phone',
                                    value: 'Satellite Phone'
                                },
                                {
                                    icon: 'music',
                                    value: 'DVD (2 screens) & passenger individual headset jack'

                                },
                                 {
                                    icon: 'coffee',
                                    value: 'Coffee Maker'
                                },
                                {
                                    icon: 'cutlery',
                                    value: 'refrigerator & minibar'
                                }
                            ]
                        },
                        {
                            icon: 'calendar',
                            cols: '3',
                            align: 'center',
                            title: 'Year of Manufacture',
                            value: '2008'
                        },
                        {
                            icon: 'clock-o',
                            cols: '3',
                            align: 'center',
                            title: 'Non-stop Flight Time',
                            value: '2 Hours'
                        },
                        {
                            icon: 'send',
                            cols: '3',
                            align: 'center',
                            title: 'Range',
                            value: '832 km (517 miles)'
                        },
                        
                        {
                            icon: 'group',
                            cols: '3',
                            align: 'center',
                            title: 'Seating Capacity',
                            value: '5 Passengers'
                        }
                    ];

                    this.subproduct.gallery.title = 'Inside the Sikorsky S76';

                    this.subproduct.gallery.count = 3;
                    this.subproduct.gallery.path = '../img/sikorsky/sikorsky-';
                    this.subproduct.gallery.images = [];

                    for (var i = 1; i <= this.subproduct.gallery.count; i++) {
                        this.subproduct.gallery.images.push(
                            {
                                path: this.subproduct.gallery.path + i + '.jpg'
                            }
                        );
                    }
                }

                if (this.subproduct.slug === 'agustswestland-aw139') {
                   
                    this.subproduct.banner = 'bg-op';

                    this.subproduct.name = 'The AgustaWestland AW139 ';

                    this.subproduct.subheading = 'Operates out of Port Harcourt';

                    this.subproduct.des = '<p>We have two (2) units of the AW139 utility configured helicopters to facilitate our operations in the helicopter charter service. This aircraft is flown by a 2-man crew, and has a 12-15 passenger seating capacity. The length of the helicopter is 13.77m (45ft 3in), the width is 2.26m (10ft 0 in), the height is 3.72m (12ft 2in). They have a maximum speed of 310km/h (193mph), and a rate of climb of 10.9miles/sec (2140ft/min).</p>';
                    
                    this.subproduct.title = 'Aircraft Details';
                    
                    this.subproduct.features = [
                    {
                            icon: 'check',
                            cols: '12',
                            align: 'center',
                            title: 'On-board Amenities',
                            subfeatures: [
                                {
                                    icon: 'mobile-phone',
                                    value: 'Satellite Phone'
                                },
                                {
                                    icon: 'music',
                                    value: 'DVD (2 screens) & passenger individual headset jack'

                                },
                                 {
                                    icon: 'coffee',
                                    value: 'Coffee Maker'
                                },
                                {
                                    icon: 'cutlery',
                                    value: 'refrigerator & minibar'
                                }
                            ]
                        },
                        {
                            icon: 'calendar',
                            cols: '3',
                            align: 'center',
                            title: 'Year of Manufacture',
                            value: '2011'
                        },
                        {
                            icon: 'clock-o',
                            cols: '3',
                            align: 'center',
                            title: 'Non-stop Flight Time',
                            value: '3.5 Hours'
                        },
                        {
                            icon: 'send',
                            cols: '3',
                            align: 'center',
                            title: 'Range',
                            value: '1,061km (573 miles)'
                        },
                        
                        {
                            icon: 'group',
                            cols: '3',
                            align: 'center',
                            title: 'Seating Capacity',
                            value: '12 Passengers'
                        }
                    ];

                    this.subproduct.gallery.title = 'Inside the Sikorsky S76';

                    this.subproduct.gallery.count = 3;
                    this.subproduct.gallery.path = '../img/sikorsky/sikorsky-';
                    this.subproduct.gallery.images = [];

                    for (var i = 1; i <= this.subproduct.gallery.count; i++) {
                        this.subproduct.gallery.images.push(
                            {
                                path: this.subproduct.gallery.path + i + '.jpg'
                            }
                        );
                    }
                }

                if (this.subproduct.slug === 'bombardier-challenger-300') {
                   
                    this.subproduct.banner = 'bg-op';

                    this.subproduct.name = 'The Bombardier Challenger 300';

                    this.subproduct.subheading = 'Operates out of Port Harcourt';

                    this.subproduct.des = '<p>The Bombardier Challenger 300 is a super- midsize business jet offering exceptional comfort and performance with a 6,149km range.</p>';
                    
                    this.subproduct.title = 'Aircraft Details';
                    
                    this.subproduct.features = [
                    {
                            icon: 'check',
                            cols: '12',
                            align: 'center',
                            title: 'On-board Amenities',
                            subfeatures: [
                                {
                                    icon: 'mobile-phone',
                                    value: 'Satellite Phone'
                                },
                                {
                                    icon: 'music',
                                    value: 'Cabin sound system'

                                },
                                {
                                    icon: 'bed',
                                    value: '2 bed capacity'

                                },
                                {
                                    icon: 'male',
                                    value: 'restroom'
                                },
                                 {
                                    icon: 'coffee',
                                    value: 'Coffee Maker'
                                },
                                {
                                    icon: 'cutlery',
                                    value: 'microwave oven'
                                },
                                {
                                    icon: 'desktop',
                                    value: '20” wide-screen monitors'
                                }
                            ]
                        },
                        {
                            icon: 'calendar',
                            cols: '3',
                            align: 'center',
                            title: 'Year of Manufacture',
                            value: '2009'
                        },
                        {
                            icon: 'clock-o',
                            cols: '3',
                            align: 'center',
                            title: 'Non-stop Flight Time',
                            value: '8 Hours'
                        },
                        {
                            icon: 'send',
                            cols: '3',
                            align: 'center',
                            title: 'Range',
                            value: '6,149km'
                        },
                        
                        {
                            icon: 'group',
                            cols: '3',
                            align: 'center',
                            title: 'Seating Capacity',
                            value: '8 Passengers'
                        }
                    ];

                    this.subproduct.gallery.title = 'Inside the Bombardier Challenger 300';

                    this.subproduct.gallery.count = 0;
                    this.subproduct.gallery.path = '../img/bombardier/bombardier-';
                    this.subproduct.gallery.images = [];

                    for (var i = 1; i <= this.subproduct.gallery.count; i++) {
                        this.subproduct.gallery.images.push(
                            {
                                path: this.subproduct.gallery.path + i + '.jpg'
                            }
                        );
                    }
                }

                if (this.subproduct.slug === 'dessault-falcon-900dx') {
                   
                    this.subproduct.banner = 'bg-op';

                    this.subproduct.name = 'The Dassault Falcon 900DX';

                    this.subproduct.subheading = 'Operates out of Port Harcourt';

                    this.subproduct.des = '<p>The Dassault Falcon 900DX is a tri-engine, large cabin business jet with one of the largest cabins in its class.</p>';
                    
                    this.subproduct.title = 'Aircraft Details';
                    
                    this.subproduct.features = [
                    {
                            icon: 'check',
                            cols: '12',
                            align: 'center',
                            title: 'On-board Amenities',
                            subfeatures: [
                                {
                                    icon: 'mobile-phone',
                                    value: 'Satellite Phone'
                                },
                                {
                                    icon: 'music',
                                    value: 'Cabin sound system'

                                },
                                {
                                    icon: 'bed',
                                    value: '4 bed capacity'

                                },
                                {
                                    icon: 'male',
                                    value: 'restroom'
                                },
                                 {
                                    icon: 'coffee',
                                    value: 'Coffee Maker'
                                },
                                {
                                    icon: 'cutlery',
                                    value: 'microwave oven & well stocked gallery'
                                }
                            ]
                        },
                        {
                            icon: 'calendar',
                            cols: '3',
                            align: 'center',
                            title: 'Year of Manufacture',
                            value: '2007'
                        },
                        {
                            icon: 'clock-o',
                            cols: '3',
                            align: 'center',
                            title: 'Non-stop Flight Time',
                            value: '10 Hours'
                        },
                        {
                            icon: 'send',
                            cols: '3',
                            align: 'center',
                            title: 'Range',
                            value: '7,950 km'
                        },
                        
                        {
                            icon: 'group',
                            cols: '3',
                            align: 'center',
                            title: 'Seating Capacity',
                            value: '14 Passengers'
                        }
                    ];

                    this.subproduct.gallery.title = 'Inside the Dassault Falcon 900DX';

                    this.subproduct.gallery.count = 0;
                    this.subproduct.gallery.path = '../img/bombardier/bombardier-';
                    this.subproduct.gallery.images = [];

                    for (var i = 1; i <= this.subproduct.gallery.count; i++) {
                        this.subproduct.gallery.images.push(
                            {
                                path: this.subproduct.gallery.path + i + '.jpg'
                            }
                        );
                    }
                }
            
                 if (this.subproduct.slug === 'phenom-300') {
                   
                    this.subproduct.banner = 'bg-op';

                    this.subproduct.name = 'The Phenom 300';

                    this.subproduct.subheading = 'Operates out of Port Harcourt';

                    this.subproduct.des = '<p>These spacious and comfortable best-in-class jets set a new standard for business jets. Its range, speed, comfort and intelligent design all combine to suit the need of a business traveller. It has a 6 passenger seating capacity, a range of 3,650km (2,268 miles), a length of 15.9m (52ft 2 in) and a cabin height of 1.5m (4ft 9 in).</p>';
                    
                    this.subproduct.title = 'Aircraft Details';
                    
                    this.subproduct.features = [
                    {
                            icon: 'check',
                            cols: '12',
                            align: 'center',
                            title: 'On-board Amenities',
                            subfeatures: [
                                {
                                    icon: 'mobile-phone',
                                    value: 'Satellite Phone'
                                },
                                {
                                    icon: 'music',
                                    value: 'Cabin sound system'

                                },
                                {
                                    icon: 'male',
                                    value: 'restroom'
                                },
                                 {
                                    icon: 'coffee',
                                    value: 'Coffee Maker'
                                },
                                {
                                    icon: 'cutlery',
                                    value: 'microwave oven'
                                }
                            ]
                        }
                    ];

                    this.subproduct.gallery.title = 'Inside the Phenom 300';

                    this.subproduct.gallery.count = 0;
                    this.subproduct.gallery.path = '../img/bombardier/bombardier-';
                    this.subproduct.gallery.images = [];

                    for (var i = 1; i <= this.subproduct.gallery.count; i++) {
                        this.subproduct.gallery.images.push(
                            {
                                path: this.subproduct.gallery.path + i + '.jpg'
                            }
                        );
                    }
                }
            
            

            this.model = new Model({subproduct: this.subproduct});
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            });

            console.log(this.subproduct);
            },
            onRender: function () {
                nest.api.core.cleanView(this, '.serv-menu'); // gets view ready to be rendered  

            },
            MoreInfo: function(e) {
                e.preventDefault();

                var hash = $(e.currentTarget).data('hash');

                window.location.hash = hash;
            },
            ShowSubFeat: function(e) {
                $(e.currentTarget).find('.sub-value').css('display', 'table');
            },
            HideSubFeat: function(e) {
                $(e.currentTarget).find('.sub-value').css('display', 'none');
            }
        });
    });