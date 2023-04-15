const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.set("view engine","ejs")
mongoose.set("strictQuery", true);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const path = require('path');
var url = "mongodb://127.0.0.1:27017/mensworld";
mongoose.connect(url, { useNewUrlParser: true });

var mySchema = new mongoose.Schema({
  fullname: String,
  username: String,
  password:String,
  email: String,
  state: String,
  address: String,
  zipcode: String,
});
var signup = mongoose.model("signups", mySchema);
app.use(cookieParser());
app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: true
}));
app.get('/', (req, res) => {
  let viewCount = req.cookies.viewCount || 0;
  viewCount++;
  res.cookie('viewCount', viewCount);
  console.log(`Page visited ${viewCount} times.`);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('.'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/login.html", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/demo.html", (req, res) => {
  res.sendFile(__dirname + "/demo.html");
});

app.get("/products.html", (req, res) => {
  res.sendFile(__dirname + "/products.html");
});

app.get("/register.html", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
  var info = {
    fullname: req.body.fullname,
    username: req.body.username,
    password:req.body.password,
    email: req.body.email,
    state: req.body.state,
    address: req.body.address,
    zipcode: req.body.zipcode
  };

  var me = new signup(info);

  me.save().then(() => {
      console.log("data sent in mongo");
    })
    .catch((err) => {
      console.log(err);
    });
  res.sendFile(__dirname + "/index.html");
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query the database to find a user with the given username and password
    const user = await signups.findOne({ username, password }).then(founditem=> 
      res.render("index",{details:founditem}) );
    

    if (user) {
      // Generate a session ID
      const sessionId = generateSessionId();

      // Set the session ID as a cookie in the response
      res.cookie('session_id', sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // expires in 7 days
        
        //
      });

      // redirect to the protected resource or homepage
    } else {
      // Handle invalid login credentials
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    // Handle database errors
    console.log(error);
    res.status(500).send('Internal server error');
  }
});





app.listen(8800, () => {
  console.log("Server started at 8800");
});
