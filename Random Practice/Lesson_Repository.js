function show_result(){
    const c = document.getElementById("lessonNumOrTitleOrTags").value;
    if (c !== ""){
            const a = document.createElement("button");
            a.setAttribute("class", "btnResult");
            a.setAttribute("formaction", "#");
            a.textContent = c;
            document.getElementById("resultButton").appendChild(a);
        }

}

// Show the contents of the Lesson with the UI
// Read data from Pocketbase and make it as Parameters for conditions
