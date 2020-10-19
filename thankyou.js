
document.getElementById("redirectBtn").onclick = function () {
    location.href = "https://startadora.com/";
}




function showModalSystemFeedback() {
	const mostClicked = findBiggerAnswer();

	querySelector('#resposta').innerText = finalAnswers[mostClicked];

}


function findBiggerAnswer() {
    let optionClicked = JSON.parse(sessionStorage.getItem("opçoes") )
	let maxClicked = optionClicked.a;
	let higherOption = Object.keys(optionClicked)[0];
	for (option in optionClicked) {
		if (optionClicked[option] > maxClicked) {
			higherOption = option;
		}
	}
	return higherOption;
}

showModalSystemFeedback();