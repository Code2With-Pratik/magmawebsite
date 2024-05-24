function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function (dets) {
    clutter += `<span> ${dets} </span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span", {
    scrollTrigger: {
        trigger: `#page2>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5,
    },
    stagger: .2,
    color: `#fff`
})

function canvas(){
    const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    // paste all images here!!
    ./frames00007.png
    ./frames00010.png
    ./frames00013.png
    ./frames00016.png
    ./frames00019.png
    ./frames00022.png
    ./frames00025.png
    ./frames00028.png
    ./frames00031.png
    ./frames00034.png
    ./frames00037.png
    ./frames00040.png
    ./frames00043.png
    ./frames00046.png
    ./frames00049.png
    ./frames00052.png
    ./frames00055.png
    ./frames00058.png
    ./frames00061.png
    ./frames00064.png
    ./frames00067.png
    ./frames00070.png
    ./frames00073.png
    ./frames00076.png
    ./frames00079.png
    ./frames00082.png
    ./frames00085.png
    ./frames00088.png
    ./frames00091.png
    ./frames00094.png
    ./frames00097.png
    ./frames00100.png
    ./frames00103.png
    ./frames00106.png
    ./frames00109.png
    ./frames00112.png
    ./frames00115.png
    ./frames00118.png
    ./frames00121.png
    ./frames00124.png
    ./frames00127.png
    ./frames00130.png
    ./frames00133.png
    ./frames00136.png
    ./frames00139.png
    ./frames00142.png
    ./frames00145.png
    ./frames00148.png
    ./frames00151.png
    ./frames00154.png
    ./frames00157.png
    ./frames00160.png
    ./frames00163.png
    ./frames00166.png
    ./frames00169.png
    ./frames00172.png
    ./frames00175.png
    ./frames00178.png
    ./frames00181.png
    ./frames00184.png
    ./frames00187.png
    ./frames00190.png
    ./frames00193.png
    ./frames00196.png
    ./frames00199.png
    ./frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    //   set start end according to preference
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `250% top`,
});
}
canvas()


var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})


function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  function files(index) {
  var data = `
  ./bridges00004.png
  ./bridges00007.png
  ./bridges00010.png
  ./bridges00013.png
  ./bridges00016.png
  ./bridges00019.png
  ./bridges00022.png
  ./bridges00025.png
  ./bridges00028.png
  ./bridges00031.png
  ./bridges00034.png
  ./bridges00037.png
  ./bridges00040.png
  ./bridges00043.png
  ./bridges00046.png
  ./bridges00049.png
  ./bridges00052.png
  ./bridges00055.png
  ./bridges00058.png
  ./bridges00061.png
  ./bridges00064.png
  ./bridges00067.png
  ./bridges00070.png
  ./bridges00073.png
  ./bridges00076.png
  ./bridges00079.png
  ./bridges00082.png
  ./bridges00085.png
  ./bridges00088.png
  ./bridges00091.png
  ./bridges00094.png
  ./bridges00097.png
  ./bridges00100.png
  ./bridges00103.png
  ./bridges00106.png
  ./bridges00109.png
  ./bridges00112.png
  ./bridges00115.png
  ./bridges00118.png
  ./bridges00121.png
  ./bridges00124.png
  ./bridges00127.png
  ./bridges00130.png
  ./bridges00133.png
  ./bridges00136.png
  ./bridges00139.png
  ./bridges00142.png
  ./bridges00145.png
  ./bridges00148.png
  ./bridges00151.png
  ./bridges00154.png
  ./bridges00157.png
  ./bridges00160.png
  ./bridges00163.png
  ./bridges00166.png
  ./bridges00169.png
  ./bridges00172.png
  ./bridges00175.png
  ./bridges00178.png
  ./bridges00181.png
  ./bridges00184.png
  ./bridges00187.png
  ./bridges00190.png
  ./bridges00193.png
  ./bridges00196.png
  ./bridges00199.png
  ./bridges00202.png
  `;
  return data.split("\n")[index];
  }
  
  const frameCount = 67;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
  }
  canvas1()

  var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})
