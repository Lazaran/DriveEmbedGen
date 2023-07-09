var template = "https://drive.google.com/uc?id="

document.querySelector('#drivelink').addEventListener('input', topUpdate);
function topUpdate(e){
    hashValue = e.target.value
    if (hashValue != ""){
        hash = hashValue.split("/")
        embedlink = template + hash[hash.length-2]
        console.log(embedlink)
        document.getElementById("embedlink").value = embedlink
    }
};
