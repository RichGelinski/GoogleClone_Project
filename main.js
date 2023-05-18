const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome.0.0i271j46i67i340i433i650l2j0i67i433i650j46i433i512j46i67i199i465i650j46i131i340i433i512j69i65.894j0j7&sourceid=chrome&ie=UTF-8"
}