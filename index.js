console.log("hi");
const suc = (position) =>
{
    document.getElementById("demo").innerHTML="latitude = ";
    //document.getElementById("demo").innerHTML="longitude = " + position.coords.longitude;
}

function err(error){
    document.getElementById("demo").innerHTML="permission denied";
    console.log(error);
}
function getLocation(){
    navigator.geolocation.getCurrentPosition(suc,err);
}
