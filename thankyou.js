
document.getElementById("redirectBtn").onclick = function () {
    location.href = "https://startadora.com/";
}

console.log(localStorage.getItem("opçoes"))
console.log(localStorage.getItem("opçoes").a)
console.log(localStorage.getItem("opçoes").b)


function showModalSystemFeedback() {
	const mostClicked = findBiggerAnswer();

	querySelector('#resposta').innerText = finalAnswers[mostClicked];

}


function findBiggerAnswer() {
    let optionClicked = JSON.parse(localStorage.getItem("opçoes") )
	let maxClicked = optionClicked.a;
	let higerOption = Object.keys(optionClicked)[0];
	for (option in optionClicked) {
		if (optionClicked[option] > maxClicked) {
			higerOption = option;
		}
	}
	return higerOption;
}

showModalSystemFeedback();