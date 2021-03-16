import {endTimeShot, starttime, size, frameEnd, init} from './common.js'
import {player} from './striker.js'


function start(){
	
	const tl = init()
	// return
	
	

	TweenMax.from(".player2", 1.3, {x:"-=80", y:"+=0"})
	TweenMax.from(".ball", 1.3, {x:"+=50", y:"+=0"})
	
	player(1.3, {x:"+=50"})
	tl.from(".t1a", .15, {x:"-=100",opacity:0}, 1)
	tl.from(".t1b", .15, {x:"-=100",opacity:0}, 1.4)
	

	
	
	
	
	
	tl.add(frameEnd(), 3.7)

}





module.exports = start;

