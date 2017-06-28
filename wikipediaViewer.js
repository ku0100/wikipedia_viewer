var searchBox = document.getElementById("searchBox");
var searchDisplay = document.getElementById("searchDisplay");

searchBox.addEventListener("blur", documentRevert);
searchBox.addEventListener("click", clearSearch);

function clearSearch() {
  searchBox.style.border = "solid";
  searchBox.style.borderColor = "rgb(255,165,0)";
  searchBox.style.borderWidth = "1.5px";
}

function documentRevert() {
  searchBox.style.border = "none";
  searchBox.value = "";
};

searchBox.addEventListener("keydown", function(event) {
  if (event.keyCode === 13 && searchBox.value !== "") {
    getResults();
  };
});

function getResults() {
  var wikiSearch = "https://en.wikipedia.org/w/index.php?search=" + searchBox.value;
  searchDisplay.src = wikiSearch;
  searchDisplay.style.display = "block";
}
