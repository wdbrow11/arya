var shoutouts = [
  "You are really funny.",
  "You always have lots of creative ideas and I like how you are always determined to execute your ideas",
  "you are always super enthusiastic",
  "how you make the difficult parts of projects super fun to work on.",
  "You are so outgoing!",
  "Your willingness to have fun!",
  "Your funny personality and I am comfortable to ask you anything if I have questions.",
  "your unwavering persistence even though you've had so many problems with repl.it and everything else haha!",
  "that you always approach something with such a positive attitude",
  "How nice you are and how much you like Netflix!",
  "Your enthusiasm and positivity.",
  "Your enthusiasm & appreciation over the things you're interested in!! (Especially The Office)",
  "ME:)",
  "That no matter if you're tired or not, you're always wearing a huge smile that makes me smile too.",
  "You are such a light and have the ability to make anyone smile! Also, your passion for everything is so contagious."
]

for (x of shoutouts) {
  $("#shoutout-container").append("<p>" + x + "</p> <br>");
}
