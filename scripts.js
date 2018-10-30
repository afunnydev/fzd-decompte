var progressBar = document.getElementsByClassName('progress-bar')[0];
var quantity = document.getElementById('quantity');

var rate = 0.45;
var startedTime = new Date("November 3, 2018 09:30:00");
var nowTime = new Date("November 3, 2018 13:32:00");
var endTime = new Date("November 4, 2018 17:00:00");

var duration = (endTime.getTime() - startedTime.getTime()) / 1000;
var sinceNow = (nowTime.getTime() - startedTime.getTime()) / 1000;

var countInterval = 1;

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

	setInterval(changeTime, countInterval);
} else {
	quantity.textContent = 0;
	progressBar.style.width = '0%';
}
