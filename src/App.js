import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
    <div className = "Parent" >
        <ImgProduct/>
        <ProductInfo isDiscount="coming" name="VANILLA LATE COFFEE"cat="Fresh Sugar" price='29.499'/>
    </div>
    );
}
function ImgProduct() {
    return (
        <div className="img-coffe">
            <img src="fore-coffee.jpg"></img>
        </div>  
    
    );
}
function CheckDiscount(props) {
    const {isDiscount} = props
    if (isDiscount=="yes") {
        return(
            <p>Discount 70% Off</p>
        );
    }else if (isDiscount=="coming") {
            return(
                <p>Discount soon...</p>
            );
    }else{
        return(
            <p>belum ada diskon</p>
        );
    }
}

function ProductInfo(props) {
    const {cat,name,price,isDiscount}=props;
    const benefits =["Futuristic","Eco-Friendly","Quality number 1"]
    const listBenefits = benefits.map((Itembenefits) =>
        <li>{Itembenefits}</li>
    );
    return(
    <div>
        <div className="desc">
            <p className="coffee">{cat}</p>
            <h1 className="tittle"> {name}</h1>
            <p className="price">IDR {price}</p>
            <CheckDiscount isDiscount={isDiscount}/>
            <p className="info">Fore Coffee is an on-demand high-quality coffee startup which aims to deliver the finest coffee to its customer.</p>
            <h3>The reason why some people choose this coffee</h3>
            <ul>
                <li>{listBenefits}</li>
            </ul>
            <a onClick= {(e) => AddCart(name, e)} href="#">Add to Cart</a>
        </div>
    </div>
    );
}

function AddCart(e){
    return console.log('terjual '+e)
}
export default App;