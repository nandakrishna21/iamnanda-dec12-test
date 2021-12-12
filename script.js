function fnGetData(){
    var imgref = document.getElementById("imgid");
        fetch("https://meme-api.herokuapp.com/gimme").then((res)=>{
            console.log(res);
            return res.json();

         }).then((data)=>{
             console.log(data);
            imgref.src= data.url;
            })
        .catch((errormsg)=>{
            alert("Error while getting the msg!");
        })
}