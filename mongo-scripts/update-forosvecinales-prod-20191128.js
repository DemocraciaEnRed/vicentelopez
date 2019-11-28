

var db = connect('127.0.0.1:27017/forosvecinales-prod');

print('1.   Updating topic');

db.getCollection("topics").updateOne({"_id": ObjectId("5afef6648c9bec7d824108e0")},
      { 
        $set: { 
          "action.method" : "cause"
        }
      }
  )
  print(`   * Updating topic 5afef6648c9bec7d824108e0 => Updated "action.method"`);

print('* DONE');