import {MongoClient} from ('mongodb');
import type { PersonModel, Persona } from "./types.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");
if(!MONGO_URL){
  console.log("Conexión a base de datos no realizada")
}

const url = 'mogodb://localhost:3000';
const client = new MongoClient(url);
await client.connect();


const dbname = MONGO_URL