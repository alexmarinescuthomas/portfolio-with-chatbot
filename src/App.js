import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiGoogleassistant } from 'react-icons/si'
import { BiPaperPlane, BiHelpCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function App() {
  const [botMessage, setBotMessage] = useState("Ask me about Alex's developer career!");
  const [userMessage, setUserMessage] = useState("");
  const [userInput, setUserInput] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  let getOccurrence = (array, value) => {
    var count = 0;
    array.forEach((item) => (item === value && count++));
    return count;
  }

  /*
  We need to find P(A|Q) = P(A)P(Q|A) / P(Q), or the probability of an answer given a user's question.

  The denominator, P(Q), can be dropped because it is a constant. For example, if we have one question and 10 answers and only one answer can classify
  the question, the probability of the answer is the same.

  So, just find P(A|Q) = P(A)P(Q|A)
  */
  let probabilityOfAnswer = (questionFeatures, answer, totalKeyWords) => {
    var count = 0;
    var prob = 0;
    var i = questionFeatures.length;
  
    while(i--) {
      if (questionFeatures[i]) {

        count = (getOccurrence(answer, questionFeatures[i]));
  
        /***** Find P(Q|A) part of the model. *****/
        //prob = prob + (count > 0 ? Math.log(count / answer.length) : 0);
        prob = prob + (count / answer.length);
      }
    }
  
    /***** Find P(A) part of the model. *****/
    var featureRatio = answer.length / totalKeyWords;
  
    //prob = featureRatio * (count > 0 ? Math.exp(prob) : 0);
    prob = featureRatio * prob;
  
    return prob;
  }

  const handleInput = (e) => {

    setBotMessage('Typing...');

    var answerProbabilityArray = [
      {
        answer: 'Please refrain from using derogatory language.',
        keyWords: ["gay","fuck","stupid","useless","bitch","fag","faggot","bitch"],
        probability: 0
      },
      {
        answer: "Hi! What would you like to know?",
        keyWords: ["hi","hello","hey","sup","yo","wassup","wadup","howdy","greetings","morning","evening"],
        probability: 0
      },
      {
        answer: "Bye, have a nice day!",
        keyWords: ["bye","goodbye","later","cya","night"],
        probability: 0
      },
      {
        answer: "I'm doing well. Thanks for asking!",
        keyWords: ["how","are","hows","going", "feeling"],
        probability: 0
      },
      {
        answer: "Alex is a developer located in Richmond Hill, Ontario, Canada.",
        keyWords: ["where","located"],
        probability: 0
      },
      {
        answer: "As of September 2022 Alex has almost 5 years of full-stack developer experience having used primarily ReactJS, vanilla JS, HTML, and CSS, .NET Core as well as SQL and NOSQL.",
        keyWords: ["experience","work"],
        probability: 0
      },
      {
        answer: "Apart from some side projects you can find Alex's GitHub, Alex developed, designed, and maintained KlickBook for Milano Software which you can check out below.",
        keyWords: ["projects","make","did"],
        probability: 0
      },
      {
        answer: "Alex is fluent in C# and Python with some experience in Java and NodeJS.",
        keyWords: ["backend","languages","know"],
        probability: 0
      },
      {
        answer: "Alex is fluent in ReactJS along with Redux and vanilla JS + HTML + CSS, and currently learning to become more fluent in Three.js as well as the GSAP library for animations.",
        keyWords: ["frontend","languages","know"],
        probability: 0
      },
      {
        answer: "Alex is familiar with SQL and NoSQL.",
        keyWords: ["database","languages","know","db"],
        probability: 0
      },
      {
        answer: "KlickBook is Milano Software's cloud-based SaaS web application able to tackle the broader hospitality industry as the successor to its +20-year-old booking, point-of-sale, marketing, and inventory-tracking legacy software for spas and salons with 5K+ clients and 10K+ users.",
        keyWords: ["klickbook","tell","me","more"],
        probability: 0
      },
      {
        answer: "Alex is familiar with designing, training, and testing supervised and some unsupervised machine learning models in Python. Alex has developed chatbots, regression model for risk management based around spas, and well as recommendations system.",
        keyWords: ["know","about","machine","learning","ml"],
        probability: 0
      },
      {
        answer: "Thanks! Glad you like it!",
        keyWords: ["great","awesome","like","amazing","cool","website","love","portfolio"],
        probability: 0
      },
      {
        answer: "Nope. I'm just a bot; you're not talking to a real person right now.",
        keyWords: ["real","bot","robot"],
        probability: 0
      }
    ];

    let questionFeaturesArray = userInput.replace("!","").replace(".","").replace("?","").toLowerCase().split(" ");
    let totalKeyWords = 0;
    for (let j = 0; j < answerProbabilityArray.length; j++) {
      totalKeyWords = totalKeyWords + answerProbabilityArray[j].keyWords.length;
    }

    for (let i = 0; i < answerProbabilityArray.length; i++) {
      answerProbabilityArray[i].probability = probabilityOfAnswer(questionFeaturesArray, answerProbabilityArray[i].keyWords, totalKeyWords);
    }

    let maxAnswerProbability = answerProbabilityArray.reduce((max, answer) => max.probability > answer.probability ? max : answer);

    setTimeout(() => {
      
      console.log(answerProbabilityArray);

      setBotMessage(maxAnswerProbability.probability > 0 ? maxAnswerProbability.answer : "Sorry, I didn't understand that. Could you please rephrase that?");
      setUserInput("");
    }, 2000);

    setUserMessage(userInput);
  }

  return (
    <div>
      <div className="App">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
      </div>
      {
        showChatbot && (
          <div className='chatbox'>
            <div className='wrapper'>
              <div className='content'>
                <div className='header-row'>
                  <div className='header'>
                    <div className='chatbot-icon'>
                      <SiGoogleassistant size={35} />
                    </div>
                    <div className='right'>
                      <div className='name'>ChatBot</div>
                      <div className='status'>Virtual Assistant</div>
                    </div>
                  </div>
                  <div className='close' onClick={(ev) => setShowChatbot(false)}>
                    <AiOutlineClose size={30} />
                  </div>
                </div>
                <div className='main'>
                  <div className='main_content'>
                    <div className='messages'>
                      <div className='bot-messages'>{botMessage}</div>
                    </div>
                    <div className='messages-bottom'>
                      {userMessage && (
                        <div className='human-messages'>{userMessage}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='bottom'>
                  <div className='chatbot-text-field'>
                    <div className='chatbot-input-field'>
                      <input className='chatbot-input-field'
                        value={userInput} 
                        onChange={e => setUserInput(e.target.value)} 
                        placeholder='Ask the chatbot about Alex' 
                      />
                    </div>
                    <div className='send-button-cover'>
                      <button className='send-button-icon' onClick={(ev) => handleInput(ev)}><BiPaperPlane style={{ justifyContent: "center", alignItems: "center" }} size={22} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {
        showChatbot !== true && (
          <div className='chatbot-btn' onClick={(ev) => setShowChatbot(!showChatbot)}>
            <BiHelpCircle size={30} />
          </div>
        )
      }
    </div>
  );
}

export default App;