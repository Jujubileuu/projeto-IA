let comentariosSR = document.querySelector
("#comentariosSR")

fetch("database.json").then((response) => {
    response.json().then((comentariosSR) => {
        console.log(comentariosSR);
    })
})