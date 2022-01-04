import React,{useState,useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import Category from '../Category/Category'

export default function ProductSingle() {
	const {id} = useParams()
	const [Product, setProduct] = useState([])
	
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json)) 
	}, [])
	

    return (
        <div>
			<section>
			<div class="container">
				<div class="row">
					<div class="col-sm-3">
						<div class="left-sidebar">
							<h2>Category</h2>
							<div class="panel-group category-products" id="accordian">
                                    <Category />
                                </div>
						
							<div class="brands_products">
								<h2>Brands</h2>
								<div class="brands-name">
									<ul class="nav nav-pills nav-stacked">
										<li><a href=""> <span class="pull-right">(50)</span>Acne</a></li>
										<li><a href=""> <span class="pull-right">(56)</span>Grüne Erde</a></li>
										<li><a href=""> <span class="pull-right">(27)</span>Albiro</a></li>
										<li><a href=""> <span class="pull-right">(32)</span>Ronhill</a></li>
										<li><a href=""> <span class="pull-right">(5)</span>Oddmolly</a></li>
										<li><a href=""> <span class="pull-right">(9)</span>Boudestijn</a></li>
										<li><a href=""> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
									</ul>
								</div>
							</div>
							
							<div class="price-range">
								<h2>Price Range</h2>
								<div class="well">
									
								</div>
							</div>
							
							<div class="shipping text-center">
								<img src="images/home/shipping.jpg" alt="" />
							</div>
							
						</div>
					</div>
					
					<div class="col-sm-9 padding-right">
						<div class="product-details">
							<div class="col-sm-5">
								<div class="view-product">
									<img src={Product.image} alt="" />
									<h3>ZOOM</h3>
								</div>
								

							</div>
							<div class="col-sm-7">
								<div class="product-information">
									<img src="images/product-details/new.jpg" class="newarrival" alt="" />
									<h2>{Product.title}</h2>
									<p>Web ID: 1089772</p>
									<img src="images/product-details/rating.png" alt="" />
									<span>
										<span>US ${Product.price}</span>
										<label>Quantity:</label>
										<input type="text" value="3" />
										<button type="button" class="btn btn-fefault cart">
											<i class="fa fa-shopping-cart"></i>
											Add to cart
										</button>
									</span>
									<p><b>Availability:</b> In Stock</p>
									<p><b>Condition:</b> New</p>
									<p><b>Brand:</b> {Product.category}</p>
									<a href=""><img src="./asset/images/product-details/share.png" class="share img-responsive"  alt="" /></a>
								</div>
							</div>
						</div>
						
						
						
						<div class="recommended_items">
							<h2 class="title text-center">recommended items</h2>
							
							<div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="item active">	
										<div class="col-sm-4">
											<div class="product-image-wrapper">
												<div class="single-products">
													<div class="productinfo text-center">
														<img src="images/home/recommend1.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
													</div>
												</div>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="product-image-wrapper">
												<div class="single-products">
													<div class="productinfo text-center">
														<img src="images/home/recommend2.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
													</div>
												</div>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="product-image-wrapper">
												<div class="single-products">
													<div class="productinfo text-center">
														<img src="images/home/recommend3.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="item">	
										<div class="col-sm-4">
											<div class="product-image-wrapper">
												<div class="single-products">
													<div class="productinfo text-center">
														<img src="images/home/recommend1.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
													</div>
												</div>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="product-image-wrapper">
												<div class="single-products">
													<div class="productinfo text-center">
														<img src="images/home/recommend2.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
													</div>
												</div>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="product-image-wrapper">
												<div class="single-products">
													<div class="productinfo text-center">
														<img src="images/home/recommend3.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a class="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
									<i class="fa fa-angle-left"></i>
								</a>
								<a class="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
									<i class="fa fa-angle-right"></i>
								</a>			
							</div>
						</div>
						
					</div>
				</div>
			</div>
			</section>
        </div>
    )
}
