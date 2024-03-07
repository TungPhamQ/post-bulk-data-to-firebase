const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./config/serviceAccountKey.json"); // Path to your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// Define the questions array
const questionsArray = [
    {
      "questionType": "discover",
      "question": "What do you find most attractive about each other?"
    },
    {
      "questionType": "discover",
      "question": "What is one thing you wish the other would do differently?"
    },
    {
      "questionType": "discover",
      "question": "What is one thing you are grateful for in our relationship?"
    },
    {
      "questionType": "discover",
      "question": "What is one thing we both wish for our future together?"
    },
    {
      "questionType": "discover",
      "question": "Discuss and agree on one way that our relationship has changed since we first met"
    },
    {
      "questionType": "discover",
      "question": "Each reveal one thing we want the other to always keep in mind about our relationship"
    },
    {
      "questionType": "discover",
      "question": "Decide as a couple what we would do with the money if we won the lottery"
    },
    {
      "questionType": "discover",
      "question": "Choose together a location to spend a year living abroad and explain why"
    },
    {
      "questionType": "discover",
      "question": "Recall the most embarrassing thing we've ever done for each other"
    },
    {
      "questionType": "discover",
      "question": "Discuss the most meaningful gift we've ever given or received from each other"
    },
    {
      "questionType": "discover",
      "question": "Share one quirky habit of ours"
    },
    {
      "questionType": "discover",
      "question": "Recall a time you genuinely surprised each other"
    },
    {
      "questionType": "discover",
      "question": "Reveal one thing you love about yourself that the other might not know"
    },
    {
      "questionType": "discover",
      "question": "Eeach confess a personal dream or aspiration we haven't shared with one another yet"
    },
    {
      "questionType": "discover",
      "question": "Take turns giving each other a unique compliment we've never said before"
    },
    {
      "questionType": "discover",
      "question": "Each reveal a hidden talent or skill we haven't shown each other yet"
    },
    {
      "questionType": "discover",
      "question": "Together design our dream date, detailing the location and activities"
    },
    {
      "questionType": "discover",
      "question": "Each identify one talent or skill your partner has that you wish you had and why"
    },
    {
      "questionType": "discover",
      "question": "Each share something the other does that always makes us laugh, even on a bad day"
    },
    {
      "questionType": "discover",
      "question": "Together imagine our dream house and discuss one unique feature we'd both include"
    },
    {
      "questionType": "discover",
      "question": "Each discuss what the first thing we'd do if we swapped roles for a day"
    },
    {
      "questionType": "discover",
      "question": "If we each had a warning label, what would it say?"
    },
    {
      "questionType": "discover",
      "question": "Each decide on one thing we would change about the world and how we would do it"
    },
    {
      "questionType": "discover",
      "question": "Together choose a time during our relationship to time travel to and explain why"
    },
    {
      "questionType": "discover",
      "question": "Together pick any mythical creature as a pet and explain why we chose it"
    },
    {
      "questionType": "discover",
      "question": "Each discuss the role we would play if we were lost in the wilderness together"
    },
    {
      "questionType": "discover",
      "question": "Each share how we imagine our childhoods would have been different if we had known each other then"
    },
    {
      "questionType": "discover",
      "question": "Each speculate on what we might have been in a past life"
    },
    {
      "questionType": "discover",
      "question": "Together decide on an act we would perform if we entered a talent competition"
    },
    {
      "questionType": "discover",
      "question": "If we entered a couples' costume contest, what would we go as?"
    },
    {
      "questionType": "discover",
      "question": "Each choose a spirit animal for the other, reflecting our personalities and quirks"
    },
    {
      "questionType": "discover",
      "question": "Each recall a moment in our relationship that took an unexpected turn but was memorable"
    },
    {
      "questionType": "discover",
      "question": "Each discuss what we think we'd be doing right now if we had never met"
    },
    {
      "questionType": "discover",
      "question": "Each decide what our signature dish would be if we were contestants on a cooking show"
    },
    {
      "questionType": "discover",
      "question": "Each recall something we both learned in the past year about our relationship"
    },
    {
      "questionType": "discover",
      "question": "Each craft a funny or outrageous headline of our relationship"
    },
    {
      "questionType": "discover",
      "question": "Together decide if we could start a business together, what would it do and why?"
    },
    {
      "questionType": "discover",
      "question": "What would a 3-star Yelp review of our relationship say?"
    },
    {
      "questionType": "discover",
      "question": "Together decide if we were a superhero duo, what would our names and powers be, and what mission would we undertake?"
    },
    {
      "questionType": "discover",
      "question": "Together decide one magical ability we can have as a couple, what would it be?"
    },
    {
      "questionType": "discover",
      "question": "Together decide, if there was a movie about our relationship, what genre would it be and why?"
    },
    {
      "questionType": "discover",
      "question": "What's a unique tradition we've started?"
    },
    {
      "questionType": "discover",
      "question": "Both recall the most laugh-out-loud moment you've had together"
    },
    {
      "questionType": "discover",
      "question": "Together recall your funniest cooking disaster as a couple"
    },
    {
      "questionType": "discover",
      "question": "Both recall if there was a time you played a prank on each other"
    },
    {
      "questionType": "discover",
      "question": "Together recall a hobby you tried as a couple but failed hilariously at"
    },
    {
      "questionType": "discover",
      "question": "What's the most unusual job you'd both like to try for a day?"
    },
    {
      "questionType": "discover",
      "question": "Recall the funniest joint attempt at a DIY project or home repair"
    },
    {
      "questionType": "discover",
      "question": "Share a unique habit you've picked up from each other"
    },
    {
      "questionType": "knowledge",
      "question": "How do I like to unwind after a long day?"
    },
    {
      "questionType": "knowledge",
      "question": "Mimic somebody you both know, and the other guesses who it is"
    },
    {
      "questionType": "knowledge",
      "question": "Tell two truths and one lie about yourself; the other guesses the lie"
    },
    {
      "questionType": "knowledge",
      "question": "What's something I always procrastinate on?"
    },
    {
      "questionType": "knowledge",
      "question": "Say something in a language I don't know, and let me guess its meaning"
    },
    {
      "questionType": "knowledge",
      "question": "Describe my ideal weekend in three words"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite movie?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite chocolate bar?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite food?"
    },
    {
      "questionType": "knowledge",
      "question": "How do I deal with stress?"
    },
    {
      "questionType": "knowledge",
      "question": "What are three items I always carry with me?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite TV series?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my least favorite household chore?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite genre of music?"
    },
    {
      "questionType": "knowledge",
      "question": "If I could only eat one type of cuisine for the rest of my life, what would it be?"
    },
    {
      "questionType": "knowledge",
      "question": "What am I most likely to become famous for?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite way to spend a rainy day?"
    },
    {
      "questionType": "knowledge",
      "question": "What is one thing I'm really good at that not many people know about?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my usual coffee or tea order?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite type of dessert?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite animal?"
    },
    {
      "questionType": "knowledge",
      "question": "What's one skill or hobby I've always wanted to learn?"
    },
    {
      "questionType": "knowledge",
      "question": "What is my favorite color?"
    },
    {
      "questionType": "knowledge",
      "question": "Recall a shared memory and hint with one word for your partner to guess"
    },
    {
      "questionType": "knowledge",
      "question": "If I could travel to any country, where would I go?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite type of weather and why?"
    },
    {
      "questionType": "knowledge",
      "question": "What's one thing that always makes me laugh?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my dream job?"
    },
    {
      "questionType": "knowledge",
      "question": "How do I like my eggs cooked?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite sport or physical activity?"
    },
    {
      "questionType": "knowledge",
      "question": "What movie can I watch over and over without getting tired of it?"
    },
    {
      "questionType": "knowledge",
      "question": "What's something that I'm afraid of?"
    },
    {
      "questionType": "knowledge",
      "question": "What am I most passionate about?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite board game or video game?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite kind of dessert?"
    },
    {
      "questionType": "knowledge",
      "question": "What's a subject I know a lot about?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite pizza?"
    },
    {
      "questionType": "knowledge",
      "question": "What's the first app I check in the morning?"
    },
    {
      "questionType": "knowledge",
      "question": "What's a pet name I have for you?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite social media platform?"
    },
    {
      "questionType": "knowledge",
      "question": "What was my favorite subject in school?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my star sign?"
    },
    {
      "questionType": "knowledge",
      "question": "What was my first job?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my shoe size?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my favorite thing to shop for?"
    },
    {
      "questionType": "knowledge",
      "question": "What's a word or phrase I say often?"
    },
    {
      "questionType": "knowledge",
      "question": "What's something I always say I'll do but rarely ever do?"
    },
    {
      "questionType": "knowledge",
      "question": "What city was I born in?"
    },
    {
      "questionType": "knowledge",
      "question": "What's my date of birth?"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 places we dream of traveling to together"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 foods we both dislike"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 things we love doing together on weekends"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 shared guilty pleasures we both share"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 words to describe our first date"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 things we both find annoying"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 goals we have for the next year"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 things you would bring to a desert island together"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 things we could never agree on"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 movies that we both love"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 restaurants we like to visit together"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 reasons why we are a great couple"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 mutual friends names that you both like"
    },
    {
      "questionType": "matchWriting",
      "question": "Write 3 names of the celebrities you both admire"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down the name of the first movie you watched together"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down a fast food restaurant you both like"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down the name of one household task we both dislike"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down the one thing we always agree on?"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down if we each got a tattoo representing our relationship, what would it be?"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down the silliest argument we've ever had"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down the most 'couple-like' thing we do? (Examples: Joint email, matching shirts)"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down our favorite pastime activity"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down the first song we danced to together"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down our favorite food to cook together"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down one thing we both find really funny?"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down one word that describes our sense of humor?"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down our go-to takeout order"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down our most memorable date"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down something we've always said we'd do together but haven't yet"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down our favorite place to travel together?"
    },
    {
      "questionType": "matchWriting_1",
      "question": "Write down one goal we want to achieve together in the next 5 years"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the homebody. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the better singer. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the better dancer. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the better cook. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is more adventurous. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is more organized. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is more romantic. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the better listener. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is more likely to get lost. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the messy one. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the planner"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the go-with-the-flow person"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the optimist. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the pessimist. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who is the social butterfly. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point at who is more likely to fall asleep during a movie? Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point to who makes the best breakfast in bed. Then open your eyes"
    },
    {
      "questionType": "matchNoWriting",
      "question": "Close your eyes and point at who's more likely to leave dishes in the sink? Then open your eyes"
    }
   ]
// Update the document with the questions array
const docRef = db.collection("game-pack-products").doc("hLCbyzexA0J0GfPxXSjs");

docRef
  .update({
    questions: admin.firestore.FieldValue.arrayUnion(...questionsArray),
  })
  .then(() => {
    console.log("Questions added successfully to the document");
  })
  .catch((error) => {
    console.error("Error updating document:", error);
  });
