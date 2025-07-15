





export const llamadaApi = async () => {

    const key = "kRr2981b6VCA2BuJ14F2io39U1Vl71dM";
    let limit = 3;
    let busqueda = "perros";

    const url = `https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${busqueda}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try {

        const respuesta = await  fetch(url);
        const data= await respuesta.json();
        console.log(data[0].images.original)
        return json.data;




    } catch (error) {
        console.error("error al realizar la llamada de API")
    }


}