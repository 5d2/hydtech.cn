fontSize();





$(window).resize(function(){
	fontSize();
	});
function fontSize(){
	var size;
	var winW=$(window).width();
	if(winW<=1750 && winW>800){
		size=Math.round(winW/17.5);
	}else if(winW<=800){
		size=Math.round(winW/7.5);
		if(size>65){
			size=65;
			}
	}else{
		size=100;
		}
	$('html').css({
		'font-size':size+'px'
		})
	}

$(function(){
	//--
	$('.header').hover(function(){
		$(this).addClass('mini'); 
		$(".nav").addClass('mini'); 
		$(".topSearch").addClass('mini'); 
		$(".header").find('.lan').addClass('mini'); 
		$(".header").find('.lan').find('.img1').fadeOut(50);
		$(".header").find('.lan').find('.img2').fadeIn(50);
		$(".header").find('.logo').find('.img2').fadeIn(50);
		$(".header").find('.logo').find('.img1').fadeOut(50);
	},function(){
		$(this).removeClass('mini');
		$(".nav").removeClass('mini');
		$(".topSearch").removeClass('mini'); 
		$(".header").find('.lan').removeClass('mini'); 
		$(".header").find('.lan').find('.img1').fadeIn(50);
		$(".header").find('.lan').find('.img2').fadeOut(50);
		$(".header").find('.logo').find('.img2').fadeOut(50);
		$(".header").find('.logo').find('.img1').fadeIn(50);
	});
	 $(function () {
            var elm = $('#shortbar');
            var startPos = $(elm).offset().top;
            $.event.add(window, "scroll", function () {
                var p = $(window).scrollTop();
                if (p > startPos) {
                    elm.addClass('sortbar-fixed mini');
                    $(".nav").addClass('mini'); 
					$(".topSearch").addClass('mini'); 
					$(".header").find('.lan').addClass('mini'); 
					$(".header").find('.logo').find('.img2').fadeIn(50);
					$(".header").find('.logo').find('.img1').fadeOut(50);
                    
                    
                } else {
                    elm.removeClass('sortbar-fixed mini');
                    $(".nav").removeClass('mini');
					$(".topSearch").removeClass('mini'); 
					$(".header").find('.lan').removeClass('mini'); 
					$(".header").find('.logo').find('.img2').fadeOut(50);
					$(".header").find('.logo').find('.img1').fadeIn(50);
                }
            });
        });

	
	//--
	$('.topSearch').hover(
		function(){
			$('.topSearch input').fadeIn();
			$('.topSearch').find('.img2').show();
		},
		function(){
			$('.topSearch input').fadeOut();
			$('.topSearch').find('.img2').show();
		}
	);
	//--
	$('.sNavA').each(function (i) {
        $(this).hover(
		   function () {
			   $('.sNavA').eq(i).addClass('aNow1');
		       $('.sNav').eq(i).show();
		   },
		   function () {
			   $('.sNavA').eq(i).removeClass('aNow1');
		       $('.sNav').hide();
		   }
		)
    })
    $('.sNav').each(function (i) {
        $(this).hover(
		   function () {
		   	   $('.header').addClass('mini');
		   	   $(".nav").addClass('mini'); 
				$(".topSearch").addClass('mini'); 
				$(".header").find('.lan').addClass('mini'); 
		       $('.sNavA').eq(i).addClass('aNow1');
		       $(".header").find('.logo').find('.img2').fadeIn(50);
				$(".header").find('.logo').find('.img1').fadeOut(50);
		       $(this).show();
		   },
		   function () {
		   	   $('.header').removeClass('mini');
		   	   $(".nav").removeClass('mini');
				$(".topSearch").removeClass('mini'); 
				$(".header").find('.lan').removeClass('mini'); 
				$(".header").find('.logo').find('.img2').fadeOut(50);
				$(".header").find('.logo').find('.img1').fadeIn(50);
		       $('.sNavA').removeClass('aNow1');
		       $(this).hide();
		   }
		)
    })

    


    //--
    $('.header').find('.lan').each(function(i){
		$(this).hover(
		  function(){
			  $('.header').find('.lan').find('.list').show();
			  $('.header').find('.lan').addClass('on');
			  },
		  function(){
			  $('.header').find('.lan').find('.list').hide();
			  $('.header').find('.lan').removeClass('on');
			  }
		)
    })
    $('.jobList li').each(function (i) {
        if (screen.width > 1440) {
            $(this).click(function () {
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    $('.jobList li').find('.con2').slideUp();
                } else {
                    $('.jobList li').removeClass('on');
                    $(this).addClass('on');
                    $('.jobList li').find('.con2').slideUp();
                    $(this).find('.con2').slideDown();
                }
            })
        } else if (screen.width < 1440) {
            $(this).click(function () {
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    $('.jobList li').find('.con2').slideUp();
                } else {
                    $('.jobList li').removeClass('on');
                    $(this).addClass('on');
                    $(this).find('.con2').slideDown();
                }


            });
        }
    });

    //--
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		$(this).find('.li01').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				},
			function(){}	
				)
			})
	})

	$('.proordersum').each(function (i) {
	    var obj = document.getElementById(this.id);
	    $.ajax({
	        url: "/template/news.aspx",
	        type: "POST",
	        datatype: "text",
	        data: { "ordersum": "1234567", "pid": this.id },
	        success: function (datac) {

	            obj.innerHTML = "<img src=\"/images/nimg19_2.png\" alt=\"\">" + datac + "";


	        },
	        error: function () {
	            // alert("ERROR");
	        }
	    });
	})
	//--
	$('.tabContentDiv2').find('.tabContent2:first').show();
	$('.tab2').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).click(
			function(){
				$('.tab2').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv2').eq(i).find('.tabContent2').hide();
				$('.tabContentDiv2').eq(i).find('.tabContent2').eq(ii).show();
				}
				)
			})
	})

	$('.tabContentDiv2').find('.tabContent2:first').show();
	$('.actTab').each(function (i) {
	    $(this).find('li').each(function (ii) {
	        $(this).click(
			function () {
			   
			    $('.actTab').eq(i).find('li').find('a').removeClass('aNow');
			    $(this).find('a').addClass('aNow');
			    $('.tabContentDiv2').eq(i).find('.tabContent2').hide();
			    $('.tabContentDiv2').eq(i).find('.tabContent2').eq(ii).show();
			}
				)
	    })
	})
	//--
	$('.navIco').click(function(){
		$('.navLayer').animate({right: "0",width:"100%"}, 500);
		$('.searchLayerTel').fadeOut(500);
		$('.pageBg').fadeIn(500);
		})
	$('.navLayer').find('.closeBtn').click(function(){
		$('.navLayer').animate({right: "-100%",width:0}, 500);
		$('.navLayer').find('a').removeClass('aNow');
		$('.navLayer').find('.list').hide();
		$('.pageBg').fadeOut(500);
		})
	//--
	$(".subNav1").click(function(){
		$(this).toggleClass("currentDt").siblings(".subNav1").removeClass("currentDt")
		$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
	})
	//--
	$('.searchIco').click(function(){
		$('.searchLayerTel').fadeIn(500);
		$('.pageBg').fadeIn(500);
		$('.navLayer').animate({right: "-100%",width:0}, 500);
		})
	//--
	$('.pageBg').click(function(){
		$('.searchLayerTel').fadeOut(500);
		$('.pageBg').fadeOut(500);
		})
	//--
	$('.indexPart2').find('.tab2').find('li:odd').addClass('other');
	$('.researchPart2').find('.list').find('li:odd').addClass('li01');
	$('.battery').find('.list').find('li:odd').addClass('li01');
	$('.equipBox').find('li:odd').addClass('li01');
	$('.hardware').find('.list').find('li:odd').addClass('li01');
	//--
	
	//--
	$('.sideTitleTel').find('.tan').toggle(
	   function(){
		   $('.sideTitleNav').show();
		   $('.sideTitleTel').find('.con').addClass('on');
		   },
	   function(){
		   $('.sideTitleNav').hide();
		   $('.sideTitleTel').find('.con').removeClass('on');
		   }
	)
	//--
	$('.listHover').find('li').hover(
	   function(){
		   $(this).addClass('on');
		   },
	   function(){
		   $(this).removeClass('on');
		   }
	)
	//--
	$('.historyContentDiv').find('.historyContent:first').show();
	$('.historyList').each(function(i){
		$(this).find('.slick-slide').each(function(ii){
			$(this).click(
			function(){
				$('.historyList').eq(i).find('.slick-slide').removeClass('slickon');
				$(this).addClass('slickon');
				$('.historyContentDiv').eq(i).find('.historyContent').hide();
				$('.historyContentDiv').eq(i).find('.historyContent').eq(ii).show();
				}	
				)
			})
		})
	//--
	if($('.topA').length>0){
		$(window).scroll(function(){
			if($(window).scrollTop()>200){
				$('.topA').fadeIn(200);
				}else{
					$('.topA').fadeOut(200);
					}
			})
		}
	//--
	$('.topA').click(function(){
		$('body,html').animate({scrollTop: 0}, 500);


		})
	//下拉通用
	$('.select').each(function(i){
		function showFn(selectObj) {	//展开效果
			// 把其他的下拉收起
			$('.select').children("dd").slideUp(200);
			selectObj.children("dd").slideDown(200);
			selectObj.addClass('on');
		}  
		function hideFn(selectObj){    //关闭效果
			selectObj.children("dd").slideUp(200);
			selectObj.removeClass('on');
		}
		function hideAll(){
			$('.select dd').slideUp(200);
		};

		$(this).children('dt').click(function(){
			var index = $(this).parent().index();
			var selectObj = $(this).parent();
			$(this).next().is(":hidden")?showFn(selectObj):hideFn(selectObj);
		});
		$(this).children('dd').find("li").click(function(){   
			var index = $(this).closest('.select').index();
			var dataId=$(this).attr('data-id');
			var selectObj = $(this).closest('.select');
			$(this).closest('.select').children("dt").find('a').html($(this).html());
			$(this).closest('.select').children("dt").find('a').attr('data-id',dataId);
			hideFn(selectObj);
		});
		$("body").click(function(i){ 
			!$(i.target).parents(".select").first().is($(".select")) ? hideAll():"";
		});

	});
	//--
	var bolExec = false;
    if ($(".LineNum").length > 0) {
        $(window).scroll(function () {

            var winheight = $(window).height() / 1.1;
            var Current = $(".LineNum").offset().top;

            if ($(document).scrollTop() > Current / 3.8 && bolExec == false) {

                var line = $(".LineNum"), len = line.length;
                line.each(function (index, element) {
                    var t = $.trim($(this).text()).replace(" ", "").length;
                    var text = "";
                    for (var j = 0; j < t; j++)
                        text += 0;
                    $(this).text(text);
                });

                function Animate(i) {
                    if (i < len) {
                        var _this = line.eq(i), a = 0, v = _this.attr("rel") - 0, _time = 100, vLen = (v + "").length;
                        var t = setInterval(function () {
                            a += 1;
                            var pi = parseInt(v / 100 * a);
                            var text = "";
                            for (var j = 0; j < vLen - (pi + "").length; j++)
                                text += 0;
                            _this.text(text + pi);
                            if (a == _time / 2)
                                Animate(i + 1);
                            if (a >= _time)
                                clearInterval(t);
                        }, 1);
                    }
                }
                Animate(0);

                bolExec = true;
            }

        })
    }
})



jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	    var date = new Date()
	    var year = date.getFullYear()
	    var month = date.getMonth() + 1
	    var day = date.getDate()
	    var qingming = year + "-" + month + "-" + day
	    if (qingming == "2020-4-4") {
	        $("body").css({
	            "-webkit-filter": "grayscale(1)",
	            "filter": "gray",
	            "filter": "grayscale(1)"
	        })
	    }


});	


function search1() {
    if (document.getElementById("txtkey1").value == "") {
        alert("请输入您要搜索的关键字！");
    }
    else {
        location.href = "/search.aspx?k=" + document.getElementById("txtkey1").value;
    }
}

function search2() {
    if (document.getElementById("txtkey2").value == "") {
        alert("请输入您要搜索的关键字！");
    }
    else {
        location.href = "/search.aspx?k=" + document.getElementById("txtkey2").value;
    }
}