console.log("working");
const div =  document.getElementById("demo");

let data;

init();

function init() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log(data);
        div.innerHTML = "Data received. List length: " + data.length;
        data.forEach(d => {
            // div.innerHTML += "<br> <button onclick="deleteItem('" + d.id + "')> X </button>" + d.item;    
            div.innerHTML+= `<p id="${d.id}"> <button onclick="deleteItem('${d.id}')" > X </button> <button onclick="addEdit('${d.id}')" > E </button> ${d.item}</p>`;
        });
        }
    };
    xhttp.open("GET", "printJson.php", true);
    xhttp.send();
}


function deleteItem(id) {
        const post = new XMLHttpRequest();
        post.open("POST", "deleteItem.php", true);
        post.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        post.send("testin=" + id);
        setTimeout(() => {
            init();
        }, 1);
}

function addEdit(id) {
    editDiv = document.getElementById(id);
    console.log(editDiv.childNodes);
    const edit = new XMLHttpRequest();
    edit.open("GET", "getData.php?itemid=" + id, false);
    edit.send();
    if(editDiv.childNodes.length < 6) {
        const eData = JSON.parse(edit.responseText);
        console.log(eData);
        editInput = document.createElement("input");
        editInput.type = "text";
        editInput.className = "editing";
        editInput.name = `${id}`;
        editInput.value = eData.item;
        editDiv.appendChild(editInput);
        }
    
    
    console.log(editDiv.childNodes);
}
