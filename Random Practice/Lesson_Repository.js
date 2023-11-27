import PocketBase from 'https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@latest/dist/pocketbase.es.mjs';

const pb = new PocketBase('http://127.0.0.1:8090');

const record = await pb.collection('Lesson_Repository').getFullList({
    expand: 'relField1, relField2',
});

var times = 0;
let clicked = false;
record.forEach(each => {
    document.querySelector('#myButton').addEventListener('click', ()=> {
        let c = document.getElementById("lessonNumOrTitleOrTags").value;
        if (c === each.Title || c === each.Lesson_Number && c !== "" && times === 0 ) {
            times += 1;
            const a = document.createElement("span");
            a.setAttribute("class", "btnResult");
            a.setAttribute("id", "showLesson");
            a.textContent = each.Title;
            document.getElementById("resultButton").appendChild(a);
            a.addEventListener('click', ()=> {
                if (clicked === false) {
                    clicked = true;
                    document.getElementById("lessonResult").style.display = "block";

                    //Lesson_Number
                    const Lesson_Number = document.createElement("p");
                    Lesson_Number.setAttribute('class', 'lessonOutput');
                    Lesson_Number.textContent = "Lesson No: " + each.Lesson_Number
                    document.getElementById("lessonResult").appendChild(Lesson_Number);

                    //Title
                    const title = document.createElement("p");
                    title.setAttribute('class', 'lessonOutput');
                    title.textContent = "Title: " + each.Title
                    document.getElementById("lessonResult").appendChild(title);
                    //Objectives
                    const Objectives = document.createElement("p");
                    Objectives.setAttribute('class', 'lessonOutput');
                    Objectives.textContent = "Objectives: " + each.Objectives;
                    document.getElementById("lessonResult").appendChild(Objectives);
                    //Summarization
                    const Summarization = document.createElement("p");
                    Summarization.setAttribute('class', 'lessonOutput');
                    Summarization.textContent = "Summarization: " + each.Summarization;
                    document.getElementById("lessonResult").appendChild(Summarization);
                    //Introduction
                    const Introduction = document.createElement("p");
                    Introduction.setAttribute('class', 'lessonOutput');
                    Introduction.textContent = "Introduction: " + each.Introduction;
                    document.getElementById("lessonResult").appendChild(Introduction);
                    //First_Romans
                    const First_Romans = document.createElement("p");
                    First_Romans.setAttribute('class', 'lessonOutput');
                    First_Romans.textContent = "First_Romans: " + each.First_Romans;
                    document.getElementById("lessonResult").appendChild(First_Romans);
                    //Second_Romans
                    const Second_Romans = document.createElement("p");
                    Second_Romans.setAttribute('class', 'lessonOutput');
                    Second_Romans.textContent = "Second_Romans: " + each.Second_Romans;
                    document.getElementById("lessonResult").appendChild(Second_Romans);
                    //Third_Romans
                    const Third_Romans = document.createElement("p");
                    Third_Romans.setAttribute('class', 'lessonOutput');
                    Third_Romans.textContent = "Third_Romans: " + each.Third_Romans;
                    document.getElementById("lessonResult").appendChild(Third_Romans);
                    //Conclusion
                    const Conclusion = document.createElement("p");
                    Conclusion.setAttribute('class', 'lessonOutput');
                    Conclusion.textContent = "Conclusion: " + each.Conclusion;
                    document.getElementById("lessonResult").appendChild(Conclusion);
                }
            });
        }
    });

});