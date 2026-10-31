function searchCollege() {
    let search = document.getElementById("search").value.toLowerCase();

    if (search.includes("club")) {
        document.getElementById("clubs").scrollIntoView();
    }
    else if (search.includes("event")) {
        document.getElementById("events").scrollIntoView();
    }
    else if (search.includes("college")) {
        document.getElementById("about").scrollIntoView();
    }
    else {
        alert("Information not found. Try clubs, events or college.");
    }
}