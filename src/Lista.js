import React from "react";

import cards from "./db";

function Listagem() {


    if(!cards.length) { 
        return <p>Conteúdo não disponível no momento.</p>
    }

    return (

        <>

            {
                cards.map((i) =>
                    <div key={i.id}>
                        <p>{i.id}</p>
                        <p>{i.name}</p>
                        <p>{i.image?.src}</p>
                    </div>
                )
            }

        </>

    );


}

export default Listagem;