var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err,db) {
    if (err) throw err
    
    var collection=db.collection('docs')
    
    var o = { firstName: process.argv[2]
            , lastName: process.argv[3]
    }
    
    var ojson=JSON.stringify(o)
    
    collection.insert(o, function(err,data) {
        if (err) throw err
        
        console.log(ojson)
        db.close()
        
    })
    
    
})