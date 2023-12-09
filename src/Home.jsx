import "./home.css"

export default function Home(){
    const pegarvideos = JSON.parse(localStorage.getItem('Lista')) || [];
    console.log(videos);
    return(
    <div>

        <body>
        <div class="container">
        

        <nav class="sidebar">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./destaque.jsx">Em Destaque</a></li>
                <li><a href="/registro">Novo Vídeo</a></li>
            </ul>
        </nav>

        <div>
          <div className="values-area">
            {item.map((item,index) => (
              <div key={item.id}>
                
                <p>Titulo: {item.Titulo}</p>
                <p>Canal: {item.Canal}</p>
                <p>Descricao: {item.Descricao}</p>
                <p>url: {item.url}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


        
    </div>
    
 </body>


        </div>
     );
}