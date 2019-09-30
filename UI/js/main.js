const selecttab = () => {
  document.querySelector('.accountdet').classList.toggle("hidden");
  document.querySelector('.accountsetting').classList.toggle("hidden");
  var menup = document.querySelectorAll('.setpointer');

  for (let index = 0; index < menup.length; index++) {
    menup[index].classList.toggle("activate");
  }
}

const filterResult = () => {
  var input = document.getElementById("searchinput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("diary-table");
  var tr = table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}