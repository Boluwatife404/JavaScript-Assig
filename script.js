function processAddress() {
    if (address.value == "") {
        alert("input cannot be empty");
    } else {
        var letter = address.value.toLowerCase();
        newAddress.innerHTML = letter;
    }
}

//second one

function processTitles() {
    var userInput = list.value.toLowerCase()
    var bookList = ["Boluwatife", "Ayomide", "ola", "Victor"]

    if (userInput == "") {
        alert("Please input book title")
    } else if (bookList.includes(userInput)) {
        alert("Book title already exist")
    } else {
        alert("Your Are Welcome")
        newTitles.innerHTML = "Your Book Title is" + userInput
    }
}

//Number 3

function multipleSpaces() {
    if (grade.value == "") {
        alert("Please enter a text")
    } else {
        var word = grade.value.trim();
        NowConfirmIt.innerHTML = word
    }
}

//Number 4
function checkPassword() {

    var password = document.getElementById("password").value;
    var result = document.getElementById("result");

    result.innerHTML = password

    if (password.length < 8) {
        alert('password is weak')
    } else {
        alert('password is strong')
    }
}


//Number 5
function CheckIfReturn() {
    var even = number.value
    if (even % 2 == 0) {
        YourDiscount.innerHTML = "you get discount"
    } else {
        alert("no discount")
        YourDiscount.innerHTML = "No discount"
    }
}