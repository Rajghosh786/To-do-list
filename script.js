const searchbtn = document.getElementById("searchbtn");
const searchbar = document.getElementById("searchbar");
const ull = document.getElementById("ullist");

const checkout = document.querySelector(".checkout");
const entrylist = document.querySelector(".entrylist");
const unorderd = document.querySelector(".unorderd");



searchbtn.addEventListener('click',append);
searchbtn.addEventListener('click',clear);


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
