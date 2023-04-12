const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const routecliente = require("./routes/cliente");
const notfound = require("./middleware/noifound");
const cfg = require("./config/cfg");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

mongoose.connect(cfg.db, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/clientes",routecliente);

app.use(notfound);

app.listen(3000, () => console.log("Servidor online ... "));
