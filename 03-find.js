var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url,function(err,db) {
    if (err) console.log(err)
    
    var collection=db.collection('parrots')
    
    collection.find({
        age: {
            $gt: +parseInt(process.argv[2])
        } 
    }).toArray(function(err,documents){
        if (err) console.log(err)
        console.log(documents)
        db.close()
        
    })

})