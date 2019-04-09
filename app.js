const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let result = "";
  let even = true;
  let i = 1;
  while (i <= 50){
    if (even){
      result += `<p>${i} Soy Inpar!</p>`
      even = false 
    } else {
      result += `<p>${i} Soy Par!`
      even = true 
    }
    i ++;
  }
  res.send(result);
})

app.listen(3000, () => console.log("up and runnig")); 