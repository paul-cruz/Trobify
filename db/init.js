db = db.getSiblingDB('db-trobify');
db.dropDatabase();
db = db.getSiblingDB('db-trobify');

db.createCollection("properties");
db.createCollection("users");
db.createCollection("reports");