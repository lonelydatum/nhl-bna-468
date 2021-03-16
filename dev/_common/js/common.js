const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function frameEnd(){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.from(".phone", .3, {y:size.h, opacity:1}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
	tl.to(".cta1", .01, {opacity:0}, "+=2.5")
	tl.from(".cta2", .2, {opacity:0}, "+=.2")

	return tl
}


function transformOrigin(id, percent){
	const el = document.getElementById(id)
	const w = el.offsetWidth
	const h = el.offsetHeight
	const transformOrigin = {
		x: w*percent.w,
		y: h*percent.h
	}
	const pos = {
		x: -transformOrigin.x/2,
		y: -transformOrigin.y/2,
	}
	
	const result = {
		transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
		...pos
	}

	return result
}

function init(){
	
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	return tl
}



export {size, frameEnd, init}