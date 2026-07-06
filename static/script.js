document.addEventListener("DOMContentLoaded", () => {
    console.log("To-Do App Loaded");
});

function filterTasks(type) {
    let items = document.querySelectorAll("li");

    items.forEach(item => {
        if (type === "all") {
            item.style.display = "flex";
        } else if (type === "completed") {
            item.style.display = item.classList.contains("done") ? "flex" : "none";
        } else {
            item.style.display = !item.classList.contains("done") ? "flex" : "none";
        }
    });
}