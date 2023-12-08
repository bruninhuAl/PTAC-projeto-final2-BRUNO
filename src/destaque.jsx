import { link } from "react-router-dom"
import "..style/card.css"

function Cards({ListaVideos}) {

    return (
        
        ListaVideos.map((video) =>
            <div className="Card">
                <iframe>
                    width="853"
                    height="480"
                    src={
                        'https://www.youtube.com/embed/' + video.url.slice(17)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                </iframe>
            </div>
        
        )
    )
}