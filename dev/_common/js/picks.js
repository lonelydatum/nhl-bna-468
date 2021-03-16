import {endTimeShot, starttime, size, frameEnd, init} from './common.js'
import {player} from './striker.js'


function start(){
	
	const tl = init("468x60")
	// return
	
	

	TweenMax.from(".player2", 1.3, {x:"-=80", y:"+=20"})
	
	player(1.5)
	tl.from(".t1a", .15, {x:"-=100",opacity:0}, 1)
	

	
	
	
	
	
	tl.add(frameEnd(), 3.1)

}


start()


module.exports = {};

