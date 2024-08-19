const searchbtn = document.getElementById("searchbtn");
const searchbar = document.getElementById("searchbar");
const ull = document.querySelector(".ullist");
const checkout = document.querySelector(".checkout");
const entrylist = document.querySelector(".entrylist");
const unorderd = document.querySelector(".unorderd");
const all = document.querySelector(".all");
const completed = document.querySelector(".completed");
const pending = document.querySelector(".pending");
const firstlist = document.querySelector(".firstlist")
const history = document.querySelector(".historymain")

searchbtn.addEventListener('click',append);
searchbtn.addEventListener('click',clear);
searchbar.addEventListener('keyup',function(keyboard){
    if(keyboard.which === 13){
        console.log(searchbar.value)
        append()
        searchbar.value = "";
    }
    })


    function clear(){
        searchbar.value = "";
    }
    function append(event){
        if(searchbar.value.length > 0){
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
                // savedata()
        }
    }   

    ull.addEventListener('click',deleting)
    function deleting(e){
        // console.log(e.target.parentElement)
        const item = e.target
        if(item.classList[0] === "checkout"){         
        const removeelement = item.parentElement;
        removeelement.remove();
        // savedata()
        };
        if(item.classList[0] === "checkin"){   
            const checkelement = item.parentElement;      
            checkelement.classList.toggle("line")
            // savedata()
        };
    }
    entrylist.addEventListener('change',sorting)
    entrylist.addEventListener('change',remaining)
    entrylist.addEventListener('change',notRemaining)

    function sorting(data){
        const todos = ull.childNodes
        todos.forEach(el=>{
            if(data.target.value === "all"){
                console.log("all")
                el.style.display="flex"
            }
        })
    }

    
    function remaining(data){
        const todos = ull.childNodes
        todos.forEach(el=>{
            if(data.target.value === "pending" && el.classList.contains('line')){
                el.style.display="none"
            }else{
                el.style.display="flex"
            }
        })
    }

    function notRemaining(data){
        const todos = ull.childNodes
        console.log(todos)
        console.log(data.target)
        todos.forEach(el=>{
            if(data.target.value === "completed" && !el.classList.contains('line')){
                el.style.display="none"
            }        
        })
    }


    // function savedata(){
    //     localStorage.setItem("data",ull.innerHTML);
    // }
    // function showdata(){
    //     ull.innerHTML = localStorage.getItem("data");
    // }
    // showdata();
    // function deletedata(){
    //     ull.innerHTML = localStorage.removeItem("data");
    // }
    // deletedata()

