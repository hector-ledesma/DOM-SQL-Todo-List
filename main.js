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
        div.innerHTML = "";
        data.forEach(d => {
            // div.innerHTML += "<br> <button onclick="deleteItem('" + d.id + "')> X </button>" + d.item;    
            div.innerHTML+= `<div class="itmCont" id="${d.id}"> <button class="delBtn" onclick="deleteItem('${d.id}')" > <i class="fas fa-trash-alt"></i> </button> <button class="edBtn" onclick="addEdit('${d.id}')" > <i class="far fa-edit"></i> </button> <span class="itmData"> ${d.item} </span> </div>`;
        });
        }
    };
    xhttp.open("GET", "printJson.php", true);
    xhttp.send();
}

document.addEventListener('click',function(e){
    if(e.target.classList.contains("itmData")){
        e.target.classList.toggle('done');
     }
 });


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
    if(editDiv.childNodes.length < 8) {
        const eData = JSON.parse(edit.responseText);
        console.log(eData);
        editInput = document.createElement("input");
        editInput.type = "text";
        editInput.className = "editing";
        editInput.name = `${id}`;
        editInput.value = eData.item;
        editDiv.appendChild(editInput);
        editInput.addEventListener("keydown", event => {
            if(event.keyCode == 13) {
                console.log("we here"+ editInput.value);
                const update = new XMLHttpRequest();
                update.open("POST", "updateItem.php", true);
                update.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                update.send("id=" + id + "&new=" + String(editInput.value));
                setTimeout(() => {
                    init();
                },100);
            } else if (event.keyCode == 27) {
                editInput.remove();
            }
            //
        });
        
        }
    
    
    console.log(editDiv.childNodes);
}
