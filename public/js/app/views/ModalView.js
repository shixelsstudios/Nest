define(['jquery', 'hbs!templates/modal', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            yes: null,
            events: {
                'click .yes_button': 'yesAction',
                'click .no_button': 'teardown'
            },
            initialize: function(options) {
                this.yes = options.modal.yesAction;
                this.model = new Model({modal: options.modal});

            },
            onRender: function () {
                ft.api.core.cleanView(null, this, null, true);
                this.getTemplate(this.template, this.renderView);
                return this;    
            },
            show: function() {
              this.$el.modal('show');
            },
            teardown: function() {
                this.$el.data('modal', null);
                this.remove();
            },
            renderView: function(template) {
                this.$el.html(template());
                this.$el.modal({show:false}); // dont show modal on instantiation
            },
            yesAction: function() {
                if (this.yes === 'logout') {
                    ft.api.core.logout();
                    this.teardown();
                } else if (this.yes === 'changepass') {
                    var oldPass = $('.oldPass').val();
                    var newPass = $('.newPass').val();
                    var rPass = $('.rPass').val();


                    if (oldPass && newPass && rPass) {
                        if (newPass === rPass) {
                            $('.modal-wait').fadeIn();
                            $('.yes_button').prop('disabled', true);
                            ft.api.core.changepass(oldPass, newPass);
                        } else {
                            $('.modal-error').html('Passwords must match!');
                            $('.modal-error').fadeIn();
                        }
                        
                    } else {
                        $('.modal-error').html('Please fill out all fields!');
                        $('.modal-error').fadeIn();
                    }
                    
                } else if (this.yes === 'changeemail') {
                    var oldEmail = $('.oldEmail').val();
                    var newEmail = $('.newEmail').val();
                    var rEmail = $('.rEmail').val();


                    if (oldEmail && newEmail && rEmail) {
                        if (newEmail === rEmail) {
                            $('.modal-wait').fadeIn();
                            $('.yes_button').prop('disabled', true);
                            ft.api.core.changeemail(newEmail);
                        } else {
                            $('.modal-error').html('Emails must match!');
                            $('.modal-error').fadeIn();
                        }
                        
                    } else {
                        $('.modal-error').html('Please fill out all fields!');
                        $('.modal-error').fadeIn();
                    }
                    
                } else if (this.yes === 'changeplan'){
                    ft.api.pay.changeplan($('.user-plan-choice').val());
                }
            }
        });
    });