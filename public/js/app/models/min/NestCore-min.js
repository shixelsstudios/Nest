define(["jquery","underscore","backbone"],function($,e,n){var t=n.Model.extend({defaults:{core_api:"http://localhost:3000/"},initialize:function(){e.bindAll(this)},email:function(e,n,t,i){console.log(e),$.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"4lByu_bOpA3rhnMsc54A_w",message:{from_email:n,to:[{email:e,type:"to"}],autotext:"true",html:t,subject:i}}}).done(function(e){console.log(e[0]),$(".notify-wait").addClass("sent"),"sent"===e[0].status?$(".notify-wait").html("Email successfully sent! We'll notify you on launch!"):($(".notify-wait").html('An error occured! Please <a href="#" class="shownotify">Try Again</a>'),$(".shownotify").on("click",function(e){e.preventDefault(),$(".notified-submit").fadeIn(),$(".notified-input").fadeIn(),$(".notified-country").fadeIn(),$(".notify-wait").fadeOut(),$(".notify-wait").html('<i class="notify-wait-icon fa fa-spinner fa-pulse"></i><div class="notify-wait-box"></div>')}))})},cleanView:function(e,n){e.$el=e.$el.children(),e.setElement(e.$el),$(".enel-top-menu li").removeClass("active"),$(n).addClass("active"),$(".desk-menu").animate({right:"-80%"}),$(".mobile-menu-hide").hide()},modal:function(e){var n="#main-body-container";$(n).prepend(e.render().el)},getFormObj:function(e){var n={},t=$(e).serializeArray();return $.each(t,function(e,t){n[t.name]=t.value}),n},isEmail:function(e){var n=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return n.test(e)},dynamicSort:function(e){var n=1;return"-"===e[0]&&(n=-1,e=e.substr(1)),function(t,i){var a=t[e]<i[e]?-1:t[e]>i[e]?1:0;return a*n}}});return t});