const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000 || process.env.PORT;

 

const uri =
  "mongodb+srv://admin:admin@usercluster.u4vosnj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const run = async () => {
    try {
        await client.connect();
        console.log("server connected with mongo");
        const users = client.db("users").collection('users');

        app.get('/', async(req, res) => {
            const query = {};
            const result = await users.find(query).toArray();
            res.send({result})
        })
    }
    finally {
        
    }
 }
run().catch(console.log)
app.listen(port, () => {
  console.log("server is running in port", port);
});
