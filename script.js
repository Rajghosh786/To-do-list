const searchbtn = document.getElementById("searchbtn");
const searchbar = document.getElementById("searchbar");
const ull = document.getElementById("ullist");
// const checkin = document.querySelector(".checkin")
const checkout = document.querySelector(".checkout");
const entrylist = document.querySelector(".entrylist");
const unorderd = document.querySelector(".unorderd");

// let todo = document.querySelector(".todo")


// checkin.addEventListener('click', function(){
//     todo.classList.toggle("line")
// })

searchbtn.addEventListener('click',append);
searchbtn.addEventListener('click',clear);
// entrylist.addEventListener('click',filtertodo);

    function clear(){
        searchbar.value = "";
    }
    function append(event){
        if(searchbar.value.length > 0){
            event.preventDefault();
            // event.preventDefault makes it not disappear in refresh

            const creatediv = document.createElement('div');
                creatediv.classList.add("firstlist"); 
            const createli = document.createElement('li');
                createli.innerText = searchbar.value;
                createli.classList.add("todo");
                creatediv.appendChild(createli);
            const createbutton = document.createElement('button');
                createbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
                createbutton.classList.add("checkin");
                creatediv.appendChild(createbutton);
            const createbutton2 = document.createElement('button');
                createbutton2.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                createbutton2.classList.add("checkout");
                creatediv.appendChild(createbutton2);
                ull.appendChild(creatediv);
                savedata()
        }
    }   

    ull.addEventListener('click',deleting)
    function deleting(e){
        // console.log(e.target.parentElement)
        const item = e.target
        if(item.classList[0] === "checkout"){         
        const removeelement = item.parentElement;
        removeelement.remove();
        savedata()
        };
        if(item.classList[0] === "checkin"){   
            const checkelement = item.parentElement;      
            checkelement.classList.toggle("line")
            savedata()
        };
    }

    function savedata(){
        localStorage.setItem("data",ull.innerHTML);
    }
    function showdata(){
        ull.innerHTML = localStorage.getItem("data");
    }
    showdata();
    // function deletedata(){
    //     ull.innerHTML = localStorage.removeItem("data");
    // }
// function filterlist(e){
//     const todos = ull.childNodes[3];
//     console.log(todos);
//     // console.log(e.target.value);
//     // todos.map(function(todo){
//     //     if(e.target.value === "all"){
//     //        todo.style.display = "hide"; 
//     //     }else{
//     //         console.log('error')
//     //     }
//     // })
// }

// function filtertodo(e){
//     const todos = ull.childNodes;
//     todos.forEach(function(todo){
//         switch(e.target.value){
//             case "all":
//                 todo.style.display = "flex";
//             break;
//             case "completed":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 }else{
//                     todo.style.display = "none";
//                 }
//             break;
//             case "completed":
//                 if(!todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 }else{
//                     todo.style.display = "none";
//                 }
//             break;
//         }   
//     })
// }