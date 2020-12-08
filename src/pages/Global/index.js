import React from 'react';
import CardGlobal from './CardGlobal';
import TableGlobal from './TableGlobal';

const Global = () =>{
    return(
        <div>
       <div className="container mypanel text-center">
      <h1 style={{ fontFamily: "Sen", fontSize: "50px" }}>Kasus di Seluruh Dunia</h1>
      </div>
            <CardGlobal/>
            <TableGlobal/>

       </div>
    )
}

export default Global;