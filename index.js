const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
    let mydata=fs.readFileSync('home.html','utf8');
    res.end(mydata);
});

var data=[

]

app.get('/books', function(req, res){

    res.send({"message":"Book fetch Successfully","data":data});
});



app.post('/books', function(req, res){
    let JSONData=req.body;
    let title=JSONData['title']
    let author=JSONData['author']
    if(title && author){
        data.push({
            "id":(data.length+1),
            "title":title,
            "author":author
        })
        res.send({"message":"Book Added Successfully","data":data});
    }else{
        res.send({"message":"Validation Error","errors":"title and author field required"});
    }
});

app.delete('/books/:id', function(req, res){
        var id=req.params.id
        var newdata=data.filter(e1 => e1.id != id)
        data = newdata;
    res.send({"message":"book was successfully deleted","data":data});
});


app.listen(port=8000,function (){
    console.log("Server Run Success")
})
