// Navbar button
function showDropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
}

 // Journals drop down button
function showJournals() {
    var journalContent = document.getElementsByClassName("journal-dropdown");
    for (i = 0; i < journalContent.length; i++) {
        var journal = journalContent[i];
        journal.classList.toggle("show");
    }
}

// Articles drop down button
function showArticles() {
    var articleContent = document.getElementsByClassName("article-dropdown");
    for (i = 0; i < articleContent.length; i++) {
        var article = articleContent[i];
        article.classList.toggle("show");
    }
}

// Career Paper drop down
function showCareerPaper() {
    document.getElementById("paper-dropdown").classList.toggle("show");
}

// Exclusive to navbar for right now - if clicked outside navbar dropdown button, hide.
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdownContent = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdownContent.length; i++) {
            var openDropdown = dropdownContent[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}