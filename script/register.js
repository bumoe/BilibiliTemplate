var agreebbruleCheckbox = document.getElementById('agreebbrule');
var reginfo_a_btn = document.getElementById('reginfo_a_btn');
agreebbruleCheckbox.onclick = function() {
	if (this.checked) {
		reginfo_a_btn.className="";
	} else {
		reginfo_a_btn.className="disabled";
	}
};