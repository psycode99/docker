// init-mongo.js

// Connect to the admin database
db = db.getSiblingDB('admin');

// Check if the user already exists
if (!db.getUser('madmax')) {
  // Create the root user
  db.createUser({
    user: 'madmax',
    pwd: 'woof',
    roles: [{ role: 'root', db: 'admin' }]
  });
} else {
  print('User "madmax" already exists. Skipping user creation.');
}