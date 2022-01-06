



fetch("http://www.raydelto.org/json.php").then((respuesta)=>{
            return  respuesta.json();
        }).then((respuesta) =>{
            document.getElementById("nombrej").value=respuesta.name;
            document.getElementById("apellidoj").value=respuesta.lastName;
        })
        const API_URL = "http://jsonplaceholder.typicode.com";
        const HTMLResponse= document.querySelector("#xml")
        const ul = document.createElement('ul');
        var select=document.getElementById("search")

function mostrar(){

    var optionValue=document.getElementById("search").value

    fetch('http://jsonplaceholder.typicode.com/posts').then((response)=> response.json()).then((posts) =>{
        posts.forEach((post)=>{
            let elem= document.createElement('li');
   
            if (optionValue=="0"){
                elem.appendChild(document.createTextNode(post.userId));
            
            }
            if (optionValue=="1"){
                elem.appendChild(document.createTextNode(post.id));
            
            }
            if (optionValue=="2"){
                elem.appendChild(document.createTextNode(post.title));
            
            }
            if (optionValue=="3"){
                elem.appendChild(document.createTextNode(post.body));
            
            }
            ul.appendChild(elem)
        });
        
        HTMLResponse.appendChild(ul);
    });

}

function principal(){
    localStorage.clear();
}