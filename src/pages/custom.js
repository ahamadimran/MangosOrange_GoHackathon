

(function() {
    var initalized=false;
    function loadDropdownForParentCat($parent, $el){
        // var $parent = $(parentSelector);
        var selectedChild = $el.find("option:selected");
        var templateData = {};
        templateData.mixinName=$el.attr("data-mixinname");
        templateData.theme=$el.attr("data-theme");
        templateData.categoryId=$parent.val();
        if(templateData.categoryId=="-1"){
          templateData.categoryId=$el.attr("data-parentcatid");
        }
        templateData.link=$el.attr("data-link");
        templateData.newsCount=$el.attr("data-newscount");
        templateData.element_id=$el.attr("data-elementid");
        templateData.is_visible=true;
        templateData.is_sync=false;
        
        templateData.content_type="CATEGORY_NEWS";
        templateData.heading=selectedChild.length>0 ? selectedChild.attr("data-heading") : $el.attr("data-heading");
        templateData.partner=$el.attr("data-partner");
        templateData.parentCategoryId=$el.attr("data-parentcatid");
        var viewProps = [];
        for(var k in templateData){
            viewProps.push(k+"="+templateData[k]);
  
        }
        viewProps = viewProps.join("&");
        var url = "/xhr/getNewsMixin?"+viewProps;  
        var success = function(data){
            var templateData = data.templateData;
            var view = data.viewData;
            var $e = $("#"+templateData.element_id);
            $e.removeClass("hide").html(view);
            $e.find("img").unveil();
            // executeBinding(totalCount,count);
        }
        var fail = function(){
            // executeBinding(totalCount,count);
            // alert("failed in fetching data");
        }
                  
        
        Hocalwire.Services.get(url)
            .then(function(data) {
                
                success(data);
                
            },
            function() { 
               
                fail();
  
            }
        );
      }
    function handleSubCatsMenuDropdown(){
        var $parents = $(".sub-cats-mixin-headerwrapper");
        for(k=0;k<$parents.length;k++){
          var $parent = $($parents[k]);
          var parentWidth = $parent.width();
          for(var i=0;i<$parent.length;i++){
            var $e = $($parent[i]);
            
            var items = $e.find(">ul li:not(.sub-cats-more)");
            
            var moreDropDown = $e.find(".sub-cats-more");
            var moreDropDownUl = $e.find(".sub-cats-more ul");
            if(items.length>3){
              var maxItems = 3;
              for(var j=maxItems;j<items.length;j++){
                var $orig = $(items[j]);
                var item = $orig.clone();
                moreDropDownUl.append(item);
                $orig.remove();
              }
              
              moreDropDown.on("click",function(){
                  var $this = $(this).find("ul");
                  if($this.hasClass("hide")){
                      $this.removeClass("hide")
                  } else {
                      $this.addClass("hide");
                  }
              });
            }
          }
        }
        
      }
    function bindForPollResult(){
            var pollContents = $(".poll-content-wrapper");
            if(!pollContents || !pollContents.length){
              return;
            }
           
            var updateProperty = function(element,propertyName,val){
              var contentId = element.attr("data-id");
              var contentType = element.attr("data-content-type");
              var contentName = element.attr("data-name");
              var yesBtn = element.find(".yes_btn");
              var noBtn = element.find(".no_btn");
              var cantSayBtn = element.find(".cant_say_btn");
              var msgWrapper = element.find(".err_msg");
  
              var success = function(data){
                var yesCount = 0, noCount=0,cantSayCount=0;
                var item;
                if(data && data.data){
                  try {
                     item = JSON.parse(data.data);
                  }catch(ex){
                    item = {};
                  }
                }
              var htmltodisplay = "<div> Your Vote has been recorded</div>";
              if(item){
                yesCount = parseInt(item.yes_count) || 0;
                noCount = parseInt(item.no_count) || 0;
                cantSayCount = parseInt(item.cant_say_count) || 0;
                if(yesCount > 0 || noCount >0 || cantSayCount>0){
                  var totalCount = yesCount + noCount+cantSayCount;
                  var yesPer = parseFloat((yesCount/(totalCount))*100).toFixed(2)+"%"
                  var noPer = parseFloat((noCount/(totalCount))*100).toFixed(2)+"%";
                  var cantSayPer = parseFloat((cantSayCount/(totalCount))*100).toFixed(2)+"%";
  
  
                  var yesP = parseInt((yesCount/(totalCount))*100)+"%"
                  var noP = parseInt((noCount/(totalCount))*100)+"%";
                  var cantSayP = parseInt((cantSayCount/(totalCount))*100)+"%";
                  
                  msgWrapper.find(".yes_choice .skillbar").attr("data-percent",yesPer);
                  msgWrapper.find(".no_choice .skillbar").attr("data-percent",noPer);
                  msgWrapper.find(".cant_say_choice .skillbar").attr("data-percent",cantSayPer);
                  
  
                  msgWrapper.find(".yes_choice .skillbar-bar").attr("data-percent",yesP);
                  msgWrapper.find(".no_choice .skillbar-bar").attr("data-percent",noP);
                  msgWrapper.find(".cant_say_choice .skillbar-bar").attr("data-percent",cantSayP);
  
                  msgWrapper.find(".yes_choice .skill-bar-percent").html(yesPer);
                  msgWrapper.find(".no_choice .skill-bar-percent").html(noPer);
                  msgWrapper.find(".cant_say_choice .skill-bar-percent").html(cantSayPer);
                  // htmltodisplay+= '<div class="poll-result-wrapper"><div class="heading">परिणाम :</div><span class="yes_choice">&nbsp; हाँ :<span class="value">'+yesPer+"</span></span>";
                  // htmltodisplay+='<span class="no_choice">&nbsp; नहीं :<span class="value">'+noPer+"</span></span>"+'</div>';
                }
                msgWrapper.css("display","inline");
                $(msgWrapper).find('.yes_choice .skillbar-bar').css("width",yesP);
                $(msgWrapper).find('.no_choice .skillbar-bar').css("width",noP);
                $(msgWrapper).find('.cant_say_choice .skillbar-bar').css("width",cantSayP);
              }  else {
                  msgWrapper.html(htmltodisplay).show();
  
              }
              
                
                yesBtn.hide();
                noBtn.hide(); 
                cantSayBtn.hide();   
              }
              var fail = function(data){
                msgWrapper.html("Error Recording your vote").show();
                yesBtn.hide();
                noBtn.hide();  
                cantSayBtn.hide(); 
              }
                     
              var data = {"contentId":contentId,"propertyName":propertyName,"contentType":contentType,"value":val||1,"contentTypeName":contentName}
              data["methodHandler"] = "pollData";
              Hocalwire.Services.post("/xhr/admin/updateContentProperety",data)
                  .then(function(data) {
                      success(data);
                  },
                  function(data) { 
                      fail(data);
                  }
              );
            };
            var ele = $(pollContents);
            ele.find(".yes_btn,.no_btn,.cant_say_btn").on("click",function(){
              var $this = $(this);
              var propertyName = $this.attr("data-property-name");
              updateProperty($(this).closest(".poll-content-wrapper"),propertyName,"");
            });
            
            if(pollContents.find(".poll-result-wrapper").length){
                $('.poll-result-wrapper .skillbar').each(function(){
                  $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                  },6000);
                });
              }
      }
    window.initSlider = function(){
      var isMobile = $(".screen-detect-item-mob").is(":visible");
      var isTabProDesk = $(".tab-pro-desktop").is(":visible");
      var isTab = $(".screen-detect-item-tab").is(":visible");
      var isDesktopSize = $(".screen-detect-item-desk").is(":visible");
      if(!isMobile && !isTab){
        if($('.slider').hasClass("not-loaded")){
          $('.slider').removeClass("not-loaded");
            var cPad = parseInt($('.slider').width()/4);//$(".screen-detect-item-desk").is(":visible") ? '150px' : ($(".screen-detect-item-tab-prop").is(":visible") ? '100px' : '50px');
            
            $('.slider').slick({
              centerMode: true,
              centerPadding: cPad+"px",
              slidesToShow: 1,
              dots: false,
              prevArrow: "<span class='slick-prev pull-left carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_left</i></span>",
              nextArrow: "<span class='slick-next pull-right carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_right</i></span>"
            });
          } 
      } else {
          $('.slider').removeClass("not-loaded");
      }
  
    };
    window.initialiseScriptsBinding = function(){
      if(initalized){
        return;
      }
      initalized=true;
      bindForPollResult();
      var rUrl = Utils.getQueryParam("redirectUrl");
      if(window.location.pathname=="/pricing" && rUrl){
        Hocalwire.Services.GlobalService.setCookie("_redirect_url_temp_pricing_",rUrl,{"path":"/","expires":new Date(new Date().getTime()+(5*60*60*1000))});
        Hocalwire.Services.GlobalService.setCookie("_redirect_url_temp_",rUrl,{"path":"/","expires":new Date(new Date().getTime()+(5*60*60*1000))});
      }
      if(window.location.pathname=="/login" && rUrl){
        Hocalwire.Services.GlobalService.setCookie("_redirect_url_temp_",rUrl,{"path":"/","expires":new Date(new Date().getTime()+(5*60*60*1000))});
      }
      var isMobile = $(".screen-detect-item-mob").is(":visible");
      var isTabProDesk = $(".tab-pro-desktop").is(":visible");
      var isTab = $(".screen-detect-item-tab").is(":visible");
      var isDesktopSize = $(".screen-detect-item-desk").is(":visible");
      $(".share-icon-click").on("click",function(){
        var target = $(".hb-social-sticky");
        if(target.hasClass("open")){
          target.removeClass("open");
        } else {
          target.addClass("open");
        }
      }); 
      if(!isDesktopSize){
        if($(".hook-btn").is(":visible")){
  
          $(".hook-btn").pageslide();
          var t = $(".hook-btn").attr("href");
          $("#pageslide").html($(t).html());
          $(t).remove();
          $("#pageslide").attr("direction","right").attr("data-loaded","1");
        }
        $("#pageslide").on("click", ".close_menu_btn", function() {
            $(".hook-btn").trigger("click");
        });
        var $e = $(".change-id-pageslide");
        for(var i=0;i<$e.length;i++){
          var $el = $($e[i]);
          var target = $($el.attr("data-clicked"));
          var id = $el.attr("id");
          var newId = id+"-pageslide";
          $el.attr(id,newId);
          target.attr("for",newId);
  
        }
      } else {
        $(".hook-btn-desktop").on("click",function(){
          var $this = $(this);
          var left = $(".story-left-side25");
          var right = $(".story-right-side75");
          var isClosed = $this.hasClass("closed");
          if(!isClosed){
            
            var animatel = {"left":"-"+left.width()+"px"};
            var animater = {"left":"0px"};
            left.animate(animatel,200,function(){
              left.addClass("zero-width");
              $this.addClass("closed");
              $this.find("i").html("exit_to_app");
            });
            right.animate(animater,200,function(){
              right.addClass("full-desk-width");
            });
            
            
  
          } else {
            
            var animatel = {"left":"0px"};
            var animater = {"left":left.width()+"px"};
            left.animate(animatel,200,function(){
              left.removeClass("zero-width");
              $this.removeClass("closed");
              $this.find("i").html("keyboard_backspace");
            });
            right.animate(animater,200,function(){
              right.removeClass("full-desk-width");
            });
  
            // $(".story-left-side25").removeClass("zero-width");
            // $(".story-right-side75").removeClass("full-desk-width");
          }
        });
      }
      
      $("#temp_element").attr("style","height:"+($("header").height()+"px;"));
      // $(".notification-badge").on("click",function(){
      //     $(this).removeAttr("data-badge");
      // })
      $(".subscribe-to-news-letter-wrap").on("click",function(){
          if($(".subscribe-to-mail-form-wrap-mdm").hasClass("hide")){
              $(".subscribe-to-mail-form-wrap-mdm").removeClass("hide");
          } else {
              $(".subscribe-to-mail-form-wrap-mdm").addClass("hide")
          }
      });
      if(!isMobile && !isTab){
        $('.slider').removeClass("not-loaded");
        var cPad = parseInt($('.slider').width()/4);//$(".screen-detect-item-desk").is(":visible") ? '150px' : ($(".screen-detect-item-tab-prop").is(":visible") ? '100px' : '50px');
        
        $('.slider').slick({
          centerMode: true,
          centerPadding: cPad+"px",
          slidesToShow: 1,
          dots: false,
          prevArrow: "<span class='slick-prev pull-left carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_left</i></span>",
        nextArrow: "<span class='slick-next pull-right carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_right</i></span>"
        });
      } else {
          $('.slider').removeClass("not-loaded");
      }
      $('.slider2').removeClass("not-loaded");
        
      $('.slider2').slick({
        slidesToShow: 2,
        dots: false,
        responsive: [
          {
            breakpoint: 1303,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
          },
          {
            breakpoint: 980,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
          }
        ],  
        prevArrow: "<span class='slick-prev pull-left carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_left</i></span>",
        nextArrow: "<span class='slick-next pull-right carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_right</i></span>"
      });
      $(".special-big-slider").removeClass("not-loaded");
      $('.special-big-slider').slick({
        slidesToShow: 1,
        dots: false,
        prevArrow: "<span class='slick-prev pull-left carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_left</i></span>",
        nextArrow: "<span class='slick-next pull-right carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_right</i></span>"
      });
      $('.slider3').removeClass("not-loaded");
        
      $('.slider3').slick({
        slidesToShow: 3,
        dots: false,
        responsive: [
          {
            breakpoint: 1303,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
          },
          {
            breakpoint: 980,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
          }
        ],  
        prevArrow: "<span class='slick-prev pull-left carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_left</i></span>",
        nextArrow: "<span class='slick-next pull-right carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_right</i></span>"
      });
      $('.slider4').slick({
        slidesToShow: 4,
        dots: false,
        responsive: [
          {
            breakpoint: 1303,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
          },
          {
            breakpoint: 980,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
          }
        ],  
        prevArrow: "<span class='slick-prev pull-left carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_left</i></span>",
        nextArrow: "<span class='slick-next pull-right carousel-btns'><i class='material-icons' aria-hidden='true'>chevron_right</i></span>"
      });
      // $(".snap-and-share").on("click",function(){
      //   var target = $(this).closest(".share-as-clip");
      //   createHtmlToCanvas(target,function(canvas){
      //           var result = canvas.toDataURL("image/png");
      //           showModal(result,canvas,target.attr("data-id"));
      //   });
    
      // });
      // $("#drawer-menu-left").attr("id","");
      // $("#drawer-menu-right").attr("id","");
      // $(".mdl-layout__obfuscator-right-temp").removeClass("mdl-layout__obfuscator-right-temp");
      // $(".mdl-layout__obfuscator-temp").removeClass(".mdl-layout__obfuscator-temp");
      
      
      $("#more-button").click(function() {
        $(".mdl-layout__drawer-right").addClass("active");
        $(".mdl-layout__obfuscator-right").addClass("ob-active");
      });
      $(".profile-mob-icon").on("click",function(){
        $("#more-button").trigger("click");
      });
      // $("#notifications-mob").on("click",function(){
      //   $("#notifications").trigger("click");
      // });
      var $datePicker = $(".date-picker");
      if($datePicker.length){
          if($datePicker[0].DatePickerX){
              $datePicker[0].DatePickerX.init({
                mondayFirst: true,
                minDate    : new Date(1900, 1, 1),
                maxDate : new Date(),
                //maxDate    : new Date(2017, 4, 25)
              });
          } else {
              setTimeout(function(){
                  $datePicker[0].DatePickerX.init({
                    mondayFirst: true,
                    minDate    : new Date(1900, 1, 1),
                    maxDate : new Date(),
                    //maxDate    : new Date(2017, 4, 25)
                  });
              },5000);
              
          }
        
      }
      $("body").on("click",".change-font-btn",function(){
          Utils.showModalForView();
          var value = $("body").attr("data-font-value") || "18";
          var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;} .yes-btn{background: #ccc;padding: 5px 10px;cursor:pointer;}</style>"
          var html = "<p class='bookmark-message align-center'>Adjust Story Font </p><input class='font-change-slider' type='range' min='12' max='42' value='"+value+"' id='slider'/>";
          $("#modal-content .view-content").html(style+html);
          // $(".yes-btn").off("click");
          // $(".yes-btn").on("click",function(){
          //     $this.addClass("disabled");
          //     deleteBookmark(id,callback);     
          // });
  
      });
  
      
      function resizeGridItem(item){
        var grid = document.getElementsByClassName("grid")[0];
        var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        var rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
          item.style.gridRowEnd = "span "+rowSpan;
      }
      
      function resizeAllGridItems(){
        // resizeGraph();
        var allItems = $(".classified.item");
        for(x=0;x<allItems.length;x++){
          resizeGridItem(allItems[x]);
        }
      }
  
      resizeAllGridItems();
      window.addEventListener("resize", resizeAllGridItems);
  
        
      $(".settings-mode-select li").on("click",function(){
          var mode = $(this).attr("data-mode");
          if(mode=="light"){
            $("body").removeClass("dark");
            $(".settings-appearance-label").html("Light Mode");
            Hocalwire.Services.GlobalService.setCookie("_USER_SETTINGS_MODE_","light",{"path":"/","expires":new Date(new Date().getTime()+(24*365*60*60*1000))});
          } else{
            Hocalwire.Services.GlobalService.setCookie("_USER_SETTINGS_MODE_","dark",{"path":"/","expires":new Date(new Date().getTime()+(24*365*60*60*1000))});
            $("body").addClass("dark");
            $(".settings-appearance-label").html("Dark Mode");
          }
      });
      var mode = Hocalwire.Services.GlobalService.getCookie("_USER_SETTINGS_MODE_");
      if(mode && mode=="dark"){
        $("body").addClass("dark");
      }
      // $(".obit-text-flex-cover .dropdown-icon i").on("click",function(){
      //   // $(".date-picker").trigger("click");
      //   $(".date-picker")[0].click()
      //   // $(".date-picker-x").addClass("active");
      // });
      $(".select-district-menu-ul li").on("click",function(){
        var value = $(this).attr("data-value");
        var date = Utils.getQueryParam("date_death_LIKE") || "";
        var urlBase = window.location.pathname;
        var urlFinal = urlBase+(value ? "?category_EQUAL="+value : "");
        if(date){
          if(value=="-1"){
              urlFinal = urlBase +(date?"?date_death_LIKE="+date:"");
          } else {
              urlFinal=urlFinal+(date ? "&date_death_LIKE="+date:"");
          }
        } else {
          if(value=="-1"){
              urlFinal = urlBase;
          } 
        }
        window.location.href=urlFinal;
      });
      var currentDatePicker = $(".date-picker").val();
      $(".date-picker.obit-picker").on("change",function(){
        var value = $(this).val();
        if(value){
          value = value.split("/").join("-");
        }
        if(value!=currentDatePicker){
  
            var categoryQuery = Utils.getQueryParam("category_EQUAL") || "";
            var urlBase = window.location.pathname;
            var urlFinal = urlBase+(value ? "?date_death_LIKE="+value:"");
            if(categoryQuery){
              urlFinal=urlFinal+(categoryQuery ? "&category_EQUAL="+categoryQuery:"");
            }
            window.location.href=urlFinal;
        }
        
      });
      // if(window.isIOS){ //remove OPED SLIDER for IPONE as its breaking
      //   $(".oped-section-wrap .scroll-on-mobile.first").removeClass("scroll-on-mobile");
      // }
      $(".remove-data-filters").on("click",function(){
        var categoryQuery = Utils.getQueryParam("category_EQUAL") || "";
        var urlBase = window.location.pathname;
        var urlFinal=urlBase;
        if(categoryQuery){
          urlFinal=urlFinal+"?category_EQUAL="+categoryQuery;
        }
          window.location.href = urlFinal;
      });
      epaperSubscriptionStuff();
      $(".mdl-layout__obfuscator-right").click(function() {
        $(".mdl-layout__drawer-right").removeClass("active");
        $(".mdl-layout__obfuscator-right").removeClass("ob-active");
      });
      $("#show_pass,#show_confirm_pass").on("click",function(){
        var isChecked = $(this).is(":checked");
        if(isChecked){
          $("#show_pass_label i").html("visibility_off");
        } else {
          $("#show_pass_label i").html("visibility");
        }
      });
      $("ul.ticker01").removeClass("hide").liScroll(); 
      $(".auth-desc-top-wrap .read-more-btn").on("click",function(){
          $(".author-description-box.small-description").addClass("hide");
          $(".author-description-box.big-description").removeClass("hide");
      });  
      $(".auth-desc-top-wrap .read-less-btn").on("click",function(){
          $(".author-description-box.small-description").removeClass("hide");
          $(".author-description-box.big-description").addClass("hide");
      });    
      $(".scroll-on-not-loaded").removeClass(".not-loaded");
      $(".site-search").click(function(){
          $(".search-hide, .s-overlay").fadeToggle()
        }); 
      $(".s-close").click(function(){
        $(".search-hide,.s-overlay").fadeOut()
      });
      $(".search-text-value").on("keyup",function(event){
          if (event.keyCode === 13) {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
             $(".search-now-btn").trigger("click");
        }
      });
      $("#left-drawer-nav").on("click",".plus_icon",function(e){
          e.stopPropagation();
          var childmenusel = $(this).attr("data-target");
          var parentselector = $(this).attr("data-target-parent");
          var parent = $(parentselector);
          var submenu = parent.find(childmenusel);
          if(!$(this).hasClass("opened")){
            submenu.addClass("show-me").removeClass("hide").show();
            $(this).addClass("opened").html("-");
          } else {
            submenu.removeClass("show-me").addClass("hide").hide();
            $(this).removeClass("opened").html("+");
          }
          
      });
  
          
          $('.search-btn').click(function () {
              $('.search-area').fadeIn();
          });
          $('.close-btn').click(function () {
              $('.search-area').fadeOut();
          }); 
          $(".search-now-btn").on("click",function(){
              var val = $(".search-text-value").val();
              window.location.href="/search?search="+val;
          });
          $(document).on("change","select.load-selected-cat-news-inline",function(){
              loadDropdownForParentCat($(this),$(this));
          });
          handleSubCatsMenuDropdown();
          
          // componentHandler.upgradeDom("MaterialRipple");
          // componentHandler.upgradeDom("MaterialLayout");
          // componentHandler.upgradeDom("MaterialMenu");
          // componentHandler.upgradeDom("MaterialButton");
          // componentHandler.upgradeElements($(".main")[0]);
          
          // componentHandler.downgradeElements(document.querySelector(".mdl-layout"));
          // componentHandler.upgradeDom("MaterialTabs");
          // MaterialMenu
          // componentHandler.upgradeElements($(".mdl-layout__drawer")[0]);
          
          // componentHandler.upgradeElements($("#content")[0]);
          if(isTabProDesk){
            resetIframeSizes();
              if($(".podcast-media-in-story").length){
                  resetIframeSizes($(".podcast-media-in-story"),true);
              }
            if($(".infite-scroll-item .top-video-grid .gallery-slider-wrapper").length){
            }else if($(".top-video-grid .gallery-slider-wrapper").length){
  
              var topV = $(".top-video-grid");
  
              
              var h = topV.find("img").height();
              if(h>0){
                topV.find(".media").attr("style","height:"+h+"px");
                var th = topV.find(".right-side-listing .title-bar").innerHeight();
                topV.find(".right-side-listing .list").attr("style","height:"+(h-th)+"px");
              }
              
            } else if(!$("#infinite-section").length) {
  
              var topV = $(".top-video-grid");
              var parentClasses=false;
              var toBeCloned = topV.find("iframe:first-child");
              if(toBeCloned.length && toBeCloned.attr("src") && toBeCloned.attr("src").indexOf("facebook.com")>-1){
                toBeCloned.parent().addClass("facebook-responsive");
              }
              if(!toBeCloned.length){
                toBeCloned = topV.find("video:first-child");
              } 
              if(!toBeCloned.length){
                toBeCloned = topV.find("audio:first-child");
              } 
              if(toBeCloned.length && toBeCloned.parent() && toBeCloned.parent().length){
                parentClasses = toBeCloned.parent().attr("class");
  
              }
              var h = topV.find("iframe:first-child").height();
              if(!h){
                h = topV.find("video:first-child").height();
              }
              if(!h){
                h = topV.find("audio:first-child").height();
              }
              if(h<250){
                h=250; //min 250 height
              }
              
              var e = topV.find("iframe:first-child").clone();  
              if(e && e.length){
                if(e.attr("src") && e.attr("src").indexOf("facebook.com")>-1){
                  parentClasses = parentClasses + " facebook-responsive";
                }
                topV.find(".media").html(e);
                var tp = $(".details-content-story").find("iframe:first-child").parent();
                if(tp.hasClass("facebook-responsive")){
                  tp.removeClass("facebook-responsive");
                }
                $(".details-content-story").find("iframe:first-child").remove();
              } else {
                e = topV.find("video:first-child").clone(); 
                if(e && e.length){
                  topV.find(".media").html(e);
                  $(".details-content-story").find("video:first-child").remove();
                } else {
                  e = topV.find("audio:first-child").clone(); 
                  if(e && e.length){
                    topV.find(".media").html(e);
                    $(".details-content-story").find("audio:first-child").remove();
                  }
                }
              }
  
              topV.find(".media").addClass(parentClasses);
              topV.addClass("modified");
  
              topV.find(".media").attr("style","height:"+h+"px");
  
              var th = topV.find(".right-side-listing .title-bar").innerHeight();
              topV.find(".right-side-listing .list").attr("style","height:"+(h-th)+"px");
            
            }
          } else {
              if(!$("#infinite-section").length) {
  
                var topV = $(".top-video-grid");
                var e = topV.find("iframe:first-child").clone();  
                if(e && e.length){
                  topV.find(".media").html(e);
                  $(".details-content-story").find("iframe:first-child").remove();
                } else {
                  e = topV.find("video:first-child").clone(); 
                  if(e && e.length){
                    topV.find(".media").html(e);
                    $(".details-content-story").find("video:first-child").remove();
                  }
                }
              }
          }
          $("body").on("click",".show-more-button-details-wrap", function(){
              var $this = $(this);
              var showMoreText = $this.attr("data-show-more-text");
              var showLessText = $this.attr("data-show-less-text");
              if($this.hasClass("expanded")){
                  $this.find(".material-icons").html("expand_more")
                  var item = $(this).closest(".infite-scroll-item")
                  item.find(".details-story-wrapper").addClass("closed");
                  // $this.parent().show();
                  $this.removeClass("expanded");
                  $this.find(".show-more-less-text").html(showMoreText);
                  var offset = $this.offset();
                  $('html, body').animate({
                      scrollTop: offset.top-300,
                  }, 100);
                  
              } else {
                  $(this).find(".material-icons").html("expand_less")
                  var item = $(this).closest(".infite-scroll-item")
                  item.find(".details-story-wrapper").removeClass("closed");
                  // $this.parent().hide();
                  $this.addClass("expanded");
                  $this.find(".show-more-less-text").html(showLessText);
                  // $this.addClass("hide");
              }
              
          });
          // setupMyCategoryFeeds();
          $(".menu-for-select li").on("click",function(){
              var $this=$(this);
              var parent = $this.parent();
              var select = $("#"+parent.attr("data-select-id"));
              var val = $this.attr("data-value");
              var dval = $this.attr("data-display-value");
              select.val(val);
              $(parent.attr("data-display-label")).find(".display_text").html(dval);
              if($this.attr("data-trigger-click-selector")){
                  $($this.attr("data-trigger-click-selector")).trigger("click");
              }
          });
          $(".delete-account-wrap").on("click",function(){
              Utils.showModalForView();
              var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;} .yes-delete-btn{background: #ccc;padding: 5px 10px;cursor:pointer;}</style>"
              var html = "<p class='bookmark-message align-center'> You sure want to delete account ? Once deleted, you will not be able to recover it</p><a class='yes-delete-btn mdl-button mdl-js-button'>Yes</a>";
              $("#modal-content .view-content").html(style+html);
              $(".yes-delete-btn").off("click");
              $(".yes-delete-btn").on("click",function(){
                  deleteAccount(callback);     
              });
              var callback = function(data){
                  var noReload=false;
                  Utils.showModalForView();
                  var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;} .yes-delete-btn{background: #ccc;padding: 5px 10px;cursor:pointer;}</style>"
                  var html = "<p class='bookmark-message align-center'> Account Deleted. Redirecting...</p>";
                  if(!data || data.errorCode=="-1"){
                      html = "<p class='bookmark-message align-center'> Error in deleting account. Try Again Later.</p>";
                      noReload=true;
                  }
                  $("#modal-content .view-content").html(style+html);
                  if(!noReload){
                      setTimeout(function(){
                          var random = parseInt(Math.random()*1000000);
                          var urlPrefix = "from-login="+random;
                          window.location.href="/?"+urlPrefix;
                      },3000);
                  }
              }
  
          });
          setupBookmarkNews();
          if(!isMobile && !isTab){
              covertSliderToDropdown(".page-navbar",".desktop-menu","ul.desktop-menu > li");
          }
          // $(".material-icons").show();
          
          var style = ".material-icons{opacity:1;}";
          var fontStyle = $("#icon-font-size");
          if(!fontStyle || !fontStyle.length){
              fontStyle = $("<style id='icon-font-size'></style>");
              $("body").append(fontStyle);
          }
          fontStyle.html(style);;
          
          $("#login-page #email,#login-page #password").on("keyup",function(event){
              if (event.keyCode === 13) {
                  event.preventDefault();
                  $(".js-btn-submit-login").trigger("click");
              }
          });
          $("#forgot-password-page #email").on("keyup",function(event){
              if (event.keyCode === 13) {
                  event.preventDefault();
                  $(".js-btn-submit-forgotPassword").trigger("click");
              }
          });
          setupEpaperSub();
          if(window.initPageSpecificMethod){
            window.initPageSpecificMethod();
          }
          $(".have-coupon").on("click",function(){
              if($(".coupon-row-wrap").hasClass("hide")){
                  $(".coupon-row-wrap").removeClass("hide");
              } else {
                  $(".coupon-row-wrap").addClass("hide");
              }
          });
          $(".js_validate_coupon").on("click",function () {
              var infoElement = $(".plan-element-for-submit");
              if(infoElement.attr("data-edition-mode") && infoElement.attr("data-edition-mode")=="offline"){
                  if(!window.isLoggedIn || window.isLoggedIn=="false"){
                      var userData = {
                          "firstName" : window.userData.sInfo.name,
                          "email" :window.userData.sInfo.email,
                          "mobile" : window.userData.sInfo.phone,
                          "password" : new Date().getTime(),
                          "country" : window.userData.sInfo.country,
                          "address" : window.userData.sInfo.address
                      }
                      registerUserForPrint(userData,checkValidateCouponCode);
                  } else {
                      checkValidateCouponCode();    
                  }
              } else {
                  if(!window.isLoggedIn || window.isLoggedIn=="false"){
                      window.location.href="/login?redirectUrl="+$(".plan-element-for-submit").attr("data-edition-url")+"&fromSub=true";
                  } else {
                      checkValidateCouponCode();    
                  }
              }  
          });
  
          $(".tear-share").on("click",function(){
            var a = $(this).closest(".share-as-clip");
            tearAndShareClip(a);
          });
          var event2 = new CustomEvent("THEME_LOADED", { "detail": "ALL THEME_LOADED LOADED" });
          document.dispatchEvent(event2);
          
    }
    function loadHtml2Canvas(callback){
        if(window.html2canvas){
          callback();
          return;
        }
        var head = document.getElementsByTagName("head")[0];
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "/theme_mdm/scripts/html2canvas.js";
        //- s.async = true;
        s.defer = true;
        s.addEventListener("load", function (e) {
           callback();
        }, false);
        head.appendChild(s);
      }
      function tearAndShareClip(a){
        var logoImage = new Image();
        logoImage.src = "/images/logo_epaper_clip.jpg?v="+Math.random();
        var callback = function(){
          var area = a[0].getBoundingClientRect(); 
          Utils.showLoader();
          var img = a.find(".story-image img");
          var src = img.attr("src");
          if(src.indexOf(".webp")>-1){
            img.on("load",function(){
                html2canvas(a[0],{
                  scrollX: 0,
                  scrollY: -window.scrollY,
                  // width: area.width,
                  // height: area.height-20,
                  windowWidth : 500,
                  useCORS: true,
                  allowTaint:true
                }).then(function(canvas){ 
                    a.find(".obit-list-bottom-social-icon").css("display","block");
                    var c = document.createElement("canvas");
                    c.width=1500;
                    c.height = 900;
  
                    var ow = canvas.width;
                    var oy = canvas.height;
  
                    var ar = ow/oy;
                    var destAr = 1200/700; //1200 max width and 600 max height;
                    
                    var x,y,w,h;
                    var arl = logoImage.width/logoImage.height;
                    if(destAr > arl){
                      h = 700;
                      w = parseInt(h*ar);
                      x = 150+parseInt((1200-w)/2);
                      y = 200;
                    } else {
                      w = 1200;
                      h = parseInt(w/ar);
                      x = 150;
                      y = 200+parseInt((700-h)/2);
                    } //width/height as per destination avaiable
                    
                    
                    
                    
                    var xl,yl,wl,hl;
                    var destArl = 1200/100; 
                    if(destArl > arl){
                      hl = 100;
                      wl = parseInt(hl*arl);
                      xl = 150+parseInt((1200-wl)/2);
                      yl = 100; //100 px from top
                    } else {
                      wl = 1200;
                      hl = parseInt(wl/arl);
                      xl = 150;
                      yl = 100+parseInt((100-hl)/2);
                    } //width/height as per destination avaiable
                    
                    
  
                    var ctx = c.getContext('2d');
                    ctx.fillStyle = "#FFF";
                    ctx.strokeStyle = "#FFF";
                    ctx.fillRect(0, 0, 1500, 900);
                    
                    var ctxS = canvas.getContext('2d');
                    
                    ctxS.strokeStyle = "#FFF";
                    ctxS.fillStyle = "#ffffff";
  
                    ctxS.fillRect(0, 0, canvas.width, canvas.height);
  
  
  
                    ctx.drawImage(canvas, 0, 0,ow,oy,x,y,w,h);
  
                    ctx.drawImage(logoImage, 0, 0,logoImage.width,logoImage.height,xl,yl,wl,hl);
                    
  
                    var dataUrl = c.toDataURL("image/png");
                    var title = a.find(".heading h4 a").html();
                    showModal(dataUrl,title);
  
                });
            });
            src = src.replace(".webp",".jpg");
            img.attr("src",src);
          } else {
              html2canvas(a[0],{
                scrollX: 0,
                scrollY: -window.scrollY,
                width: area.width,
                height: area.height
              }).then(function(canvas){ 
                  a.find(".obit-list-bottom-social-icon").css("display","block");
                  var dataUrl = canvas.toDataURL("image/png");
                  var title = a.find(".heading h4 a").html();
                  showModal(dataUrl,title);
              });
          }
          
          a.find(".obit-list-bottom-social-icon").css("display","none");
          
        }
        loadHtml2Canvas(callback);
  
      }
      function hideModal(){
          $("#modal-container").hide();
      }
      function getSocialIcons(){
        var whatsappHref=window.userDeviceType=="m" ? "whatsapp://send?text=##NEWS_ABSOLUTE_URL_ENCODED##": "https://api.whatsapp.com/send?text=##NEWS_ABSOLUTE_URL_ENCODED##";
          var social='<div class="arcticle-social-share"><span class="shareArticle clearfix"><span class="newsSocialIcons clearfix"><ul class="blog-share-socials"><li class="facebook"><a title="Facebook" href="http://www.facebook.com/share.php?u=##NEWS_ABSOLUTE_URL##" target="_blank"><img src="/images/social/facebook_icon.png" class="fb_social_icon_image social_icon_image"></a></li><li class="whatsapp"><a title="WhatsApp Share" href='+whatsappHref+'  target="_blank"><img src="/images/whatsapp.png"></a></li><li class="twitter"><a title="Twitter" href="http://twitter.com/intent/tweet?url=##NEWS_ABSOLUTE_URL_ENCODED##&amp;text=##NEWS_ENCODED_TITLE##" target="_blank"><img src="/images/social/twitter_icon.png" class="twitter_social_icon_image social_icon_image"></a></li><li class="telegram"><a title="telegram" href="https://t.me/share/url?url=##NEWS_ABSOLUTE_URL##" target="_blank"><img src="/images/social/telegram_icon.png" class="telegram_social_icon_image social_icon_image"></a></li><li class="linkedin"><a title="LinkedIn" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=##NEWS_ABSOLUTE_URL##&amp;title=##NEWS_TITLE##" target="_blank"><img src="/images/social/linkedin_icon.png" class="linkedin_social_icon_image social_icon_image"></a></li><li class="pinterest"><a title="Pinterest" href="http://pinterest.com/pin/create/button/?url=##NEWS_ABSOLUTE_URL##" target="_blank"><img src="/images/social/pintrest_icon.png" class="pintrest_social_icon_image social_icon_image"></a></li><li class="email"><a href="javascript: void(0);" data-domain="##DOMAIN##" data-url="##NEWS_ABSOLUTE_URL##" title="Share by Email" class="js-share-article-by-email"><img src="/images/social/mail_icon.png"></a></li></ul></span></span><div class="clear-float"></div></div>';
          return social;
      }
      function sendEmailBind(){
        var $sendEmail = $(".js-share-article-by-email");
        if(!$sendEmail || !$sendEmail.length){
            return;
        }
        $sendEmail.off("click");
        $sendEmail.on("click",function(){
            var $e = $(this);
            var url = $e.data("url");
            var domain = $e.data("domain");
            if(url.indexOf(domain)==0){
                url = url.substring(url.indexOf(domain)+domain.length,url.length);    
            }
            
            var finalUrl = domain+"/share/send-article-by-email?url="+url;
            var height = 500;
            var width = 800;
            if(Hocalwire.isTabletSize){
                height=400;
                width=600;
            } else if(Hocalwire.isMobileSize){
                height=300;
                width=300;
            }
            
            if(url){
                window.open(finalUrl,"Share By Email","height="+height+",width="+width);
            }
        });
    }
      function insertSocialItems(modal,url,title) {
          var social = getSocialIcons();
          var domain = $("#content").attr("data-root");
          var encodedUrl = encodeURIComponent(url);
          var title = encodeURIComponent(title);
          social = social.replace(/##NEWS_ABSOLUTE_URL##/g, url);
          social = social.replace(/##NEWS_ABSOLUTE_URL_ENCODED##/g, encodedUrl);
          social = social.replace(/##DOMAIN##/g, domain);
          social = social.replace(/##NEWS_TITLE##/g, title);
          // social = social.replace(/##NEWS_TITLE_##/g, title);
  
          modal.find("#modal_social").html(social).removeClass("hide");
          modal.find("#modal_bottom").html("<span class='link-to-share'>Link : <a href='"+url+"'>"+url+"</a></span>").removeClass("hide");
      }
      function getModalHtml(url,title){
          if(!title){
              title = "Share you clip now"
          }
          var modal = '<div id="modal-container"><div id="epaper_modal" class="reveal-modal">';
          modal+='<span id="modal_close" class="close-btn model-item1">X</span>';
          modal+='<h4 id="modal_heading" class="hide model-item"></h4>';
          modal+='<p id="modal_desc" class="hide model-item"></p>';
          modal+='<div id="modal_img_parent"><img id="modal_img" class="hide model-item"></img></div>';
          modal+='<iframe id="modal_iframe" class="hide model-item"></iframe>';
          modal+='<div id="modal_bottom" class="hide model-item"></div>';
          modal+='<div id="modal_social" class="hide model-item"></div>';
          modal+="</div></div>";
          return modal;
  
      }
      function showModal(img,title){
          
          if($("#modal-container").length){
              var modal = $("#modal-container");
              modal.show();
              modal.find(".model-item").addClass("hide");
              modal.show();
              modal.find("#modal_img").attr("src","/images/fancybox_loading.gif").removeClass("hide");
              modal.find("#modal_close").off("click");
              modal.find("#modal_close").on("click",function(){
                  hideModal();
              });
              uploadImage(img,modal,title);
              return;
                 
          }
          var modaldata = getModalHtml();
  
          $("#MODAL_DIALOG_PLACEHOLDER").html($(modaldata));
          var modal = $("#modal-container");
          modal.find("#modal_close").off("click");
          modal.find("#modal_close").on("click",function(){
              hideModal();
          });
          modal.show();
          modal.find("#modal_img").attr("src","/images/fancybox_loading.gif").removeClass("hide");
          uploadImage(img,modal,title);
          
      }
      function uploadImage(data,modal,title){
        var partner = $("#content").data("partner");
        var sessionid = $("#content").data("sessionid");
        var domain = $("#content").attr("data-root");
        var uploadurl = domain+"/content/servlet/RDESController?command=rdm.FileUpload&app=rdes&partner="+partner+"&uploadType=22&sessionId="+sessionid+"&disable_compress=true";
        var formdata = new FormData();
        var blobBin = atob(data.split(',')[1]);
        var array = [];
        for(var i = 0; i < blobBin.length; i++) {
            array.push(blobBin.charCodeAt(i));
        }
        var file=new Blob([new Uint8Array(array)], {type: 'image/png'});
        formdata.append("tear_and_share_data", file);
        $.ajax({
            data: formdata,
            type: 'POST',
            async:true,
            
            url: uploadurl,
            cache: false,
            contentType: false,
            processData: false,
           
            xhr: function()
            {
                var myXhr = $.ajaxSettings.xhr();
                return myXhr;
                
            },
            // 19286eOV4cg5PVhUgv3eEx8bbr8qNAi3pBbIh0810806
            success: function(datax) {
                var domain = $("#content").attr("data-root");
                var url = domain+"/image-preview/"+datax;
                var mediaUrl=domain+"/h-upload/uid/"+datax+".jpg";
                insertSocialItems(modal,url,title);
                modal.find("#modal_img").attr("src",mediaUrl).removeClass("hide");
                setInterval(function(){
                  var rand = Math.random();
                  $("#modal-container").find("modal_iframe").attr("src",url+"?rand="+rand);  
                },5000);
                
                sendEmailBind();
                Utils.hideLoader();
                // console.log(datax);
            },
            error: function(error) {
                alert("error in saving clip");
                Utils.hideLoader();
            }
        });
            
      }
    function checkValidateCouponCode(){
      var code = $("#coupon_code").val();
              
      if(!code){
          $active.$(".error_coupon_empty_code").html("Code Empty").removeClass("hide");
          return;
      }
      setupUserDetails();
      var planId = window.userData.planInfo['id'];
      var url = "/xhr/admin/user/submit-coupon-code?code="+code+"&txnid=&planId="+planId; // the script where you handle the form input.
      Utils.showLoader(5000);    
      Hocalwire.Services.get(url).then(
          function(data){
              Utils.hideLoader();
              if(data.errorCode == 0) {
                  var dd = {};
                  if(data.data){
                      dd=JSON.parse(data.data);
                  }
                  console.log(dd);
                  applyCouponCode(dd);
              } else {
                  $("#coupon_code").attr("is-validated",false);
                  $('.error_coupon_empty_code').html("Error occured. Try Again").removeClass("hide");
                  if(data.errorCode == -18){
                    $('.error_coupon_empty_code').html("Error occured. Try Again").removeClass("hide");
                  }
              }
          },
  
          function(e) {
              $("#coupon_code").attr("is-validated",false);
              $('.error_coupon_empty_code').html("Error occured. Try Again").removeClass("hide");
          }
      );
      
    }
    function covertSliderToDropdown(container,parent,selector){
      $(container).addClass("js-menu-overflow");
      var cl = $(container).width();
      var childs = $(selector);
      var ll = 0;
      var extraItems = [];
      for(var i=0;i<childs.length;i++){
          ll = ll+ $(childs[i]).width();
          if(ll>cl-10 || i>=8){
              extraItems.push($(childs[i]));
              $(childs[i]).remove();
          }
      }
      if(extraItems.length){
          var radom = parseInt(Math.random()*5000);
          var ss = "<ul class='list-wrap mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events' for='more-menu-extends"+radom+"')>";
          for(var i=0;i<extraItems.length;i++){
              var href = extraItems[i].find("a").attr("href");
              var label = extraItems[i].find("a").html();
              ss = ss+"<li class='dropdown-item-wrap mdl-menu__item mdl-js-ripple-effect'><a class='more-anchor' href='"+href+"'>"+label+"</a></li>";
          }
          ss = ss+"</ul>";
          $(parent).append("<li class='more-items-in-menu'><button id='more-menu-extends"+radom+"' class='more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect mdl-cell--hide-phone show-more-items-from-menu'><i class='material-icons'>more_horiz</i></button>"+ss+"</li>");
          $(".drodown-menu-items-wrapp").html(ss);
          // $(".show-more-items-from-menu").on("click",function(){
          //     var menu = $(".drodown-menu-items-wrapp");
          //     if(menu.hasClass("hide")){
          //         menu.removeClass("hide");
          //     } else {
          //         menu.addClass("hide");
          //     }
          // })
      }
    }
    function deleteAccount(callback){
      var pdata = {};
      Hocalwire.Services.post("/xhr/admin/user/delete-my-account",pdata)
          .then(function(data) {
              callback(data);
          },
          function(data) { 
              Utils.hideLoader();
              callback("");
          }
      );
    }
    function resetIframeSizes(data,allIframe) {
        var f = data ? data.find("iframe") : $("iframe");
        for(var i=0;i<f.length;i++){
            var ff = $(f[i]);
            var src = ff.attr("src");
            if(!allIframe && (!src || !(src.indexOf("www.youtube.com")>-1))){
                // alert("no iframe of youtube");
                continue;
            }
            var width = ff.width();
            var height = parseInt(width * (9/16));
            // alert(height);
            ff.attr("style","height:"+height+"px;");
            
        }
    }
  
    function bindHorSlider(el){
      var $el = getItem(el)();
      $el.removeClass("not-loaded");
      var responsiveValue = [
                {
                    breakpoint:800,
                    settings: {
                        item:1,
                        slideMove:1,
                        slideMargin:6,
                      }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ];
        var slider = $el.lightSlider({
            item:$el.attr("data-item")||4,
            auto:false,
            loop:false,
            slideMove:1,
            pager:false,
            controls:true,
            speed:600,
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:1,
                        slideMove:1,
                        slideMargin:6,
                      }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ],
            onSliderLoad: function(el) {
                var maxHeight = 0,
                    container = $(el),
                    children = container.children();
  
                children.each(function () {
                    var childHeight = $(this).height();
                    if (childHeight > maxHeight) {
                        maxHeight = childHeight;
                    }
                });
                if(window.Hocalwire.isDesktopSize){
                  container.find("img").attr("style","height:150px;");
                } else {
                  container.find("img").attr("style","height:250px;");
                }
                
                container.height(maxHeight+30);
                container.width(container.width()+40);
  
            }
            
        }); 
        if($el.attr("cdata-top")){
          $($el.attr("cdata-top")).on("click",function(){
            slider.goToPrevSlide();
          });
        }
        if($el.attr("cdata-bottom")){
          $($el.attr("cdata-bottom")).on("click",function(){
            slider.goToNextSlide();
          });
        }
        
        
    }
  
    function getItem(el){
      return function(){
        return $(el);
      }
    }
    
  
    function setupEpaperSub(){
  
      updateSubCost();
      var planSelect = $(".plan-select-dropwdown li");
      planSelect.on("click",function(){
        var $this = $(this);
        var planId = $this.attr("data-planid");
        var planDisplay = $this.attr("data-plan-display");
        var planDdesc = $this.attr("data-plan-desc");
        var planPriceNumber = $this.attr("data-plan-price"); 
  
        var $parent = $this.closest(".plan-select-parent");
        var checkBoxSelect = $parent.find(".plan-select-input");
        var dispay = $parent.find(".plan-select-display");
        var price = $parent.find(".selected-plan-display-value");
        checkBoxSelect.val(planId);
        checkBoxSelect.attr("checked","true");
        checkBoxSelect.attr("data-plan-price",planPriceNumber);
        checkBoxSelect.attr("data-planid",planId);
        checkBoxSelect.attr("data-plan-name",$this.attr("data-plan-name"))
        checkBoxSelect.attr("data-edition-name",$this.attr("data-edition-name"))
        dispay.html(planDisplay);
        price.html(planDdesc)
        updateSubCost();
      });
      $(".plan-select-input").on("change",updateSubCost);
      var selectedPlans = Utils.getQueryParam("selectedplans");
      if(!selectedPlans){
        selectedPlans = Hocalwire.Services.GlobalService.getCookie("_selected_plan_ids_");
      }
      if(selectedPlans){
        var a = selectedPlans.split(",");
        for(var i=0;i<a.length;i++){
          $(".select-a-plan-"+a[i]).trigger("click");
        }
      }
    }
    function updateSubCost(){
      var pInp = $(".plan-select-input");
      var price=0;
      var planIds = "";
      var planNames="";
      var editionNames="";
      for(var i=0;i<pInp.length;i++){
          var ck = $(pInp[i]);
          if(ck.is(":checked")){
              var pp = parseInt(ck.attr("data-plan-price") || 0);
              price = price +pp;
              planIds = (!planIds ? ck.attr("data-planid") : planIds+","+ck.attr("data-planid"));
              planNames = (!planNames ? ck.attr("data-plan-name") : planNames+","+ck.attr("data-plan-name"));
              editionNames = (!editionNames ? ck.attr("data-edition-name") : editionNames+","+ck.attr("data-edition-name"));
          }
      }
      $(".actual-amount-value").html(price);
      if(price>0){
          $(".open-billing-details").addClass("enabled").removeClass("disabled");
      } else {
          $(".open-billing-details").removeClass("enabled").addClass("disabled");
      }
  
      Hocalwire.Services.GlobalService.setCookie("_selected_plan_ids_",planIds,{"path":"/","expires":new Date(new Date().getTime()+(7*24*60*60*1000))});
      $(".plans-select-box").attr("data-planid",planIds);
      $(".plans-select-box").attr("data-amount",price);
      $(".plans-select-box").attr("data-name",planNames);
      $(".plans-select-box").attr("data-duration",editionNames);
  
      $(".plan-element-for-submit").attr("data-planid",planIds);
      $(".plan-element-for-submit").attr("data-amount",price);
      $(".plan-element-for-submit").attr("data-name",planNames);
      $(".plan-element-for-submit").attr("data-duration",editionNames);
  
    }
    function epaperSubscriptionStuff(){
  
      // var isLoggedIn=window.isLoggedIn;
      // if(isLoggedIn){
        
      // }
      bindForRazorPay();
      $(".subscription-page").on("click",".open-billing-details.disabled",function(){
          Utils.showModalForView();
          var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
          var html = "<p class=' bookmark-message align-center'>Please select a plan to continue.. </p>";
          $("#modal-content .view-content").html(style+html);
          return;
      });
      $(".billing-country").on("change",function(){
        var val = $(this).val();
        if(val.toLowerCase()=="india"){
          $(".same-as-billing-wrap").removeClass("hide");
        } else {
          $(".same-as-billing-wrap").addClass("hide");
        }
        if(val=="Other"){
          $(".other-country-name").removeClass("hide");
        } else {
          $(".other-country-name").addClass("hide").val("");
        }
      });
      $(".subscription-page").on("click",".open-billing-details.enabled",function(){
        var infoElement = $(".plan-element-for-submit");
        // captureBillingDetails($this);
        if(infoElement.attr("data-edition-mode") && infoElement.attr("data-edition-mode")=="offline"){
          $(".billing-forms-wrap").removeClass("hide");
          var offset = $(".billing-forms-wrap").offset();
          $('html, body').animate({
              scrollTop: offset.top-100,
          }, 100);
          
          $(".issue-detail").addClass("hide");
  
          captureBillingDetails();
  
          
  
        } else {
          if(window.isLoggedIn=='true'){
            setupUserDetails();
            $(".js_checkout_button_rajorpay").trigger("click");
          } else {
            window.location.href="/login?redirectUrl="+$(".plan-element-for-submit").attr("data-edition-url")+"&fromSub=true";
          }
          
          // setupUserDetails();
          // $(".js_checkout_button_rajorpay").trigger("click");
        }
      });
      
      $(".subscription-page").on("click",".open-billing-info-select",function(){
        $(".billing-forms-wrap").removeClass("hide");
        $(".billing-preview-wrap").addClass("hide");
        var offset = $(".billing-forms-wrap").offset();
          $('html, body').animate({
              scrollTop: offset.top-100,
          }, 100);
      });
      $(".subscription-page").on("click",".open-plan-select",function(){
          $(".issue-detail").removeClass("hide");
          $(".billing-forms-wrap").addClass("hide");
          $(".billing-preview-wrap").addClass("hide");
          var offset = $(".issue-detail").offset();
          $('html, body').animate({
              scrollTop: offset.top-100,
          }, 100);
      });
      
    }
    function setupUserDetails(){
      $planElem = $(".plan-element-for-submit");
      var phone = window.userDataToBePassedBack ? window.userDataToBePassedBack.phoneNo : "";
      var email = window.email;
      window.userData = {};
      userData['bInfo'] = {};
      userData['sInfo'] = {};
      userData['perInfo'] = window.userDataToBePassedBack || {};
  
      userData['planInfo'] = {};
      userData['planInfo']['name'] = $planElem.attr("data-name") || "Mixed";
      userData['planInfo']['duration'] = $planElem.attr("data-duration") || "Mixed Duration";
      userData['planInfo']['amount'] = $planElem.attr("data-amount");
      userData['planInfo']['id'] = $planElem.attr("data-planid");
    }
    function captureBillingDetails($planElem){
      // if(!$planElem){
      
      var offset = $(".billing-wrap").offset();
      $('html, body').animate({
          scrollTop: offset.top-100,
      }, 100);
      $planElem = $(".plan-element-for-submit");
      // }
      var phone = window.userDataToBePassedBack ? window.userDataToBePassedBack.phoneNo : "";
      var email = window.email;
      var name = window.userDataToBePassedBack  && window.userDataToBePassedBack.loggedInAs ? window.userDataToBePassedBack.loggedInAs : (window.loggedInAs || "");
      
      $(".billing-forms-wrap").removeClass("hide");
      $(".billing-preview-wrap").addClass("hide");
  
      $(".billing-forms-wrap .billing-address").find(".email").val(email);
      $(".billing-forms-wrap .shipping-address").find(".email").val(email);
  
  
      $(".billing-forms-wrap .billing-address").find(".email").val(email);
      $(".billing-forms-wrap .shipping-address").find(".email").val(email);
  
      $(".billing-forms-wrap .billing-address").find(".name").val(name);
      $(".billing-forms-wrap .shipping-address").find(".name").val(name);
      window.userData = {};
      userData['bInfo'] = {};
      userData['sInfo'] = {};
      userData['perInfo'] = window.userDataToBePassedBack || {};
      userData['perInfo']['name'] = userData['perInfo']['loggedInAs'];
  
      userData['planInfo'] = {};
      userData['planInfo']['name'] = $planElem.attr("data-name") || "Mixed";
      userData['planInfo']['duration'] = $planElem.attr("data-duration") || "Mixed Duration";
      userData['planInfo']['amount'] = $planElem.attr("data-amount");
      userData['planInfo']['id'] = $planElem.attr("data-planid");
      var getInfo = function(wrap,o){
          o['name'] = wrap.find(".name").val();
          o['address'] = wrap.find(".address").val();
          o['city'] = wrap.find(".city").val();
          o['country'] = wrap.find(".country").val();
          o['ocountry'] = wrap.find(".ocountry").val();
          o['zip'] = wrap.find(".zip").val();
          o['state'] = wrap.find(".state").val();
          o['email'] = wrap.find(".email").val();
          o['phone'] = wrap.find(".phone").val();
          o['countryCode'] = wrap.find(".country-code").val();
        }
        var setInfo = function(wrap,o,preview,ignoreCountryCode){
          wrap.find(".name").html(o['name']|| "") ;
          wrap.find(".address").html(o['address']|| "") ;
          wrap.find(".city").html(o['city']) || "";
          wrap.find(".country").html(o['country']|| "") ;
          if(o['country'] && o['country'].toLowerCase()=="other" && o['ocountry']){
            wrap.find(".country").val(o['ocountry'] || "");  
          }
          wrap.find(".zip").html(o['zip']) || "";
          if(preview){
            wrap.find(".state").html(o['state'] || "");
          } else {
            wrap.find(".state").val(o['state'] || "");  
          }
          
          wrap.find(".email").html(o['email'] || "");
          wrap.find(".phone").html(o['phone'] || "");
          if(!ignoreCountryCode){
            wrap.find(".country-code").html(o['countryCode'] || "");
          }
        }
        var setInfo2 = function(wrap,o,preview,ignoreCountryCode){
          wrap.find(".name").val(o['name'] || "");
          wrap.find(".address").val(o['address'] || "");
          wrap.find(".city").val(o['city'] || "");
          wrap.find(".country").val(o['country'] || "");
          if(o['country'] &&  o['country'].toLowerCase()=="other" && o['ocountry']){
            wrap.find(".country").val(o['ocountry'] || "");  
          }
          
          wrap.find(".zip").val(o['zip']) || "";
          wrap.find(".state").val(o['state'] || "");
          wrap.find(".email").val(o['email'] || "");
          wrap.find(".phone").val(o['phone'] || "");
          if(!ignoreCountryCode){
            wrap.find(".country-code").val(o['countryCode'] || "");
          }
        }
      $("#same-as-billing").off("change");
      $("#same-as-billing").on("change",function(){
          var isChecked = $(this).is(":checked");
          if(isChecked){
            getInfo($(".billing-forms-wrap .billing-address"),userData['bInfo']);
            setInfo($(".billing-forms-wrap .shipping-address"),userData['bInfo'],false,true);
            setInfo2($(".billing-forms-wrap .shipping-address"),userData['bInfo'],false,true);
          }
      });
      $(".submit-billing-details").off("click")
      $(".submit-billing-details").on("click",function(){
        
        
        
        var billingWrap = $(".billing-address");
        var shippingWrap = $(".shipping-address");
        
        getInfo($(".billing-forms-wrap .billing-address"),userData['bInfo']);
        getInfo($(".billing-forms-wrap .shipping-address"),userData['sInfo']);
        
        // var cBV = $(".billing-forms-wrap .billing-address .country-code").val();
        // var cSV = $(".billing-forms-wrap .shipping-address .country-code").val();
        
        // userData['bInfo']['countryCode']=cBV;
        // userData['sInfo']['countryCode']=cSV;
  
        // if(userData['bInfo']['phone'].indexOf("+")<0){
        //   userData['bInfo']['phone'] = "+"+cBV+userData['bInfo']['phone'];
        // }
        // if(userData['sInfo']['phone'].indexOf("+")<0){
        //   userData['sInfo']['phone'] = "+"+cSV+userData['bInfo']['phone']; 
        // }
  
        setInfo($(".billing-preview-wrap .billing-address"),userData['bInfo'],true);
        setInfo($(".billing-preview-wrap .shipping-address"),userData['sInfo'],true);
        
        if(!userData['sInfo'].zip || !userData['sInfo'].state || !userData['sInfo'].address || !userData['sInfo'].phone || !userData['sInfo'].email || !userData['sInfo'].name || !userData['sInfo'].city){
          Utils.showModalForView();
          var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
          var html = "<p class=' bookmark-message align-center'>Please fill the mandatory information before proceeding</p>";
          $("#modal-content .view-content").html(style+html);
        } else {
            $(".billing-preview-wrap").find(".plan-details .name").html(userData['planInfo']['name']);
            $(".billing-preview-wrap").find(".plan-details .description").html(userData['planInfo']['duration']);
            $(".billing-preview-wrap").find(".plan-details .amount").html(userData['planInfo']['amount']);
            
           
            $(".billing-forms-wrap").addClass("hide");
            $(".billing-preview-wrap").removeClass("hide");
            var offset = $(".billing-preview-wrap").offset();
            $('html, body').animate({
                scrollTop: offset.top-100,
            }, 100);
        }
  
        
          
      });
      $(".paynow-btn-submit").off("click");
      $(".paynow-btn-submit").on("click",function(){
          if(!window.isLoggedIn || window.isLoggedIn=="false"){
              userData['perInfo'] = userData['bInfo'];
          }
         $(".js_checkout_button_rajorpay").trigger("click"); 
      });
    
    }
      
  })(); 
  function applyCouponCode(data){
          // console.log("apply coupon called");
          var isValid = data.is_valid;
          if(isValid == 'true') {
              $("#coupon_code").attr("is-validated",true);
              var discountMessage = data.discount_display;
              
              // $(".js_validate_coupon").attr("disabled",true);
              // $(".js_validate_coupon").off("click");
              var message = "<b>Congratulations !!! </b><br>"+discountMessage;
              $('.discount_message').html(message).removeClass("hide");
              $('.discount-amount-final').html(data.amount);
              $(".final-amount-row").removeClass("hide");
              $(".or-text-label").addClass("hide");
              var btn = $(".js_checkout_button_rajorpay");
              if(btn && btn.length){
                  btn.attr("data-coupon-id",data.coupon_code);
              }
          } else {
              var btn = $(".js_checkout_button_rajorpay");
              if(btn && btn.length){
                  btn.attr("data-coupon-id","");
              }
              $('.discount_message').html("Unable to apply your coupon. Your Coupon Code is not valid or expired. Please contact support for any queries.").removeClass("hide");
          }
  
      }
  
  
  function updatePaymentDetails(responseData,btn,loggerProps){
          var postData = function(pdata){
              var success = function(data){
                  if(window.enableThankyouPage && window.enableThankyouPage!="false"){
                    if(window.thankyouPageUrl){
                      window.location.href = window.thankyouPageUrl
                    }else{
                      window.location.href = '/user/subscription/complete'
                    }
                    return;
                  } else {
                    loggerProps = loggerProps || {};
                    loggerProps.stage="SUCCESS - Razorpay response sent success to server";
                    Utils.logClientDetails(loggerProps);
                    // $(".e-cart-order-box").addClass("hide");
                    // $(".issue-detail").addClass("hide");
                    Utils.showModalForView();
                    
                    var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                    var html = "<p class=' bookmark-message align-center'>Thank you. You Subscription is successful. Redirecting...</p>";
                    $("#modal-content .view-content").html(style+html);
                    var rUrlTemp = Hocalwire.Services.GlobalService.getCookie("_redirect_url_temp_"); 
                    if(rUrlTemp){
                      setTimeout(function(){
                          window.location.href = rUrlTemp;
                          Hocalwire.Services.GlobalService.setCookie("_redirect_url_temp_",rUrl,{"path":"/","expires":new Date(new Date().getTime()+(1000))});
                      },2000);
                    } else {
                      setTimeout(function(){
                          window.location.href = "/user/profile";
                      },2000);
                    }
                  }
                  
              }
              
              var fail = function(data){
                  loggerProps = loggerProps || {};
                  loggerProps.stage="FAILED - Razorpay response sent failed to server";
                  Utils.logClientDetails(loggerProps);
                  Utils.showModalForView();
                  
                  var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                  var html = "<p class=' bookmark-message align-center'>Failed. You Subscription is request is failed. Please contact support team or try again.</p>";
                  $("#modal-content .view-content").html(style+html);
                  
              }
              var urlVars = Utils.getUrlVars();
                              
              if(urlVars.contentId && urlVars.contentId!="null" && urlVars.contentId!="undefined"){
                  pdata['contentId']=urlVars['contentId'];
              }
              if(urlVars.userId && urlVars.userId!="null" && urlVars.userId!="undefined"){
                  pdata['userId']=urlVars['userId'];
              }
              loggerProps = loggerProps || {};
              loggerProps.stage="Razorpay response sending to server";
              for(var k in pdata){
                  loggerProps[k]=pdata[k];
              }
              Utils.logClientDetails(loggerProps);
              Utils.showLoader(5000);      
              Hocalwire.Services.post("/xhr/admin/user/submitPaymentInfo",pdata)
                  .then(function(data) {
                      Utils.hideLoader();
                      success(data);
                  },
                  function(data) { 
                      Utils.hideLoader();
                      fail(data);
                  }
              );
  
          };
          console.log("sending payment infor to server");
          var txnId = btn.attr("data-txnid");
          var data = loggerProps || {};
          data["txnId"] = data["txnId"] || txnId;
          data["paymentId"] = responseData.razorpay_payment_id;
          data["orderId"] = responseData.razorpay_order_id;
          data["signatureId"] = responseData.razorpay_signature;
          
          postData(data);
      }
      function getCheckoutPlanData(pdata,callback){
        Hocalwire.Services.post("/xhr/admin/user/getCartCheckoutPageDataJSON",pdata)
            .then(function(data) {
                Utils.hideLoader();
                callback(data);
            },
            function(data) { 
                Utils.hideLoader();
                callback();
            }
        );
        
      }
      function bindForRazorPay(){
          var btn = $(".js_checkout_button_rajorpay");
         
          if(!btn.length){
              return;
          }
          var submitForPayment = function(rData){
              if(rData && rData.paymentData){
                  if(rData.paymentData.auto_subscribe && rData.paymentData.auto_subscribe=="true"){
                    if(window.enableThankyouPage && window.enableThankyouPage!="false"){
                      if(window.thankyouPageUrl){
                        window.location.href = window.thankyouPageUrl
                      }else{
                        window.location.href = '/user/subscription/complete'
                      }
                      return;
                    }else{
                      Utils.showModalForView();
                      var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                      var html = "<p class=' bookmark-message align-center'>Thank you. You Subscription is successful. Redirecting...</p>";
                      $("#modal-content .view-content").html(style+html);
                      if(rUrlTemp){
                        setTimeout(function(){
                            window.location.href = rUrlTemp;
                            Hocalwire.Services.GlobalService.setCookie("_redirect_url_temp_",rUrl,{"path":"/","expires":new Date(new Date().getTime()+(1000))});
                        },2000);
                      } else {
                        setTimeout(function(){
                            window.location.href = "/user/profile";
                        },2000);
                      }
                      // setTimeout(function(){
                      //     window.location.href = "/user/profile";
                      // },2000);
                      return;
                    }
                  }
                if(rData.paymentData.p_tid){
                  btn.attr("data-txnid",rData.paymentData.p_tid);
                }
                if(rData.paymentData.p_order_id){
                  btn.attr("data-order-id",rData.paymentData.p_order_id);
                }
              }
  
              var brandName = btn.attr("data-name") || userData['perInfo']['brand_name'] || "Madhyamam";
              var desc = btn.attr("data-desc") || userData['planInfo']['description'];
              var currency = btn.attr("data-currency");
              var userName = btn.attr("data-username") || window.loggedInAs || "Payment User";
              var orderId = btn.attr("data-order-id");
              var txnId = btn.attr("data-txnid");
              var phone = btn.attr("data-phone") || userData['perInfo']['phoneNo'] || userData['perInfo']['phone'];
              var email = btn.attr("data-email") || userData['perInfo']['email'];
              var amount = btn.attr("data-amount") || userData['planInfo']['amount'];;
              var planId = btn.attr("data-planid") || userData['planInfo']['id'];
              amount = parseInt(amount)*100; //send in paisa
              var loggerProps = {"phone":phone,"email":email,"amount":amount,"txnId":txnId,"orderId":orderId,"userName":userName,"brandName":brandName,"planIds":planId};
              
              var options = {
                  "key": window.razorpay_key,
                  "amount": amount, /// The amount is shown in currency subunits. Actual amount is ₹599.
                  "name": brandName,
                  "prefill": {
                      "email": email,
                      "contact": phone
                  },
                  'planIds':planId,
                  "order_id":orderId,
                  "currency": currency, // Optional. Same as the Order currency
                  "description": desc,
                  "image":window.location.origin+"/images/logo.png",
                  "handler": function (response){
                      loggerProps.stage="Razorpay response received";
                      Utils.logClientDetails(loggerProps);
                      updatePaymentDetails(response,btn,loggerProps);
                  },
                  "theme": {
                      "color": "#F37254"
                  }
              };
              loggerProps.stage="Razorpay initialized";
              Utils.logClientDetails(loggerProps);
              var rzp1 = new Razorpay(options);
              rzp1.open();
          }
          btn.on("click",function(e){
              if(!window.isLoggedIn || window.isLoggedIn=="false"){
                  window.userData['perInfo'] = window.userData['bInfo'];
              }
              var o = {};
              if(window.userData.bInfo){
                window.userData.bInfo['prefix_key'] = "b_";
              }
              if(window.userData.sInfo){
                window.userData.sInfo['prefix_key'] = "s_";
              }
              o['planId'] = window.userData.planInfo['id'];
              // o['couponCode'] = window.userData.planInfo['id'];
              o['billing_details'] = window.userData.bInfo || {};
              o['shipping_details'] = window.userData.sInfo || {};
              o['personalInfo'] = window.userData.perInfo || "";
              if($(this).attr("data-coupon-id")){
                  o['couponCode'] = $(this).attr("data-coupon-id");
              }
              if(!window.isLoggedIn || window.isLoggedIn=="false"){
                var callbackfn = function(status){
                  if(status=="0"){
                    getCheckoutPlanData(o,submitForPayment);
                  } else {
                    Utils.showModalForView();
                    var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                    var html = "<p class=' bookmark-message align-center'>Error in register. Please <a href='/login' target='_blank'>login</a> if already registered.</p>";
                    $("#modal-content .view-content").html(style+html);
                  }
                }
                var userData = {
                  "firstName" : window.userData.sInfo.name,
                  "email" :window.userData.sInfo.email,
                  "mobile" : window.userData.sInfo.phone,
                  "password" : new Date().getTime(),
                  "country" : window.userData.sInfo.country,
                  "address" : window.userData.sInfo.address
                }
                registerUserForPrint(userData,callbackfn);
  
              } else {
                getCheckoutPlanData(o,submitForPayment);
              }
              
  
          });
      }
      function registerUserForPrint(userData,callback){
        var url = window.Constants.url.xhrVerify ? window.Constants.url.xhrRegister :  "/xhr/admin/register"; // the script where you handle the form input.
        var options = {
            'contentType' : 'application/x-www-form-urlencoded; charset=utf-8'
        };
        Hocalwire.Services.post(url,userData,options).then(
            function(data){
                  if(data.errorCode=="0"){
                      window.isLoggedIn="true";
                  }
                callback(data.errorCode);
            },
  
            function(e) {
                callback("-1");
            }
        );
      }
      function setupBookmarkNews(){
          $("body").on("click",".bookmark-news-item",function(){
              var id = $(this).attr("data-newsid");
              var url = $(this).attr("data-url");
  
              if(!window.isLoggedIn || window.isLoggedIn=="false"){
                  Utils.showModalForView();
                  var loginUrl = "/login?redirectUrl="+url;
                  var registerUrl = "/register?redirectUrl="+url;
                  var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                  var html = "<p class=' bookmark-message align-center'>Please <a style='color:red;' href='"+loginUrl+"'>Login</a> or <a style='color:red;' href='"+registerUrl+"'>Register</a> to save the story</p>";
                  $("#modal-content .view-content").html(style+html);
                  return;
              }
              var $this = $(this);
              if(id){
                  var data = {"newsIds":id}
                  $this.addClass("disabled");
                  Hocalwire.Services.post("/xhr/admin/user/bookmark-news",data)
                      .then(function(data) {
                          $this.removeClass("disabled");
                          var eCode = data.errorCode || 0
                          Utils.showModalForView();
                          var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                          var html = "<p class=' bookmark-message align-center'> Saved story successfully</p>";
                          $("#modal-content .view-content").html(style+html);
                          $this.find("i").html("bookmark");
                      },
                      function(data) { 
                          $this.removeClass("disabled");
                          Utils.showModalForView();
                          var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                          var html = "<p class='bookmark-message align-center'> Error in saving story.</p>";
                          $("#modal-content .view-content").html(style+html);
                      }
                  );
              }
          });
          $("body").on("click",".delete-bookmark",function(){
              var id = $(this).attr("data-newsid");
              var url = $(this).attr("data-url");
              var parentRow = $(this).attr("parent-row-selector");
              if(!window.isLoggedIn || window.isLoggedIn=="false"){
                  Utils.showModalForView();
                  var loginUrl = "/login?redirectUrl="+url;
                  var registerUrl = "/register?redirectUrl="+url;
                  var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                  var html = "<p class=' bookmark-message align-center'>Please <a style='color:red;' href='"+loginUrl+"'>Login</a> or <a style='color:red;' href='"+registerUrl+"'>Register</a> to delete saved story</p>";
                  $("#modal-content .view-content").html(style+html);
                  return;
              }
  
              var $this = $(this);
              var callback = function(data,code){
                  if(code=="200"){
                      $this.removeClass("disabled");
                          var eCode = data.errorCode || 0
                          Utils.showModalForView();
                          var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                          var html = "<p class=' bookmark-message align-center'> Bookmark removed Successfully</p>";
                          $("#modal-content .view-content").html(style+html);
                          if(parentRow){
                              $(parentRow).remove();
                          } else {
                              setTimeout(function(){
                                  window.location.reload();
                              },1000);
                          }
                      } else {
                          $this.removeClass("disabled");
                          Utils.showModalForView();
                          var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;}</style>"
                          var html = "<p class='bookmark-message align-center'> Error in removing bookmarked news.</p>";
                          $("#modal-content .view-content").html(style+html);
                          $(parentRow).remove();
                      }
              }
              Utils.showModalForView();
              var style="<style>#modal-content .view-content{background:#f2f2f2 !important;padding:20px!important;text-align:center!important;} .bookmark-message  {font-size:20px;} #modal-content{background: transparent!important;border: 0px!important;} .yes-delete-btn{background: #ccc;padding: 5px 10px;cursor:pointer;}</style>"
              var html = "<p class=' bookmark-message align-center'> You sure want to delete bookmarked item ? </p><a class='yes-delete-btn mdl-button mdl-js-button'>Yes</a>";
              $("#modal-content .view-content").html(style+html);
              $(".yes-delete-btn").off("click");
              $(".yes-delete-btn").on("click",function(){
                  $this.addClass("disabled");
                  deleteBookmark(id,callback);     
              });
  
              
          });
          var deleteBookmark = function(id,callback){
              if(id){
                  var data = {"newsIds":id}
                  
                  Hocalwire.Services.post("/xhr/admin/user/delete-bookmark-news",data)
                      .then(function(data) {
                          callback(data,"200");
                          
                      },
                      function(data) { 
                          callback(data,"-1");
                      }
                  );
              }
          }
  
      }
      
  
  
  
  // script(type = 'text/javascript').
  // $("document").ready(function($) {
  //     var nav = $('#main-menu-container');
  //     $(window).scroll(function() {
  //         if ($(this).scrollTop() > 125) {
  //             nav.addClass("f-nav");
  //         } else {
  //             nav.removeClass("f-nav");
  //         }
  //     });
  // });
  // script(type = 'text/javascript').
  // $("document").ready(function($) {
      
  // });
  