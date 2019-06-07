const messages = [
  "Congratulations and BRAVO!",
  "This calls for celebrating! Congratulations!",
  "You did it! So proud of you!",
  "I knew it was only a matter of time. Well done!",
  "Congratulations on your well-deserved success",
  "Heartfelt congratulations to you",
  "Warmest congratulations on your achievement",
  "So pleased to see you accomplishing great things",
  "Hooray! We just couldn’t be happier for you!",
  "Feeling so much joy for you today. What an impressive achievement!",
  "You’ve worked so hard for this. Congrats",
  "This is awesome! You’re awesome! Way to go!",
  "Sincere congratulations on your hard-earned success.",
  "You are proof that good things come to those who are willing to sacrifice to reach a worthwhile goal. Words can’t express how proud I am!",
  "You have the creativity and determination to do whatever you can dream. I hope you feel proud today and confident in your ability to rise to your next challenge",
  "Celebrating the dedication you’ve shown on the way to this achievement. You’ve earned every bit of the success you’re enjoying",
  "I’ve got a feeling this is only the beginning of even more great things to come for you!",
  "Celebrating the record you just set and looking forward to watching you cross your next finish line!",
  "I commend you on this latest success, and I look forward to seeing even more great things from you."
];

const messagesLength = messages.length;

// Function that generates a random number between 0 and the size of the array and returns an entry from the messages array
let completeMessages = () => {
  let min = 0;
  let max = Math.floor(messagesLength);
  return messages[Math.floor(Math.random() * (max - min) + min)];
};

export default completeMessages;
