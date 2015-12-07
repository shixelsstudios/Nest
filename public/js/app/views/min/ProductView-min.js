define(["jquery","hbs!templates/product","backbone","models/Model","marionette"],function($,e,t,r){return t.Marionette.ItemView.extend({template:e,model:null,product:{},events:{"click .more-info":"MoreInfo"},initialize:function(e){if(this.product.slug=e.type,this.product.gallery={},"executive-jet-charter"===this.product.slug&&(this.product.h1="Executive Jet Charter",this.product.banner="bg-op",this.product.isJet=!0,this.product.title="Our Fleet",this.product.subtitle="Information on Partner Jets",this.product.des='<p class="small-p">We provide charter services to clients on our Gulfstream G200 and GIV-SP in an exceptional combination of safety, comfort and style. Other aircraft can also be provided at clients’ specific request.</p>',this.product.subproducts=[{img:"g450",parent_slug:"executive-jet-charter",slug:"gulfsteam-giv-sp",cols:"6",title:"Gulfstream GIV-SP",des:"The Gulfstream GIV-SP provides the edge that every smart executive traveller is looking for. From its advanced sound suppression system, to its fresh air circulation;"},{img:"g200",cols:"6",parent_slug:"executive-jet-charter",slug:"gulfsteam-G200",title:"Gulfstream G200 ",des:"The G200 offers the range and comfort of a large jet, but is a super mid-size jet."}],this.product.partners=[{img:"bom300",parent_slug:"executive-jet-charter",slug:"bombardier-challenger-300",cols:"4",title:"Bombardier Challenger 300",des:"The Bombardier Challenger 300 is a super- midsize business jet offering exceptional comfort and performance with a 6,149km range."},{img:"des900dx",cols:"4",parent_slug:"executive-jet-charter",slug:"dessault-falcon-900dx",title:"Dassault Falcon 900DX",des:"The Dassault Falcon 900DX is a tri-engine, large cabin business jet with one of the largest cabins in its class"},{img:"phen300",cols:"4",parent_slug:"executive-jet-charter",slug:"phenom-300",title:"Phenom 300",des:"These spacious and comfortable best-in-class jets set a new standard for business jets. Its range, speed, comfort and intelligent design all combine..."}]),"helicopter-charter"===this.product.slug&&(this.product.h1="Helicopter Charter",this.product.banner="helicopter",this.product.title="Our Fleet",this.product.isHel=!0,this.product.des='<p class="small-p">We offer safe and comfortable charter services on our helicopters, with experienced and professional pilots to get you to any destination within Nigeria. </p>',this.product.subproducts=[{img:"helicopter",cols:"6",parent_slug:"helicopter-charter",slug:"agustswestland-aw139",title:"AgustaWestland AW139 ",des:"We have two (2) units of the AW139 utility configured helicopters to facilitate our operations in the helicopter charter service."},{img:"sikor",cols:"6",parent_slug:"helicopter-charter",slug:"sikorsky-s76",title:"Sikorsky S76 C+",des:"VIP configured aircraft which is able to fly passengers in safety and comfort to all locations, onshore or offshore."}],this.product.partners=null),"transport"===this.product.slug&&(this.product.h1="Transport for Passengers",this.product.banner="transport",this.product.des='<p class="small-p">Upon request, we provide air-conditioned chauffeur-driven vehicles to convey passengers on our charter flights to the venue of their meetings/parties/events, etc. in their city of arrival.</p>',this.product.subproducts=null,this.product.title="",this.product.isTrans=!0,this.product.partners=null),"airtcraft-hangarage"===this.product.slug){this.product.h1="Aircraft Hangarage",this.product.banner="bg-op",this.product.des='<p class="small-p">Our hangarage services include but not limited to aircraft storage and ground support. We provide dedicated aircraft cleaning service, full external wash and polish, internal aircraft cleaning of carpets and upholstery, etc. Our team of skilled professionals have garnered many years of experience in ground handling and associated services.</p>',this.product.title="Inside our Hangers",this.product.subproducts=null,this.product.partners=null,this.product.isHang=!0,this.product.gallery.title="Inside our Hangers",this.product.gallery.count=6,this.product.gallery.path="http://demos.shixels.com/nest_av/img/hanger/hanger-",this.product.gallery.images=[];for(var t=1;t<=this.product.gallery.count;t++)this.product.gallery.images.push({path:this.product.gallery.path+t+".jpg"})}this.model=new r({product:this.product}),console.log(this.product)},onRender:function(){var e=this;nest.api.core.cleanView(this,".serv-menu"),setTimeout(function(){"airtcraft-hangarage"===e.product.slug&&$(".gallery").addClass("ops")},0)},MoreInfo:function(e){e.preventDefault();var t=$(e.currentTarget).data("hash");window.location.hash=t}})});