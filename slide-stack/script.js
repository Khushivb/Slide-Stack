var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:1,
    pin:true
  }})

  tl.to("#card-one",{
    top:"35%"
  },'a')
  tl.to("#card-two",{
    top:"130%"
  },'a')
  tl.to("#card-two",{
    top:"42%"
  },'b')
  tl.to("#card-one",{
    width:"80%",
    height:"80vh"
  },'b')
  tl.to("#card-three",{
    top:"130%"
  },'b')
  tl.to("#card-three",{
    top:"50%"
  },'c')
  tl.to("#card-two",{
    width:"80%",  //change this value to incraese the width of card 
    height:"80vh"
  },'c')
  tl.to("#card-three",{
    width:"80%",
    height:"80vh"
  },'d')