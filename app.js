const express = require("express");
const bodyParser = require("body-parser");
const client = require("@mailchimp/mailchimp_marketing");

const YOUR_API_KEY = "58a9aa00193771be812b45e54170ea4b-us11"
const YOUR_SERVER_PREFIX = "us11";
const LIST_ID = "f0aecf6fd2";

client.setConfig({
    apiKey: YOUR_API_KEY,
    server: YOUR_SERVER_PREFIX,
  });

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    // console.log(fname + " " + lname + " " + email);

    const run = async () => {
        const response = await client.lists.addListMember(LIST_ID, {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        });
        try {
          res.sendFile(__dirname + "/success.html");
        } catch(e) {
            res.send("error");
        }
        // if (response.status = "subscribed") {
        //   res.send("Success, user subscribed");
        // }
        // else {
        //   // console.log("Failed " + response.status)
        // }
      };
      
      run();
      

});

app.post("/success", function(req, res) {
  res.redirect("/");
});



app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});

// api key
// API Key = 58a9aa00193771be812b45e54170ea4b-us11
// audiance id = f0aecf6fd2