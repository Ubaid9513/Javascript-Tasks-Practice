userInput = document.getElementById("user");
submit = document.getElementById("submit");
result = document.querySelector("p");


function check() {

    let user = userInput.value;

    user = user.toLowerCase();
    let reverse = "";
    for (let i = user.length - 1; i >= 0; i--) {
        reverse += user[i]
    }
    console.log(reverse);
    if (user === reverse) {
        // console.log("Its a Palindrome Word!");
        result.innerText = "😊 It's a Palindrome 😊"
    } else {
        result.innerText = "🙃 It's not a Palindrome 🙃"
    }
}

