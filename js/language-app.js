const definitions = `{
    "hello": "hola", 
    "dog": "perro", 
    "cat": "gato", 
    "apple": "manzana", 
    "cup": "taza", 
    "bottle": "botella", 
    "water": "agua",
    "house": "casa",
    "friend": "amigo",
    "family": "familia",
    "food": "comida",
    "car": "coche",
    "school": "escuela",
    "book": "libro",
    "table": "mesa",
    "chair": "silla",
    "door": "puerta",
    "window": "ventana",
    "sun": "sol",
    "moon": "luna",
    "class": "clase"
  }`;
  
  const defsObject = JSON.parse(definitions);
  
  const container = document.getElementById("cards");
  container.innerHTML = ""; 

  let count = 0;
  
  for (let x in defsObject) {
    let button = document.createElement("button");
    button.className = "btn btn-lg btn-primary m-2";
    button.textContent = x;
    button.addEventListener("click", function() { 
      alert(`La palabra en español para "${x}" es ${defsObject[x]}`);
      this.remove();

      count++;
      document.querySelector("#word-count").innerHTML = count;
    });
    container.appendChild(button);
  }

  // make an option for french
  // add the fill in the blank with greetings
  // summarize how many words the learner has learner