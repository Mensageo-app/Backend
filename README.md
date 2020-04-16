# Mensageo-BE

Table in database => JSONs: <br/>
  *center => ./data/medical-centers/center <br/>
  *region => ./data/medical-centers/region <br/>
  *centerType => ./data/medical-centers/centerType <br/>


### API

#### temporary auth

just add key in header `x-api-key` 

#### quota

currently disabled

```
  usagePlan:
    quota:
      limit: 5000
      offset: 2
      period: MONTH
    throttle:
      burstLimit: 200
      rateLimit: 100
```

#### deploy

`NODE_ENV` and `STAGE` need to be set along with the `.env` file variables

```
$ npm migrate
$ npm seed
$ npm deploy
```