import {
  useState,
} from "react";

import {

  FaRobot,
  FaMicrophone,
  FaPaperPlane,
  FaVolumeMute,

} from "react-icons/fa";

import {
  askAI,
} from "../services/geminiService";

const AIAssistant = () => {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // SPEAK TEXT

  const speakText = (text) => {

    const speech =
      new SpeechSynthesisUtterance(
        text
      );

    speech.lang = "hi-IN";

    speech.rate = 1;

    window.speechSynthesis.speak(
      speech
    );
  };

  // STOP SPEAKING

  const stopSpeaking = () => {

    window.speechSynthesis.cancel();
  };

  // ASK AI

  const handleAskAI =
    async () => {

      if (!question) return;

      try {

        setLoading(true);

        const response =
          await askAI(question);

        setAnswer(response);

        speakText(response);

      } catch (error) {

        console.log(error);

        setAnswer(
          "AI unavailable currently."
        );

      } finally {

        setLoading(false);
      }
  };

  // VOICE INPUT

  const startListening = () => {

    const recognition =

      new window.webkitSpeechRecognition();

    recognition.lang = "hi-IN";

    recognition.onresult =
      (event) => {

        setQuestion(

          event.results[0][0]
            .transcript
        );
    };

    recognition.start();
  };

  return (

    <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] rounded-[35px] p-10 shadow-2xl mt-10">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          <div className="w-20 h-20 rounded-full bg-[#0b1622] flex items-center justify-center">

            <FaRobot className="text-[#00ff99] text-4xl" />

          </div>

          <div>

            <h2 className="text-4xl font-bold">

              AI Farming Assistant

            </h2>

            <p className="text-gray-400 mt-3 text-lg">

              Ask anything about farming

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex gap-4">

          {/* MIC */}

          <button

            onClick={startListening}

            className="w-16 h-16 rounded-2xl bg-[#00ff99] text-black flex items-center justify-center text-2xl shadow-xl"

          >

            <FaMicrophone />

          </button>

          {/* STOP */}

          <button

            onClick={stopSpeaking}

            className="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center text-2xl shadow-xl"

          >

            <FaVolumeMute />

          </button>

        </div>

      </div>

      {/* INPUT */}

      <div className="mt-10 flex flex-col lg:flex-row gap-5">

        <input

          type="text"

          placeholder="Ask AI about farming..."

          value={question}

          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }

          className="flex-1 bg-white border border-[#1d3d4f] p-6 rounded-3xl text-black placeholder:text-slate-500 outline-none text-lg"

        />

        <button

          onClick={handleAskAI}

          className="bg-[#00ff99] hover:bg-[#00cc77] transition text-white font-bold px-10 rounded-3xl flex items-center justify-center gap-4 text-lg shadow-xl"

        >

          <FaPaperPlane />

          Ask AI

        </button>

      </div>

      {/* RESPONSE */}

      <div className="mt-10 bg-[#0b1622] border border-[#1d3d4f] rounded-3xl p-8 min-h-[220px]">

        {loading ? (

          <div className="flex items-center gap-4">

            <div className="w-5 h-5 rounded-full bg-[#00ff99] animate-pulse"></div>

            <p className="text-[#00ff99] text-xl">

              AI Thinking...

            </p>

          </div>

        ) : (

          <p className="text-lg leading-10 whitespace-pre-line text-gray-200">

            {answer ||

              "Ask anything related to farming, crops, fertilizer, irrigation, weather, pesticides and more..."}

          </p>

        )}

      </div>

    </div>
  );
};

export default AIAssistant;