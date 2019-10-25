var progressBar = document.getElementsByClassName('progress-bar')[0];
var quantity = document.getElementById('quantity');

var rate = 0.45;
var startedTime = new Date("October 26, 2019 10:00:00");
var nowTime = new Date();
var endTime = new Date("October 26, 2019 18:00:00");

var duration = (endTime.getTime() - startedTime.getTime()) / 1000;
var sinceNow = (nowTime.getTime() - startedTime.getTime()) / 1000;

var countInterval = 2;

if (sinceNow >= 0) {

	var productedGarbage = sinceNow * rate;
	quantity.textContent = Math.round(productedGarbage);

	var barWidth = (sinceNow/duration * 100)
	progressBar.style.width = barWidth + '%';

	function changeTime() {
		productedGarbage += (rate * countInterval);
		barWidth += (countInterval/duration);

		progressBar.style.width = barWidth + '%';
		quantity.textContent = Math.round(productedGarbage);
	}

	setInterval(changeTime, countInterval*1000);
} else {
	quantity.textContent = 0;
	progressBar.style.width = '0%';
}
