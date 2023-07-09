var template = "https://drive.google.com/uc?id="


document.getElementById("drivelink").onclick = function(){
    navigator.clipboard
    .readText()
    .then((clipText) => {
        document.getElementById("drivelink").value = clipText
        hashValue = clipText;
        hash = hashValue.split("/");
        embedlink = template + hash[hash.length-2];
        console.log(embedlink);
        document.getElementById("embedlink").value = embedlink
    });
};

document.getElementById("embedlink").onclick = function(){
    navigator.clipboard.writeText(document.getElementById("embedlink").value)
};