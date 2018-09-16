# thank-you-heroes

> thank you all the first responders, protecting the general public in the bubble of relative safety

## Build Setup

``` bash
cd client
# install dependencies
npm install
# by default runs on port 8080
npm start

cd ..
cd server
npm install
# by default runs on port 8081
npm start
```
### start mongodb
``` bash
# on windows
# download mongodb
md "\data\db" "\data\log"
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
# by default runs on port 27017
```

# To upload the database files to git:
mongodump --db="SourceDBname" --out="path\to\data-backup"
# then upload the folder to git and run the following command locally to update your local database.
mongorestore --db="TargetDBname" "path\to\backupfiles"
