var searchBar = document.querySelector("input");
searchBar.addEventListener("click", function() {
  var search = document.getElementsByClass("searchField");
  search.style.border = "solid";

  document.getElementById("searchField").placeholder="";
  document.getElementsByName("search")[0].placeholder="";
})
