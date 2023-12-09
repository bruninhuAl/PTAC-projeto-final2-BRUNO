import "./home.css"
export default function Home(){
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

        <main>
            <section class="video-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                <div class="video-info">
                    <h2>Titulo Video</h2>
                    <p>Descrição Video</p>
                </div>
            </section>

            <section class="video-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                <div class="video-info">
                    <h2>Titulo Video</h2>
                    <p>Descrição Video</p>
                </div>
            </section>
            

        </main>
    </div>
    
</body>


        </div>
     );
}