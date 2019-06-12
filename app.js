const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

// const tween = TweenLite.to('.cover',1, {

// 	width: '60%', height: '40%'
// });

const t1 = new TimelineLite({ paused: true, reversed: true });

t1.to('nav',1,{
	height: '100%',
	ease: Power2.easeOut




})

.to('.cover', 1, {
	width: '60%',
	ease: Power2.easeOut
},"-= 0.5"

)
.fromTo('.nav-open', 0.5,{
	opacity: 0,
	x: 50,
	ease: Power2.easeOut
},{ opacity:1, x:0,

	onComplete: function(){
		navOpen.style.pointerEvents = 'auto';
		console.log('done');
	}

 })




// const t2 = new TimelineLite({ paused: true });

// t2.to('nav',0.5,{
// 	height: '20%',
// 	ease: Power2.easeOut
// });

// t2.to('.cover', 1, {
// 	width: '100%',
// 	ease: Power2.easeOut
// },"-= 1"); 








navButton.addEventListener("click", () =>{
	// // t1.play();
	// if (getWidthPorcent($("#cover")) < 100) {

	// 	t2.play();
	// }

	// if (getWidthPorcent($("#cover")) == 100) {

	// 	t1.play();
	// }

	toggleTween(t1);

}) 	 


function toggleTween(tween){
	tween.reversed() ? tween.play() : tween.reverse(1);
}


function getWidthPorcent(element){
	
	// var element = $("#cover");
	var width = element.width();
	var parentWidth = element.offsetParent().width();

	return (100*width/parentWidth);
}

// console.log("width: "+ getWidthPorcent($("#cover")));