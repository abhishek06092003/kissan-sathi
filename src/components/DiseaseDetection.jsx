import {
  useState,
  useRef,
} from "react";

import * as tmImage
from "@teachablemachine/image";

import {

  FaLeaf,
  FaCamera,
  FaRobot,

} from "react-icons/fa";

// PASTE YOUR MODEL URL

const URL =
"https://teachablemachine.withgoogle.com/models/oAN1I-nrw/";

const DiseaseDetection = () => {

  const [image, setImage] =
    useState(null);

  const [result, setResult] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const fileRef =
    useRef();

  // ANALYZE IMAGE

  const analyzeImage =
    async (file) => {

      try {

        setLoading(true);

        // LOAD MODEL

        const modelURL =
          URL + "model.json";

        const metadataURL =
          URL + "metadata.json";

        const model =

          await tmImage.load(

            modelURL,
            metadataURL
          );

        // CREATE IMAGE

        const img =
          document.createElement(
            "img"
          );

        img.src =
          URL.createObjectURL(
            file
          );

        img.onload =
          async () => {

            // PREDICT

            const prediction =

              await model.predict(
                img
              );

            let best =
              prediction[0];

            prediction.forEach(
              (p) => {

                if (

                  p.probability >
                  best.probability

                ) {

                  best = p;
                }
            });

            // SHOW RESULT

            setResult(

`${best.className} (${(
best.probability * 100
).toFixed(1)}%)`

            );

            setLoading(false);
        };

      } catch (error) {

        console.log(error);

        setResult(
          "AI Detection Failed"
        );

        setLoading(false);
      }
  };

  // HANDLE IMAGE

  const handleImage =
    (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      // PREVIEW

      setImage(

        URL.createObjectURL(
          file
        )
      );

      // AI ANALYSIS

      analyzeImage(file);
  };

  return (

    <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] rounded-[35px] p-10 shadow-2xl mt-10 hover:scale-[1.01] transition duration-300 relative overflow-hidden min-h-[500px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-52 h-52 bg-[#00ff99]/10 blur-3xl rounded-full"></div>

      {/* HEADER */}

      <div className="flex items-center gap-5 relative z-10">

        <div className="w-20 h-20 rounded-full bg-[#0b1622] flex items-center justify-center">

          <FaLeaf className="text-[#00ff99] text-4xl" />

        </div>

        <div>

          <h2 className="text-4xl font-bold">

            Real AI Disease Detection

          </h2>

          <p className="text-gray-400 mt-3 text-lg">

            Capture crop image for AI analysis

          </p>

        </div>

      </div>

      {/* UPLOAD BUTTON */}

      <div className="mt-10 text-center relative z-10">

        <button

          onClick={() =>
            fileRef.current.click()
          }

          className="bg-[#00ff99] hover:bg-[#00cc77] transition text-black px-10 py-5 rounded-3xl font-bold flex items-center gap-4 mx-auto shadow-xl"

        >

          <FaCamera />

          Capture / Upload Image

        </button>

        <input

          type="file"

          accept="image/*"

          capture="environment"

          hidden

          ref={fileRef}

          onChange={handleImage}

        />

      </div>

      {/* IMAGE PREVIEW */}

      {image && (

        <div className="mt-10 relative z-10">

          <img

            src={image}

            alt="crop"

            className="w-full max-h-[400px] object-cover rounded-[35px] border border-[#1d3d4f]"

          />

        </div>
      )}

      {/* LOADING */}

      {loading && (

        <div className="mt-10 bg-[#0b1622] border border-[#1d3d4f] rounded-3xl p-8 flex items-center gap-5 relative z-10">

          <FaRobot className="text-[#00ff99] text-4xl animate-pulse" />

          <p className="text-2xl text-[#00ff99]">

            AI analyzing crop...

          </p>

        </div>
      )}

      {/* RESULT */}

      {result && !loading && (

        <div className="mt-10 bg-[#0b1622] border border-[#1d3d4f] rounded-[35px] p-8 relative z-10">

          <h3 className="text-3xl font-bold text-[#00ff99]">

            AI Prediction

          </h3>

          <p className="text-4xl font-bold mt-8 text-white">

            {result}

          </p>

        </div>
      )}

    </div>
  );
};

export default DiseaseDetection;