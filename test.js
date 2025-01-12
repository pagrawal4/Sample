function main() {  
  var canvas = document.getElementById("sample");  
  if (!canvas) { 
    console.log("Error");
    return false; 
  } 

  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(255, 0, 0, 1.0)";
  ctx.fillRect(120, 10, 150, 150);
}
