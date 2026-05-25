const API_KEY =
  import.meta.env
    .VITE_OPENROUTER_API_KEY;

export const askAI =
  async (question) => {

    try {

      const response =
        await fetch(

"https://openrouter.ai/api/v1/chat/completions",

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${API_KEY}`,

              "HTTP-Referer":
                "http://localhost:5173",

              "X-Title":
                "Kissan Sathi",
            },

            body: JSON.stringify({

              model:
"openai/gpt-3.5-turbo",

              messages: [

                {
                  role: "user",

                  content: question,
                },

              ],
            }),
          }
        );

      const data =
        await response.json();

      console.log(data);

      // SAFE CHECK

      if (
        data.choices &&
        data.choices.length > 0
      ) {

        return data.choices[0]
          .message.content;
      }

      // ERROR RESPONSE

      return (
        data.error?.message ||

        "AI unavailable currently."
      );

    } catch (error) {

      console.error(error);

      return `
AI unavailable currently.
`;
    }
};