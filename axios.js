
const obtenerPeliculas = async () => {
    try {
        const respuesta = await axios.get(`https://api.themoviedb.org/3/movie/popular`
            , {
                params: {
                    // api_key: '6fb6a4730d4f90a89761f3f9ac38acf0',
                    language: 'es-MX'
                },
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmI2YTQ3MzBkNGY5MGE4OTc2MWYzZjlhYzM4YWNmMCIsInN1YiI6IjYyMmZlNzdlY2M5NjgzMDA0NmNlZjlhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DktRHh93mU83svO1o4rEmvGtJ_ZcZOT1ceGft1iUqgw'
                }
            });

        console.log(respuesta);
    } catch (e) {
        console.log("errr " + e.message);
    }

}
obtenerPeliculas(); 