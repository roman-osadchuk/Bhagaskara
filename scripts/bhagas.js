$(document).ready(function(){
    
    $("nav > button").click(function(){
        $("nav ul").slideToggle("normal");
    });
    
    $(window).resize(function(){
        
        if($(window).width() > 850){
            $("nav ul").css("display", "flex");
        }else{
            $("nav ul").css("display", "none");
        }
    });
    
    
    /*************************************************/
    
    
    function start_carousell(){
        
        var active_index = 0;
        var previous_index = 0;

        $(".proverbs").hide();
        $(".proverbs").eq(active_index).show();


        $('.navigator').click(function(){
            $('.navigator').removeClass('active');
            $(this).addClass('active');
            previous_index = active_index;
            active_index = $(this).index();
            rotation();
        });


        function rotation(){

            if(previous_index < active_index){
                $(".proverbs").eq(previous_index).animate({
                    "margin-left" : "-1200px"
                }, 300, "linear",

                function(){
                    $(".proverbs").eq(previous_index).hide();

                    $(".proverbs").eq(active_index).css({
                        "display": "block",
                        "text-align": "center",
                        "margin-left" : "1200px"
                    });

                    $(".proverbs").eq(active_index).animate({
                        "margin-left" : "0px",
                        "margin-right" : "0px"
                    }, 300, "linear");
                });

            }else if(previous_index > active_index){
                $(".proverbs").eq(previous_index).animate({
                    "margin-left" : "1200px"
                }, 300, "linear",

                function(){
                    $(".proverbs").eq(previous_index).hide();

                    $(".proverbs").eq(active_index).css({
                        "display": "block",
                        "text-align": "center",
                        "margin-left" : "-1200px"
                    });

                    $(".proverbs").eq(active_index).animate({
                        "margin-left" : "0px",
                        "margin-right" : "0px"
                    }, 300, "linear");
                });
            }

        }
    }
    
    start_carousell();
    
    /*************************************************/
    
    
    (function() {
        
        $("#image_container img").click(function(e){
            modal_img(e.target);
        });

        $("#modal_image span").click(function(){
            $("#modal_image").hide();
        });
        
        function modal_img(img){
            var bg_img = $(img).attr("src");
            $("#modal_image img").attr("src", bg_img);
            $("#modal_image").css({
                "display" : "block",
                "top" : "10%",
                "left" : "15%",
                "width" : "70%",
                "height" : "80%"
            });
        }  
        
    })();
    
    
    
    
    /*************************************************/
    
    
    function watch_more(){
        
        var n = 2;
        
        $("#watch_more").click(function(){
            n++;
            $(".picture_row:lt(" + n + ")").css("display", "flex");
            
            if(n == 4){
                $("#image_container").after("<div id='pagination'></div>");
                
                $("#pagination").append("<span class='paginations paginations_active'>1</span> <span class='paginations'>2</span> <span class='paginations'>3</span>");
                
                paginationOn();
                
                $("#watch_more").hide();
            }
            
        });
        
        $(".picture_row:lt(" + n + ")").css("display", "flex");
    }
    
    watch_more();
    
    
    function paginationOn(){
        
        $(".paginations").eq(0).click(function(){
            $('html').animate({
                scrollTop: $("#image_container").offset().top - 50+"px"
            });
            $("#image_container").load("slide_img.html #image_container_1");
            $.getScript("scripts/remote_scripts.js");
            $(".paginations").removeClass("paginations_active");
            $(".paginations").eq(0).addClass("paginations_active");
        });
        
        
        $(".paginations").eq(1).click(function(){
            $('html').animate({
                scrollTop: $("#image_container").offset().top - 50+"px"
            });
            $("#image_container").load("slide_img.html #image_container_2");
            $.getScript("scripts/remote_scripts.js");
            $(".paginations").removeClass("paginations_active");
            $(".paginations").eq(1).addClass("paginations_active");
        });
        
        
        $(".paginations").eq(2).click(function(){
            $('html').animate({
                scrollTop: $("#image_container").offset().top - 50+"px"
            });
            $("#image_container").load("slide_img.html #image_container_3");
            $.getScript("scripts/remote_scripts.js");
            $(".paginations").removeClass("paginations_active");
            $(".paginations").eq(2).addClass("paginations_active");
        });
        
    }
    
    
    /*************************************************/
    
    var n = 0;
    
    $(window).scroll(function () {
        
        var statisticElTop = $('#statistic').offset().top;
        var statisticElHeight = $('#statistic').height();
        var distanceToEL = $(window).scrollTop();
        var halfOfWindowHeight = ($(window).height()) / 1.5;
        
        var skillsElTop = $("#skills_1-2").offset().top;
        var skillsElHeight = $("#skills_1-2").height();

        if(statisticElTop < distanceToEL + statisticElHeight + halfOfWindowHeight && statisticElTop + statisticElHeight > distanceToEL) {
            
            statisticAnimation();
            
        }else if(skillsElTop < distanceToEL + skillsElHeight + halfOfWindowHeight && skillsElTop + skillsElHeight > distanceToEL){
            
            skillsAnimation();
            
        }else{ //else - to trigger animation every time on scrolling
            n = 0;
        }
        
        
    });
    
    
    function statisticAnimation(){
        
        n++;
        if(n == 1){
            
            $("#statistic > div:nth-child(1) > span:first-child").prop('number', 0).animateNumber({ 
                number: 365,
                easing: 'easeInOutQuint'
            }, 1500);
            
            var percent_number_step = $.animateNumber.numberStepFactories.append('%');
            $("#statistic > div:nth-child(2) > span:first-child").prop('number', 0).animateNumber({ 
                number: 98,
                easing: 'easeInOutQuint',
                numberStep: percent_number_step
            }, 1500);
            
            $("#statistic > div:nth-child(3) > span:first-child").prop('number', 0).animateNumber({ 
                number: 69,
                easing: 'easeInOutQuint'
            }, 1500);
            
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
            $("#statistic > div:nth-child(4) > span:first-child").prop('number', 0).animateNumber({ 
                number: 1642,
                easing: 'easeInOutQuint',
                numberStep: comma_separator_number_step
            }, 1500);
            
        }else{
            return false;
        }
        
        //animateNumber - method from external library
        // http://aishek.github.io/jquery-animateNumber/
    }
    
    
    function skillsAnimation(){
        
        var percent_number_step = $.animateNumber.numberStepFactories.append('%');
        
        n++;
        if(n == 1){
            
            $("#skills_1-2 .skill:nth-child(1) div:nth-child(3)").animate({
                "width" : "360px"
            }, 1500);
            $("#skills_1-2 .skill:nth-child(1) span:nth-child(2)").prop('number', 0).animateNumber({ 
                number: 90,
                easing: 'easeInOutQuint',
                numberStep: percent_number_step
            }, 1500);
            
            
            $("#skills_1-2 .skill:nth-child(2) div:nth-child(3)").animate({
                "width" : "280px"
            }, 1500);
            $("#skills_1-2 .skill:nth-child(2) span:nth-child(2)").prop('number', 0).animateNumber({ 
                number: 70,
                easing: 'easeInOutQuint',
                numberStep: percent_number_step
            }, 1500);
            
            
            $("#skills_3-4 .skill:nth-child(1) div:nth-child(3)").animate({
                "width" : "300px"
            }, 1500);
            $("#skills_3-4 .skill:nth-child(1) span:nth-child(2)").prop('number', 0).animateNumber({ 
                number: 75,
                easing: 'easeInOutQuint',
                numberStep: percent_number_step
            }, 1500);
            
            
            $("#skills_3-4 .skill:nth-child(2) div:nth-child(3)").animate({
                "width" : "340px"
            }, 1500);
            $("#skills_3-4 .skill:nth-child(2) span:nth-child(2)").prop('number', 0).animateNumber({ 
                number: 85,
                easing: 'easeInOutQuint',
                numberStep: percent_number_step
            }, 1500);
            
        }else{
            return false;
        }  
        
    }
    
    
    /*************************************************/
    
    
    $(".team_carts").eq(0).css("display", "flex");
    
    
    $("#icon_right").click(function(){
        
        for(var i = 0; i < $(".team_carts").length; i++){
            if($(".team_carts").eq(i).css("display") == "flex"){
                if(i == $(".team_carts").length - 1){
                    
                    $(".team_carts").eq(i).animate({
                        "margin-left" : "-1200px"
                    }, 500, "linear", function(){
                        $(".team_carts").eq(i).hide();
                        
                        $(".team_carts").eq(0).css({
                            "display": "flex",
                            "text-align": "center",
                            "margin-left" : "1200px"
                        });
                        
                        $(".team_carts").eq(0).animate({
                            "margin-left" : "0px",
                            "margin-right" : "0px"
                        }, 500, "linear");
                    });
                    
                }else{
                    
                    $(".team_carts").eq(i).animate({
                        "margin-left" : "-1200px"
                    }, 500, "linear", function(){
                        $(".team_carts").eq(i).hide();
                        
                        $(".team_carts").eq(i + 1).css({
                            "display": "flex",
                            "text-align": "center",
                            "margin-left" : "1200px"
                        });
                        
                        $(".team_carts").eq(i + 1).animate({
                            "margin-left" : "0px",
                            "margin-right" : "0px"
                        }, 500, "linear");
                    });
                }
                break;
            }
        }
    });
    
    
    
    $("#icon_left").click(function(){
        
        for(var i = 0; i < $(".team_carts").length; i++){
            if($(".team_carts").eq(i).css("display") == "flex"){
                if(i === 0){
                    
                    $(".team_carts").eq(0).animate({
                        "margin-left" : "1200px"
                    }, 350, "linear", 
                    
                    function(){
                        $(".team_carts").eq(0).hide();
                        
                        $(".team_carts").eq($(".team_carts").length - 1).css({
                            "display": "flex",
                            "text-align": "center",
                            "margin-left" : "-1200px"
                        });
                        
                        $(".team_carts").eq($(".team_carts").length - 1).animate({
                            "margin-left" : "0px",
                            "margin-right" : "0px"
                        }, 350, "linear");
                    });
                    
                }else{
                    
                    $(".team_carts").eq(i).animate({
                        "margin-left" : "1200px"
                    }, 350, "linear", 
                    
                    function(){
                        $(".team_carts").eq(i).hide();
                        
                        $(".team_carts").eq(i - 1).css({
                            "display": "flex",
                            "text-align": "center",
                            "margin-left" : "-1200px"
                        });
                        
                        $(".team_carts").eq(i - 1).animate({
                            "margin-left" : "0px",
                            "margin-right" : "0px"
                        }, 350, "linear");
                    });
                }
                break;
            }
        }
    });
    
    
    /*************************************************/
    
    
    $("#learn_more").click(function(){
        $("#learn_more span").toggleClass("arrow_rotate");
        
        $("#gadgets-box + div").slideToggle();
    });
    
    
    /*************************************************/
    
        
    function navScrollTo(){

        $("nav ul li a").each(function(){
            $(this).click(function(e){
                e.preventDefault();

                if($(this).text() == "Home"){
                    $('html').animate({
                        scrollTop: $("header").offset().top + $(window).height() / 2.5
                    });
                }else if($(this).text() == "About"){
                    $('html').animate({
                        scrollTop: $("section_1").offset().top
                    });
                }else if($(this).text() == "Team"){
                    $('html').animate({
                        scrollTop: $("section_3").offset().top
                    });
                }else if($(this).text() == "Portfolio"){
                    $('html').animate({
                        scrollTop: $("section_7").offset().top
                    });
                }else if($(this).text() == "Contact"){
                    $('html').animate({
                        scrollTop: $("section_8").offset().top
                    });
                }
            });
        });

    }

    navScrollTo();
        
    
    /*************************************************/
    
    (function(){
        
        $(".menu-hexagon").click(menuAnimation);

            function menuAnimation(){
            var ind;

            if($(this).find("img").attr("src") == "img/menu_icon_1.gif"){
                ind = 0;
            }else if($(this).find("img").attr("src") == "img/menu_icon_2.gif"){
                ind = 1;
            }else if($(this).find("img").attr("src") == "img/menu_icon_3.gif"){
                ind = 2;
            }else if($(this).find("img").attr("src") == "img/menu_icon_4.gif"){
                ind = 3;
            }    

            $(".menu-items").not($(".menu-items").eq(ind)).css("visibility", "hidden");

            setTimeout(function(){
                moveToRightCorner(ind);
            }, 300);


            function moveToRightCorner(position){

                if($(window).width() < 850){
                    $(".menu-items").not($(".menu-items").eq(position)).fadeOut();
                    $(".menu-items").eq(position).css("margin-top", "200px");
                    $("menu").css("height", "1900px");
                    $("#menu_window").fadeIn(800);
                    loadMenuContent(ind);
                }else if($(window).width() < 1200){
                    $(".menu-items").not($(".menu-items").eq(position)).fadeOut();
                    $("menu").css("height", "1900px");
                    $("#menu_window").fadeIn(800);
                    loadMenuContent(ind);
                }else{
                    var coord_left = $(".menu-items").eq(position).position().left;
                    $("#menu_window").hide();
                    $(".menu-items").animate({
                        "margin-left" : "-" + coord_left + "px",
                        "margin-right" : coord_left + "px"
                    }, 800, "linear", function(){  
                        $("#menu_window").fadeIn(800);
                        loadMenuContent(ind);
                    });
                }   
            }

            function loadMenuContent(position){
                $("#menu_window").load("menu_img.html .menu_container:nth-child(" + (position + 1) + ")");
                $(".menu-hexagon").off("click");
                $(".menu-hexagon").click(animationBack);
            }

            function animationBack(){

                if($(window).width() < 850){
                    $("#menu_window").hide();
                    $("menu").css("height", "1650px");
                    $(".menu-items").css({
                        "visibility" : "visible",
                        "margin" : "70px auto"
                    });
                    $(".menu-items").fadeIn();
                }else if($(window).width() < 1200){
                    $("#menu_window").hide();
                    $("menu").css("height", "600px");
                    $(".menu-items").css("visibility", "visible");
                    $(".menu-items").fadeIn();
                }else{
                    $("#menu_window").fadeOut(800, function(){
                        $("#menu_window").hide();
                        $(".menu-items").animate({
                            "margin-left" :  "0px",
                            "margin-right" : "0px"
                        }, 600, "linear", function(){
                            $("#menu_window").hide();
                            $(".menu-items").css("visibility", "visible");  
                        });
                    }); 
                }

                $(".menu-hexagon").off("click");
                $(".menu-hexagon").click(menuAnimation);
            }

        }
    
    })();
    
    
    /*************************************************/
    
    
    (function(){
       
        var m = 0;
       
        $(window).scroll(function () {

            var hexagonRowElTop = $('#hexagon_row').offset().top;
            var hexagonRowElHeight = $('#hexagon_row').height();
            var distanceToEL = $(window).scrollTop();
            var halfOfWindowHeight = ($(window).height());

            if(hexagonRowElTop < distanceToEL + hexagonRowElHeight + halfOfWindowHeight && hexagonRowElTop + hexagonRowElHeight > distanceToEL) {
                if(m === 0){
                    headerAnimation();
                    m = 1;
                }
            }
        });
        
        $(window).resize(function(){
            headerAnimation();
        });
    
        
        function headerAnimation(){
            
            if($(window).width() > 800){
                
                $("#hexagon1, #hexagon2").css({
                    "left" : "-500px",
                    "opacity" : "0"
                });

                $("#hexagon3, #hexagon4").css({
                    "top" : "-500px",
                    "opacity" : "0"
                });

                $("#hexagon5, #hexagon6").css({
                    "right" : "-500px",
                    "opacity" : "0"
                });
                
                $("#hexagon_row").css({
                     "visibility" : "visible"
                });

                $("#hexagon1, #hexagon2").animate({
                    "left" : "0px",
                    "opacity" : "1"
                }, 1000, "easeOutBounce");

                $("#hexagon3, #hexagon4").animate({
                    "top" : "0px",
                    "opacity" : "1"
                }, 1000, "easeOutBounce");

                $("#hexagon5, #hexagon6").animate({
                    "right" : "0px",
                    "opacity" : "1"
                }, 1000, "easeOutBounce");

            }else{
                
                $("#hexagon1, #hexagon3, #hexagon5").css({
                    "left" : "-20%",
                    "opacity" : "0"
                });

                $("#hexagon2, #hexagon4, #hexagon6").css({
                    "right" : "-20%",
                    "opacity" : "0"
                });
                
                $("#hexagon_row").css({
                     "visibility" : "visible"
                });

                $("#hexagon1, #hexagon3, #hexagon5").animate({
                    "left" : "12%",
                    "opacity" : "1"
                }, 1000, "easeOutBounce");

                $("#hexagon2, #hexagon4, #hexagon6").animate({
                    "right" : "12%",
                    "opacity" : "1"
                }, 1000, "easeOutBounce");
   
            }
        
        }
    
    })();
    
    
    
    
    
    
    
  
});