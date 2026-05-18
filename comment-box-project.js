let commentInput = document.getElementById("comment-input");
let button = document.getElementById("send-button");
let nameInput = document.getElementById("name-input");
let output = document.getElementById("newCommentParagraph");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let comment = commentInput.value;
    let name = nameInput.value;
    let fecha = new Date();
    if (comment === "") {
        alert("Por favor, ingresa un comentario.");
        return;
    }
    if (name === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    let commentContainer = document.createElement("div");
    let newCommentParagraph = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
        commentContainer.remove();
    });
    newCommentParagraph.textContent =
        name + ": " + comment + " (" + fecha.toLocaleString() + ")";
    commentContainer.appendChild(newCommentParagraph);
    commentContainer.appendChild(deleteButton);
    output.appendChild(commentContainer);
    commentInput.value = "";
    nameInput.value = "";
});