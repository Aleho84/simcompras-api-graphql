# SimCompras-API-GrapQL
` SimCompras-API-GraphQL v0.1.0 - Backend E-Commerce`

`<website>` : https://simcompras-api-graphql.herokuapp.com/

![](https://img.shields.io/website?style=plastic&url=https%3A%2F%2Fsimcompras-api.herokuapp.com%2F)
![](https://img.shields.io/github/package-json/v/aleho84/simcompras-api-graphql?style=plastic)



##GraphQL querys
```
query {
	getAllProducts {
	  _id
	  name
	  description
	  code
	  thumbnail
	  price
	  stock
	}
}
```

```
mutation{
  addProduct(input:{
        name: "Bombon BON O BON Blanco",
        description: "Bombon BON O BON Blanco X 1 Unidad",
        code: "77961815",
        thumbnail: "https://static.cotodigital3.com.ar/sitios/fotos/full/00118600/00118609.jpg?3.0.137b",
        price: 40.49,
        stock: 120
  }){
    _id
    name
  }
}
```

```
mutation {
	deleteProduct(id:"63279be60d1d80898bce6398"){
    _id
    name
  }
}
```

```
mutation{
  updateProduct( id: "63279bdf0d1d80898bce6396", input:{
        name: "Bombon BON O BON Negro",
        description: "Bombon BON O BON Negro X 1 Unidad",
        code: "77961814",
        thumbnail: "https://static.cotodigital3.com.ar/sitios/fotos/full/00118600/00118608.jpg?3.0.138f",
        price: 44.49,
        stock: 75
  }){
    _id
    name
  }
}
```

## Dependencies
**Install all dependencies:**`npm install`


## Envrioment variables
You will need to pass the following environment variables 
(.env file example)

	NODE_ENV=PROD
	PORT=8080
	DB_MODE=mongoDB
	RUN_MODE=fork
	SECRET_STRING=ADLVFEyWItdkAi9V1KPt
	TIME_SESSION=60
	MONGOOSE_URI=mongodb://localhost:27017/simcompras
	SERVER_SWAGGER=http://localhost:8080/
	
## Available Scripts
**In the project directory, you can run:**

`npm run start`
- Runs the app in production mode
- Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

`npm run dev`
- Runs the app in development mode
- Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
- The page will reload if you make edits

`npm run apitest`
- Runs test of enpoints whit mocha

# 
![](https://img.shields.io/github/last-commit/aleho84/simcompras-api-graphql?style=plastic) 
![](https://img.shields.io/github/commit-activity/y/aleho84/simcompras-api-graphql?style=plastic)
