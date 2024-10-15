function simpleChatbot(questionAnswerPairs, userQuestion) {
  userQuestion = userQuestion.toLowerCase();

  let closestQuestion = null;
  let highestScore = 0;

  for (const question in questionAnswerPairs) {
    const normalizedQuestion = question.toLowerCase();

    const questionWords = normalizedQuestion.split(" ");
    const userWords = userQuestion.split(" ");

    let score = 0;
    for (const word of questionWords) {
      if (userWords.includes(word)) {
        score++;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      closestQuestion = question;
    }
  }

  if (closestQuestion && highestScore > 0) {
    return questionAnswerPairs[closestQuestion];
  } else {
    return "I'm sorry, I don't understand the question.";
  }
}

const qaPairs = {  
  "What is your name?": "My name is Chatbot.",  
  "How can I help you?": "I can assist you with your queries.",  
  "What is the weather today?": "The weather is sunny.",  
  "What do you do?": "I help answer your questions and provide information.",  
  "Tell me a joke.": "Why don't scientists trust atoms? Because they make up everything!",  
  "What is your favorite color?": "I don't have feelings, but I think blue is nice!",  
  "How are you?": "I'm just a program, but I'm here to help you!",  
  "What is the capital of France?": "The capital of France is Paris.",  
  "What time is it?": "I don't have a clock, but you can check your device's time.",  
  "Can you help me with math?": "Sure! What math problem do you need help with?",  
  "What is your purpose?": "My purpose is to assist you and provide information.",  
  "Who created you?": "I was created by OpenAI.",  
  "What is the meaning of life?": "That's a philosophical question! Many people have different answers.",  
  "Tell me a fun fact.": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old!",  
  "What is your favorite food?": "I don't eat, but I hear pizza is quite popular!",  
  "Can you speak other languages?": "I can understand and respond in multiple languages! Just ask.",  
  "What is your favorite movie?": "I don't watch movies, but I've heard 'The Matrix' is a classic!",  
  "Do you have any hobbies?": "I don't have hobbies, but I enjoy helping you!",  
  "What is the largest planet in our solar system?": "The largest planet is Jupiter.",  
  "What is the fastest land animal?": "The fastest land animal is the cheetah.",  
  "What is your favorite book?": "I don't read, but many people love '1984' by George Orwell.",  
};

const userInput = process.argv[2] || "What can you tell me?";
const output = simpleChatbot(qaPairs, userInput);
console.log(output);
