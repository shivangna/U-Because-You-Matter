let challengeMessages = () => {
  let min = 0;
  let max = Math.floor(messagesLength);
  return messages[Math.floor(Math.random() * (max - min) + min)];
};

const messages = [
  "Take 3 deeps breaths",
  "Write downn 3 things that you are grateful for",
  "Take a moment to just play. Move unwind",
  "What is meaningful to you?",
  "Enjoy something that you usually deny yourself",
  "Reflect on your heritage",
  "Head out to a local park or activity centre",
  "Go online or out into the world and lear something new",
  "How can you get more involved in what is important to you?",
  "Spend ONE hour today doing what YOU want",
  "Spend time with people your really care about",
  "Disconnect: Turn off all electronics for one hour today",
  "Give yourself a moment to just close your eyes and let go of your thoughts",
  "Do something you're good at to build self-confidence, then tackle a tougher task.",
  "Experiment: Creative expression and overall well-being are linked.",
  "Show some love to someone in your life",
  "Take a trip down memory lane and do some coloring book",
  "Take time to laugh. Hang out with a funny friend or check out cute videos online.",
  "Dance around while you do your housework",
  "Spend some time with a furry friend",
  "Practice forgiveness: towards someone or yourself"
];

const messagesLength = messages.length;

export default challengeMessages;
