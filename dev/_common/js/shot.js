import {endTimeShot, starttime, size, frameEnd, init} from './common.js'
import {player} from './striker.js'


function start(){
	
	const tl = init()
	// return
	
	

	TweenMax.from(".player2", 1.3, {x:"+=80", y:"+=5"})
	TweenMax.from(".puck", 1.5, {x:"-=70", y:"+=20"})
	
	player(1.5, {x:"-=50", y:"+=6"})
	tl.from(".t1a", .15, {x:"-=100",opacity:0}, 1)
	tl.from(".t1b", .15, {x:"-=100",opacity:0}, 1.2)
	

	
	
	
	
	
	tl.add(frameEnd(), 3.6)

}


start()


module.exports = {};

