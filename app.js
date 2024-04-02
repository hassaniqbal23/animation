var body = document.querySelector('body');
var check = 0;
function heartAnim() {
	var box = document.createElement('div');
	box.innerHTML = ' Hassan iqbal &starf;';
	body.append(box);

	box.style.left = Math.random() * 100 + 'vw';

	box.style.animationDuration = Math.random() * 2 + 3 + 's';
	check++;

	setInterval(() => {
		box.remove();
	}, 3000);
}

var aaa = setInterval(() => {
	heartAnim();
}, 200);

// setTimeout(()=>{
//    clearInterval(aaa);
// },5000)
