
let commentInput = document.getElementById("comment-input");
let button = document.getElementById("send-button");
let nameInput = document.getElementById("name-input");
let output = document.getElementById("newCommentParagraph");
button.addEventListener("click", function () {
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
    let newCommentParagraph = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
        newCommentParagraph.remove();
        deleteButton.remove();
    });
    newCommentParagraph.textContent = name + ": " + comment + " (" + fecha.toLocaleString() + ")";
    output.appendChild(newCommentParagraph);
    output.appendChild(deleteButton);
    commentInput.value = "";
    nameInput.value = "";
});
