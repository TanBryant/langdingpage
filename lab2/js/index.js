$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$(() => {
    $('.slider-choose').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 918,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            
            
           
           
            
        ]

        // prevArrow: "<div class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left'></i></div>",
        // nextArrow: "<div class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right'></i></div>"
    });
})
$(() => {
    $('.slider-profile').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    });
})

$(() => {
    $('.blog-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]

        // prevArrow: "<div class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left'></i></div>",
        // nextArrow: "<div class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right'></i></div>"
    });

})
$(() => {
    $('.blog-slider-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]

        // prevArrow: "<div class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left'></i></div>",
        // nextArrow: "<div class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right'></i></div>"
    });

})



$(() => {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const tabs = $$('.li-menu')
    tabs.forEach((tab, index) => {
        tab.onclick = function () {
            $('.li-menu.active').classList.remove('active')
            this.classList.add('active')
        }
    });
})

$(() => {



    $('.contentBx').click((e) => {
        const el = $(e.target);
        const parent = el.parent();
        parent.toggleClass('active')
    })

    var menu = document.querySelectorAll('.nav-mobile-list > li');
    for (var i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", function () {

            var menuList = document.querySelectorAll('.nav-mobile-list > li > ul');
            for (var j = 0; j < menuList.length; j++) {
                menuList[j].style.display = "none";
            }

            // this.children[1].style.display = "block";

        });
    }


    $('.left').click(function () {
        $('.slider').slick('slickPrev');
    })

    $('.right').click(function () {
        $('.slider').slick('slickNext');
    })


    $('.choose-left').click(function () {
        $('.slider-choose').slick('slickPrev');
    })

    $('.choose-right').click(function () {
        $('.slider-choose').slick('slickNext');
    })

    $('.profile-left').click(function () {
        $('.slider-profile').slick('slickPrev');
    })

    $('.profile-right').click(function () {
        $('.slider-profile').slick('slickNext');
    })
})

// $(document).ready(function() {
// 	$('.accordion-content').slideUp(); /*ẩn nội dung*/

// 	$('.contentBx h3').on('click', function(event) {
// 		// ngăn chặn mặc định
// 		// event.preventDefault();
// 		// đóng/ mở
// 		//$('.accordion-content').slideUp(); /*ẩn nội dung*/
// 		$(this).next().slideToggle();

// 		$(this).offset().top;

// 		$('html, body').animate({scrollTop:$(this).offset().bottom},400);
// 	});
// });


// $(() => {
//     $(".faqs-name").click((e) => {
//       const el = $(e.target);
//       const parent = el.parent();
//       parent.toggleClass("active");
//     });
//   });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}