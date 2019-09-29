const selecttab = () => {
    document.querySelector('.accountdet').classList.toggle("hidden");
    document.querySelector('.accountsetting').classList.toggle("hidden");
    var menup = document.querySelectorAll('.setpointer');

    for (let index = 0; index < menup.length; index++) {
        menup[index].classList.toggle("activate");
    }
}