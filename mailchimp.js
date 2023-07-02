const client = require("@mailchimp/mailchimp_marketing");

const YOUR_API_KEY = "58a9aa00193771be812b45e54170ea4b-us11"
const YOUR_SERVER_PREFIX = "us11";
const LIST_ID = "f0aecf6fd2";


client.setConfig({
    apiKey: YOUR_API_KEY,
    server: YOUR_SERVER_PREFIX,
  });

const subscribingUser = {
  firstName: "Prudence",
  lastName: "McVankab",
  email: "prudence.mcvankab@example.com"
}

client.setConfig({
  apiKey: YOUR_API_KEY,
  server: YOUR_SERVER_PREFIX,
});

const run = async () => {
  const response = await client.lists.addListMember(LIST_ID, {
    email_address: "mbigrasnui@gmail.com",
    status: "subscribed",
  });
  console.log(response);
};

const run2 = async () => {
  const response = await client.lists.createList({
    name: "User List",
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "MBI",
      address1: "735 Monte Masson",
      city: "Mascouche",
      country: "Canada",
    },
    campaign_defaults: {
      from_name: "Michel Bigras",
      from_email: "mbigrtasnui@gmail.com",
      subject: "Nouvelled du Mois",
      language: "french",
    },
  });
  console.log(response);
};

run();
// run2();


