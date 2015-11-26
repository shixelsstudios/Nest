define([
    'jquery', 
    'backbone', 
    'marionette', 
    'underscore', 
    'handlebars',
    'moment',
    "views/ModalView",
    "models/NestCore"
    ],
    function (
    $, 
    Backbone, 
    Marionette, 
    _, 
    Handlebars,
    moment,
    ModalView,
    NestCore
    ){
        var Nest, nest;
        Nest  = nest = window.Nest = window.nest = new Backbone.Marionette.Application();

        function isMobile() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
        }

        
        Nest.mobile = isMobile();
        Nest.api = {}; 
        Nest.api.core = new NestCore();
        Nest.moment = moment;
        Nest.addRegions({
            mainAppRegion:"#main-body-container",
            footerRegion: "#main-footer-container",
            fullAppRegion: "#page",
            navRegion: "#main-nav-container"
        });


        //TODO: Move into core api
        Nest.modal = function(modalInfo) {
            var modal = new ModalView({modal: modalInfo});
            return modal;            
        };
        //TODO: Move into core api
        Nest.modalType = function(type) {
            switch(type) {
                case 'logout': return {body: "Are you sure you want to logout of Yarn?", yes_button: "Yes", no_button: "No", yesAction: 'logout'};
                case 'changepass': return {title: "<h1>Change Password</h1>", body: "<br><input type='password' class='form-control oldPass' placeholder='Current Password'><br><input type='password' class='form-control newPass' placeholder='New Password'><br><input type='password' class='form-control rPass' placeholder='Repeat Password'>", yes_button: 'Update', no_button: 'Cancel', yesAction: 'changepass'};
                case 'changeemail': return {title: "<h1>Change Email</h1>", body: "<br><input type='text' class='form-control oldEmail' placeholder='Current Email'><br><input type='text' class='form-control newEmail' placeholder='New Email'><br><input type='text' class='form-control rEmail' placeholder='Repeat Email'>", yes_button: 'Update', no_button: 'Cancel', yesAction: 'changeemail'};
                case 'changeplan': return {title: "<h1>Change Plan</h1>", body: "<br><select class='form-control user-plan-choice'><option value='monthly'>Monthly (1 month - ₦1,500)</option><option value='quarterly'>Quarterly (3 months - ₦3,500)</option><option value='biannual'>BiAnnually (6 months - ₦6,000)</option><option value='annual'>Annually (1 year - ₦10,000)</option></select>", yes_button: 'Update', no_button: 'Cancel', yesAction: 'changeplan'};
                case 'help': return {title: "<h1>Submit a Ticket</h1>", body: '<iframe crossorigin="unknown" id="fthelp" src ="http://Yarn.desk.com/customer/widget/emails/new"width="350" height="450" border="0" scrolling="no"></iframe>', yes_button: null, no_button: 'Done' };
            }
        };

        Nest.addInitializer(function () {
            Backbone.history.start();
        });

        
        return Nest;
    });