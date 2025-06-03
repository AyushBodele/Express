const express = require('express');
const app = express();

const users = [{
    name: 'John Doe',
    kidneys: [{
        healthy: false,
    }]
}];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  let healthyKidneys = 0;
  johnKidneys.forEach(kidney => {
    if (kidney.healthy) {
      healthyKidneys++;
    }
  });
  const unheakthyKidneys = noOfKidneys - healthyKidneys;
  res.json({
    noOfKidneys,
    healthyKidneys,
    unheakthyKidneys
  });  
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done !"
    })
})

app.put("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
        }
        res.json({})
    })

app.delete("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    res.json({
        msg: "Done !"
    })
})
app.listen(3000)