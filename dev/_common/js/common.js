import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

// gsap.defaults({
// 	ease: "power3.out"
// });




const {w, h} = size


const READ = {
	jackpotnormal: 1.2,
	jackpotcombo: 2.6,

}


function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}


let data_ = {}
const ease = "power2.out"



function start(data){
		
	const scale = .6/300
	const tl = init()
	const time = Math.min(scale*w, .38)
	console.log(time);
	tl.add("start")
	tl.from(".paper", {duration:time,  clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"}, "start")
	tl.from([".logo"], {opacity:0, duration:.3}, "start")
	tl.from([".text", ".product"], {opacity:0, duration:.3}, "+=.35")
	tl.from([ ".tag", ".cta"], {opacity:0, duration:.3}, "+=.6")
}






export {size, init, start}



