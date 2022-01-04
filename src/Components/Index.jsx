import React,{useState, useEffect} from 'react'
import { Link, Nav } from 'react-router-dom'
import Footer from '../Layouts/Footer'
import Slider from '../Layouts/Slider'


export default function Index() {
    const [Products, setProduct] = useState([])
	const [Categories, setCategories] = useState([])
    useEffect(() => {
		fetch('https://fakestoreapi.com/products/')
		.then(res=>res.json())
		.then(json=>setProduct(json))
    },[])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/categories')
		.then(res=>res.json())
		.then(json=>setCategories(json))
	}, [])
	
    let items =[];
    for (let index = 0; index < Products.length; index++) {
        console.log(Products) 
        items.push(
            <div class="col-sm-4">
            <div class="product-image-wrapper">
                <div class="single-products">     
                        <div class="productinfo text-center">
                            <img src={Products[index].image} alt="" />
                            <h2>{Products[index].price} $  </h2>
                            <p>{Products[index].title}</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                        <div class="product-overlay">
                            <div class="overlay-content">
                                <h2>{Products[index].price} $</h2>
                                <p>{Products[index].title}</p>
                                <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>
                        </div>
                </div>
                <div class="choose">
                    <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
	let CategoryItem = [];
	for (let index = 0; index < Categories.length; index++) {
		CategoryItem.push(
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title"><Link to={`category/${Categories[index]}`}>{Categories[index]}</Link></h4>
				</div>
			</div>
		)
	}
	console.log(Categories)
    return (
        <div>
        <Slider />
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						<h2>Category</h2>
						<div class="panel-group category-products" id="accordian">
							{CategoryItem}
						</div>
					
						<div class="brands_products">
							<h2>Brands</h2>
							<div class="brands-name">
								<ul class="nav nav-pills nav-stacked">
									<li><a href="#"> <span class="pull-right">(50)</span>Acne</a></li>
									<li><a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a></li>
									<li><a href="#"> <span class="pull-right">(27)</span>Albiro</a></li>
									<li><a href="#"> <span class="pull-right">(32)</span>Ronhill</a></li>
									<li><a href="#"> <span class="pull-right">(5)</span>Oddmolly</a></li>
									<li><a href="#"> <span class="pull-right">(9)</span>Boudestijn</a></li>
									<li><a href="#"> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
								</ul>
							</div>
						</div>
						
						<div class="price-range">
							<h2>Price Range</h2>
							<div class="well text-center">
								 asd
							</div>
						</div>
						
						<div class="shipping text-center">
							<img src="images/home/shipping.jpg" alt="" />
						</div>
					
					</div>
				</div>
				
				<div class="col-sm-9 padding-right">
					<div class="features_items">
						<h2 class="title text-center">Features Items</h2>
						{items}
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<Footer />
        </div>
    )
}
