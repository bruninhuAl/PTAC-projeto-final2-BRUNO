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
                <li><a href="./register.jsx">Novo Vídeo</a></li>
            </ul>
        </nav>

        <main>
            <section class="video-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                <div class="video-info">
                    <h2>Video Title</h2>
                    <p>Video description goes here.</p>
                </div>
            </section>

            

        </main>
    </div>
    
</body>


        </div>
     );
}