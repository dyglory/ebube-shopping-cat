import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Checkoutpage = (props) => {
    const {state:catItem}=useLocation();
    console.log(catItem)
    const {onAdd} = props;

    return (
        <>
        <section className="propsmessi">
            <h2 className="subheading">You have successfully both this products</h2>
            <Link to={'/'}>
                <button className="BUTTONS" onClick={() =>onAdd}>Back to home</button>
            </Link>
            <div className="all">
               {catItem.map(catItem => <div className="all2" key={catItem.id}> <img className="checkoutimage" src={catItem.image} alt=""/>
               <hr className="hr-2"/>
                <h1 className="checkoutpagename">{catItem.name}</h1> <h3 className="checkoutpageprice">${catItem.price}</h3> </div>)}
            </div>
        </section>
        </>
    )
}
export default Checkoutpage;