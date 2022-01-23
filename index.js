var express=require('express')
var data=require("./data")
var app=express()
app.use(express.json())
app.listen(3030,()=>{
    console.log("Server running at http://127.0.0.1:3030")
})

app.get('/parking',(req,res)=>{
    res.send(data)

})

app.get('/parking/:id',(req,res)=>{
    id = req.url.split('/')[2]
    blog=data.filter((data)=>data.id==id)
    res.send(blog)
})

app.post('/parking',(req,res)=>{
    let usr={

            id : data.length + 1,
            slot :req.body.slot,
            parking_id :req.body.parking_id,
            vehicle_number :req.body.vehicle_number,
            vehicle_id :req.body.vehicle_id    
    }
    data.push(usr)
    res.send(usr)
})

app.delete('/parking/:id',(req,res)=>{
    let id = req.params.id
    let index = data.findIndex((data)=>{
        return (data.id == Number.parseInt(id))
    })
    if(index >=0){
        let bl=data[index]
        data.splice(index, 1)
        res.json(bl)
    }else(
        res.status(404)
    )

})