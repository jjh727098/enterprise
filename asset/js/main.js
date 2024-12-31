gsap.defaults({
  ease:"none"
})

// 헤더 영역
let lastScroll = 0;

  ScrollTrigger.create({
    trigger:".challenge_container",
    start:"0% 0%",
    endTrigger:".sc_possible",
    end:"0% 50%",
    //markers:true,
    toggleClass:{
      targets:"header",
      className:"dark"
    }
  })

  ScrollTrigger.create({
    trigger:".challenge_container.v2",
    start:"0% 50%",
    endTrigger:"footer",
    end:"0% 0%",
    //markers:true,
    toggleClass:{
      targets:"header",
      className:"dark"
    }
  })

  let lastscroll = 0;

$(window).scroll(function(){
  curr = $(this).scrollTop();
  target = $('.sc_showcase').offset().top;

  if (curr > target) {
    if (curr > lastscroll) {
      $('.top_btn_box').addClass('hide')
    }else{
      $('.top_btn_box').removeClass('hide')
    }
    lastscroll = curr;
  }
})
  
  $('.lang_btn').click(function(){
    $('.lang_list').toggleClass('on');
})

// 최상단 이동 탑 버튼
$('.top_btn').click(function(){
  window.scrollTo({
      top:0,
      behavior:"smooth"
  })
});

// 인트로 영역
const introTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_intro",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0
  }
})
introTl
.to('.sc_intro',{ '--opacity':1, })
.to('.group_intro_desc .intro_text:nth-child(1)',{ opacity:1, },"<")
.to('.group_intro_desc .intro_text:nth-child(1)',{ opacity:0,
  onStart:function(){
    $('header').addClass('hide')
  },
  onReverseComplete:function(){
    $('header').removeClass('hide')
  },
 })
.to('.group_intro_desc .intro_text:nth-child(2)',{ opacity:1, })
.to('.group_intro_desc .intro_text:nth-child(2)',{ opacity:0, })
.to('.group_intro_desc .intro_text:nth-child(3)',{ opacity:1, })
.to('.group_intro_desc .intro_text:nth-child(3)',{ opacity:0, })
.to('.group_intro_desc .intro_text:nth-child(4)',{ opacity:1, })

  
// 쇼케이스 영역
const showcaseTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_showcase",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
  }
})
showcaseTl
.to('.group_show_intro',{
  '--opacity':1
})
.from('.sc_showcase .group_show_intro .show_intro_area',{ opacity:0 },"<")
.to(".sc_showcase .show_intro_area p:nth-child(1)", {xPercent: 100}, "text")
.to(".sc_showcase .show_intro_area p:nth-child(3)", {xPercent: -100}, "text")
.to('.sc_showcase .group_show_intro',{ '--opacity':0 },"text")
.to('.sc_showcase .group_show_intro .show_intro_area',{ opacity:0 })
.to('.sc_showcase .group_show_thumb .parallax__item:nth-child(3)',{ height:0 })
.to('.sc_showcase .group_show_thumb .parallax__item:nth-child(2)',{ height:0 })
.to('.sc_showcase .group_show_intro',2,{'--opacity':1 },"last")
.to('.sc_showcase .group_show_desc',2,{opacity:1 },"last")

// prove 영역
$('.prove_container').each(function(i,el){
  const prove = gsap.timeline();
  prove.to(el, {'--progress':1}, "text")
  ScrollTrigger.create({
      animation: prove,
      trigger: el,
      start: "0% 70%",
      end:"100% 100%",
      scrub: 0,
      // markers:true,
  });
})

// possible 영역
ScrollTrigger.create({
  trigger:".sc_possible",
  start:"0% 50%",
  endTrigger:".challenge_container.v2",
  end:"0% 50%",
  // markers:true,
  toggleClass:{
    targets:"body",
    className:"dark"
  }
})

const possibleTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_possible",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
    invalidateOnRefresh:true,
  }
})
possibleTl
.to('.sc_possible .group_slide .slide_inner',{
  xPercent:-100,

  x:function(){
    return window.innerWidth-100
  }
})

// feature 영역
const feature = gsap.timeline();
feature.to(".group_feature .feature_item",1, { transform: 'translateX(0%)' })
feature.to(".feature_wrapper .feature_desc",1,{ 
  delay:1,
  autoAlpha:1,
  onStart:function(){
    $('.feature_wrapper').addClass('active')
  },
  onReverseComplete:function(){
    $('.feature_wrapper').removeClass('active')
  }
})

ScrollTrigger.create({
    animation: feature,
    trigger: ".feature_wrapper",
    start: "top 95%",
    end: "bottom 35%",
    scrub:0,
    // markers:true,
});

// service1 영역
const service1Tl = gsap.timeline({
  scrollTrigger:{
    trigger: "#service1",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
    invalidateOnRefresh:true,
  }
})
service1Tl
.to('#service1 .slide_inner',1,{
  x:function(){
    return $('#service1 .slide_title').innerWidth()*-1;
  }
},'a')
.to('#service1 .card_item:nth-child(2)',1,{ xPercent:-100, x:-40 },'a+=0.7')
.to('#service1 .card_item:nth-child(3)',1,{ xPercent:-100*2, x:-40*2 },'a+=0.7')
.to('#service1 .card_item:nth-child(4)',1,{ xPercent:-100*3, x:-40*3 },'a+=0.7')
.to('#service1 .card_item.lock .lock_color img:first-child',.5,{ opacity:0 },'a+=0.7')
.to('#service1 .card_item.lock .lock_color img:last-child',.5,{ opacity:1 },'a+=1.2')
.to('#service1 .card_item.lock .lock_color img:last-child',.5,{ opacity:0 },'a+=1.7')

gsap.set('#service2 .service_card_box .service_card_title',{opacity:0})

const service2Tlv2 = gsap.timeline({
  scrollTrigger:{
    trigger: "#service2",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
  }
})
service2Tlv2.to('#service2 .service_card_box .service_card_title',{opacity:1})

// service2 영역
gsap.set('#service2 .service_card_box',{autoAlpha:0})

ScrollTrigger.create({
  animation:feature,
  trigger: "#service2",
  start: "0% 0%",
  end: "100% 100%",
  scrub:0,
  onEnter:function(){
    gsap.set('#service2 .service_card_box',{autoAlpha:1})
    gsap.set('#service1 .slide_content .card_list',{autoAlpha:0})
  },
  onLeaveBack:function(){
    gsap.set('#service2 .service_card_box',{autoAlpha:0})
    gsap.set('#service1 .slide_content .card_list',{autoAlpha:1})
  }
  // markers:true,
});

gsap.set('#service3 .slide_box .card_item:nth-child(1)',{autoAlpha:0})

// service3 영역
const service1T3 = gsap.timeline({
  scrollTrigger:{
    trigger: "#service3",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
    onEnter:function(){
      gsap.set('#service2 .service_card_box',{autoAlpha:0,})
      gsap.set('#service3 .slide_box .card_item:nth-child(1)',{autoAlpha:1,})
    },
    onLeaveBack:function(){
      gsap.set('#service2 .service_card_box',{autoAlpha:1,})
      gsap.set('#service3 .slide_box .card_item:nth-child(1)',{autoAlpha:0,})
    }
  }
})
service1T3
.to('#service3 .slide_inner',1,{
  x:function(){
    return $('#service3 .slide_title').innerWidth()*-1;
  }
},'a')
.to('#service3 .card_item:nth-child(3)',1,{ xPercent:-100*2, x:-40*2 },'a+=0.7')
.to('#service3 .card_item:nth-child(2)',1,{ xPercent:-100, x:-40 },'a+=0.7')
.to('#service3 .card_item:nth-child(4)',1,{ xPercent:-100*3, x:-40*3 },'a+=0.7')

// service4 영역
gsap.set('#service4 .service_card_box',{autoAlpha:0,})

const service1T4 = gsap.timeline({
  scrollTrigger:{
    trigger: "#service4",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
    toggleClass:{
      targets:"#service4 .service_card_box",
      className:"active"
    },
    onEnter:function(){
      gsap.set('#service3 .slide_inner',{autoAlpha:0,})
      gsap.set('#service4 .service_card_box',{autoAlpha:1,})
    },
    onLeaveBack:function(){
      gsap.set('#service3 .slide_inner',{autoAlpha:1,})
      gsap.set('#service4 .service_card_box',{autoAlpha:0,})
    }
  }
})
service1T4
.to('#service4 .service_bottom_desc',{opacity:1,},'a')

// finance 영역
const financeTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".finance_container",
    start: '0% 0%',
    end: '100% 100%',
    //markers: true,
    scrub:0,
    invalidateOnRefresh:true,
    toggleClass:"active",
  }
})
financeTl
.to('.finance_container .slide_inner',1,{xPercent:-45,},"a+=.7")
.to('.left_title .left_text:nth-child(1)',.5,{opacity:0,},"a+=1.5")
.to('.left_title .left_text:nth-child(2)',.5,{opacity:1,},"a+=2.2")

$('.finance_container .card_list .card_item').each(function(i,el){
  gsap.to(el,{
    scrollTrigger:{
      containerAnimation:financeTl,
      trigger: el,
      start: '0% 80%',
      end: '100% 80%',
      // markers: true,
      onEnter:function(){
        el.classList.add('show');
      }
    },
  })
})

gsap.set('.creator_info',{ opacity:0})
gsap.set('.creator_scroll_down',{ opacity:0})

// creator 영역
const creatorTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".group_creator",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
  }
})
creatorTl
.to('.creator_info',{ opacity:1, },'a')
.to('.creator_scroll_down',{ opacity:1, },'a')

// creator의 슬라이드
const creator_slideTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".group_creator_slide",
    start: '0% 0%',
    end: '100% 100%',
    //markers: true,
    scrub:0,
    invalidateOnRefresh:true,
    toggleClass:"active",
  }
})
creator_slideTl
.to('.group_creator_slide .slide_inner',{
  xPercent:-45,
})

// 푸터
gsap.set('.group_join',{yPercent:100})

const footerTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".ground_container",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub:0,
    onEnter:function(){
      gsap.set('.group_join',{yPercent:1,})
    },
    onLeaveBack:function(){
      gsap.set('.group_join',{yPercent:100,})
    }
  }
})