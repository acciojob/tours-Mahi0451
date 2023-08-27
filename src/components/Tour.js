import React,{useState} from "react";

function Tour({id,image,info,name,price,removeTour, idx}) {

    const [readMore, setReadMore] = useState(false)

    return(
        <article className="single-tour" id={`tour-item-${id}`}>
            <img src={image} alt={name} />
                 <footer>
                     <div className="tour-info">
                         <h4>{name}</h4>
                         <h4 className="tour-price">$ {price}</h4>
                     </div>
                     <p id={`tour-item-para-${id}`}>
                         {readMore ? info : `${info.substring(0,200)}...`}
                         <button onClick={()=>setReadMore(!readMore)} id={`see-more-${id}`}>{readMore ? 'Show less' : 'See more'}</button>
                     </p>
                     <button className="delete-btn"  onClick={()=>
                     console.log(id)
                     
                        
                        }  id={`delete-btn-${id}`}>not interested</button>
                 </footer>
        </article>
    )
}
export default Tour;