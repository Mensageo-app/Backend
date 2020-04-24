### ENVS

- dev

### Deploy

#### DB

`$STAGE` and `$NODE_ENV` env vars need to be set. i.e.:
```
export STAGE=dev
export NODE_ENV=$STAGE
```

##### Schema
```
$ npm run migrate
```
or 
```
$ knex migrate:latest
```
##### Seeds
```
$ npm run seed
```
or
```
$ knex seed:run
```

