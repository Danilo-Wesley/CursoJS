const btnAdd = document.querySelector("#add-btn")

const taskTitle = document.querySelector("#task-title")

const listaUl = document.querySelector("#task-list")

btnAdd.addEventListener("click", clicar)

function clicar(e){

    e.preventDefault()


    if(taskTitle.value.trim() == ""){
        alert("adicione uma tarefa ne pai")
        taskTitle.value = ""
        return
        
    }
    
    let listaLi = document.createElement("li")

    listaLi.innerHTML = `
                    <span class="task-title">${taskTitle.value}</span>
                    <div class="li-icons">
                        <ion-icon name="checkmark-outline" class="done-btn"></ion-icon>
                        <ion-icon name="close-outline" class="remove-btn"></ion-icon>
                    </div>
                `
    
    listaLi.setAttribute("class", "task-box")

    const botaoCheck = listaLi.querySelector(".done-btn")

    botaoCheck.addEventListener("click", function(){
        listaLi.classList.toggle("done")
    })

    const botaoRemove = listaLi.querySelector(".remove-btn")

    botaoRemove.addEventListener("click", function(){
        listaLi.remove()
    })

    listaUl.appendChild(listaLi)

    taskTitle.value = ""
    
}

