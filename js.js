let xhr = new XMLHttpRequest();
let username = ""

function loadData() {
  let url_input = document.getElementById("url_input");
  username = url_input.value
  


  xhr.onloadend = function () {
      if (this.responseText !== "") {
          var data = JSON.parse(this.responseText);
          console.log(data)
          if (data.message !== "Not Found"){
          var img = document.createElement("img");
          img.src = data.avatar_url;
          img.classList.add("rounded-full","w-[100px]","h-[100px]","my-4")
          var name = document.createElement("h3");
          name.classList.add("mb-3")
          name.innerHTML = data.name;

          document.getElementById("return").append(img, name);
          }else{
            alert(url_input.value+" tidak menemukan username ini");
          }
          // document.getElementById("button").innerHTML = "Done";

          // Menentukan method xr penggunaan
          // xhr.onreadystatechange = function() { ... };
          // xhr.onload = function() { ... };
          // xhr.onerror = function() { ... };
          // xhr.onprogress = function() { ... };
      }
  };

  xhr.open("GET",`https://api.github.com/users/${url_input.value}`, true);
  xhr.send();

  // xhr.onloadend = function () {
  //   if (this.responseText !== "") {
  //     var data = JSON.parse(this.responseText);
   
  //     if (data.length > 0) {
  //       const parentElement = document.getElementById("load-chat");

  //       for (let i in data) {
  //         // Create a new element for each data item
  //         const newElement = document.createElement("li");

  //         // Add the data to the new element
  //         newElement.classList.add("my-3", "py-1", "px-2", "rounded-sm", "bg-sky-500", "min-h-max");
          
  //         // Create and append the first "p" element to the new "li" element
  //         const firstPElement = document.createElement("p");
  //         firstPElement.classList.add("text-white", "text-[10px]", "-mb-[6px]");
  //         firstPElement.innerHTML = data[i].username;
  //         newElement.appendChild(firstPElement);
          
  //         // Create and append the second "p" element to the new "li" element
  //         const secondPElement = document.createElement("p");
  //         secondPElement.classList.add("text-white", "font-semibold", "min-w-max");
  //         secondPElement.innerHTML = data[i].logs_chat;
  //         newElement.appendChild(secondPElement);
          
  //         // Append the new element to the parent element
  //         parentElement.appendChild(newElement);
          
 
  //       }
  //     } else {
  //       console.log("ga");
  //     }

     
  //     // Menentukan method xr penggunaan
  //     // xhr.onreadystatechange = function() { ... };
  //     // xhr.onload = function() { ... };
  //     // xhr.onerror = function() { ... };
  //     // xhr.onprogress = function() { ... };
  //   }
  // };

  // xhr.open(
  //   "GET",
  //   `https://asia-south1.gcp.data.mongodb-api.com/app/ngajax_chat-jttwr/endpoint/getjax`,
  //   true
  // );
  // xhr.send();
}

function sendChat() {
  if (username == ""){
    alert("masukan username github")
  }else{
  var xhr = new XMLHttpRequest();
  var url = "https://asia-south1.gcp.data.mongodb-api.com/app/ngajax_chat-jttwr/endpoint/postjax";
  let chat = document.getElementById("chat")

  
  var data = JSON.stringify({
      username: username,
      logs_chat: chat.value
  });

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {               
      console.log (this.responseText);
      if (this.responseText !== "") {
            var data = JSON.parse(this.responseText);
         
            if (data.length > 0) {
              const parentElement = document.getElementById("load-chat");
      
              for (let i in data) {
                // Create a new element for each data item
                const newElement = document.createElement("li");
      
                // Add the data to the new element
                newElement.classList.add("my-3", "py-1", "px-2", "rounded-sm", "bg-sky-500", "min-h-max");
                
                // Create and append the first "p" element to the new "li" element
                const firstPElement = document.createElement("p");
                firstPElement.classList.add("text-white", "text-[10px]", "-mb-[6px]");
                firstPElement.innerHTML = data[i].username;
                newElement.appendChild(firstPElement);
                
                // Create and append the second "p" element to the new "li" element
                const secondPElement = document.createElement("p");
                secondPElement.classList.add("text-white", "font-semibold", "min-w-max");
                secondPElement.innerHTML = data[i].logs_chat;
                newElement.appendChild(secondPElement);
                
                // Append the new element to the parent element
                parentElement.appendChild(newElement);
                
       
              }
              const element = document.getElementById("load-chat");

// Lakukan scroll ke bawah pada elemen tersebut
element.scrollTop = element.scrollHeight;
            } else {
              console.log("ga");
            }}
  };
  xhr.send(data);
  return false;
  }}

  var buttons = document.getElementById("toggle-button")
  var does_b = true
  var menu = document.getElementById("react-toggle")

  buttons.addEventListener("click",function(){
   console.log("same")
    
    if(does_b){
      menu.classList.remove("sml-hd")
      does_b = false
    }else{
      menu.classList.add("sml-hd")
      does_b = true
    }


  })

function clearReturn() {
  document.getElementById("return").innerHTML = "";
}



