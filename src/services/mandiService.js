const API_KEY =
  import.meta.env
    .VITE_MANDI_API_KEY;

export const getMandiPrices =
  async () => {

    try {

      const response =
        await fetch(

`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${API_KEY}&format=json&limit=100`

      );

      const data =
        await response.json();

      return data.records;

    } catch (error) {

      console.log(error);

      return [];
    }
};