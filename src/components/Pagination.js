import React from "react";

const pagination = ({ news,pageHandler }) => {
const pageNumbers = [];
for(let i = 1; i < Math.ceil(news.length/5)+1; i++){
    pageNumbers.push(i);
}
    return (
        <div className="pagenum">
        <center>
        {pageNumbers.map(page => 
        <div className="pagebutton" onClick ={ () => pageHandler(page)}>{ page }</div>)}
        </center>
         </div>
    );
}

export default pagination;