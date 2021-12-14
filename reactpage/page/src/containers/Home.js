import React from "react";
import Data from "../data/data.json";


function Home() {
    return(
        <div className="jsonfile">
            <h1>Dohvaćanje podataka iz json-a</h1>
            {Data.map(post => {
                return(
                    <div key={post.id} className="post">
                        <h1 className="naslov">{post.naslov}</h1>
                        <h4 className="naziv">{post.naziv}</h4>
                        <p>{post.tekst}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;