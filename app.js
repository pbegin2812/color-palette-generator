const $color = document.querySelectorAll(".color");
const $hexavalue = document.querySelectorAll(".hex-value");
const $generateBtn = document.querySelector("#generate-btn");

function colorRan() {
	for (let i = 0; i < $hexavalue.length; i++) {
        $hexavalue[i].textContent =
		"#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
	}
    for (let i = 0; i < $color.length; i++) {
        $color[i].setAttribute(
            "style",
            `background-color: ${$hexavalue[i].textContent}`,
        );
    }
}

$generateBtn.addEventListener("click", () => {
    colorRan();
})

