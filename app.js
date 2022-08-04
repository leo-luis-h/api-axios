 let pagina =1;

 const btnAnterior =document.getElementById('anterior');
 const btnSiguiente =document.getElementById('siguiente');
 const btnPrincipio = document.getElementById('principio');
 const btnFin = document.getElementById('fin');

 btnSiguiente.addEventListener('click',() => {
    if(pagina<1000){
    pagina+=1;
    cargarPeliculas();
    }
 });
 
 btnPrincipio.addEventListener('click',() => {
    pagina=1;
    cargarPeliculas();
    
 });
 
 btnFin.addEventListener('click',() => {
    pagina=30;
    cargarPeliculas();
    
 });
 

 btnAnterior.addEventListener('click',() => {
    if(pagina>0){
        pagina-=1;
        cargarPeliculas();
    }
 });
 

 const cargarPeliculas = async () => {
  
    try {
        // ejemplo con fetch  const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6fb6a4730d4f90a89761f3f9ac38acf0&language=es-MX&page=${pagina}`);
        const respuesta = await axios.get(`https://api.themoviedb.org/3/movie/popular`
            , {
                params: {
                    // api_key: '6fb6a4730d4f90a89761f3f9ac38acf0',
                    language: 'es-MX',
                    page: pagina
                },
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmI2YTQ3MzBkNGY5MGE4OTc2MWYzZjlhYzM4YWNmMCIsInN1YiI6IjYyMmZlNzdlY2M5NjgzMDA0NmNlZjlhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DktRHh93mU83svO1o4rEmvGtJ_ZcZOT1ceGft1iUqgw'
                }
            });   
        
        console.log(respuesta);
        if(respuesta.status === 200){
            
            const datos =await respuesta;
            
            let peliculas='';
             datos.data.results.forEach(pelicula => {
                 peliculas+=`
                 <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <p> codigo: ${pelicula.id}<p>
                    </div>
                 `; 
             });

             document.getElementById('contenedor').innerHTML= peliculas;

        }else if(respuesta.status === 401){
            console.log('pusiste la llave mal');
        }else if(respuesta.status ===404){
            console.log('la pelicula no existe');
        }else{
            console.log('hubo un error y no sabemos que pasó');
        }
    }   catch(e){
             console.log(e);
    }
}

cargarPeliculas();