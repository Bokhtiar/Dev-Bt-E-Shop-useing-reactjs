import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

export default function CategoryProduct() {
    const {id} = useParams()
    console.log(id)
    const [Products, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json)) 
    },[]) 
    let items = [];
    for (let index = 0; index < Products.length; index++) {  
        items.push(
            <div class="col-sm-4">
            <div class="product-image-wrapper">
                <div class="single-products">
                    <div class="productinfo text-center">
                        <img src={Products[index].image} alt="" />
                        <h2>{Products[index].price}</h2>
                        <p>{Products[index].title}</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                    </div>
                    <div class="product-overlay">
                        <div class="overlay-content">
                            <h2>{Products[index].price}</h2>
                            <p>{Products[index].title}</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="choose">
                    <ul class="nav nav-pills nav-justified">
                        <li><a href=""><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><Link to={`/productsingle/${Products[index].id}`}><i class="fa fa-plus-square"></i>View</Link></li>
                    </ul> 
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            {items}
        </div>
    )
}
