const express = require("express");
const cors = require("cors");
const app = express();
const lotteryexperience = [];

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["you will win the lottery!", 
  "You may win the lottery!", 
  "You probably won't win the lottery",
  "Anything is possible, including winning the lottery",
  "ok statistically you're not going to win the lottery"
  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.post('/api/lotteryexperience', (res, req) => {
  console.log(req.body)
  let experience = (lotteryexperience)
  experience.push(lotteryexperience)

  res.status(200).send(console.log("thank you for sharing your story!"))
  
})

app.get('api/lotteryexperience', (res, req) => {
  let stories = [lotteryexperience]
  res.status(200).send(stories)
})

deleteStory function (req, res) => {
  lotteryexperience.deleteStory(req.params.id)
  .then((result)=>{
      res.status(200).delete(house[i])
  }



app.listen(4000, () => console.log("Server running on 4000"))
