//localStorage.setItem("key", "value");
//localStorage.getItem("key");
//localStorage.clear();
//JSON.stringify(object);
//JSON.parse(string);

const local = JSON.parse(localStorage.getItem("user"));

if(local != null){
    formulaire.style.display = "none";
    h1.textContent = `Bonjour ${local.nom}, tu as ${local.age} ans`;
}

bouton.onclick = () => {
    const user = {
        nom: nom.value,
        age: age.value
    }



    localStorage.setItem("user", JSON.stringify(user));
}

clearInterval.onclick = () => {
    localStorage.clear();
    document.location.reload();
}