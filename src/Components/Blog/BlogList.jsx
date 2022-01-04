import React,{useState,useEffect} from 'react'
import Category from '../Category/Category'
import {Link} from 'react-router-dom'

export default function BlogList() {
    const [Blog, setBlog] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setBlog(json))
    }, [])
    let BlogItems = [];
    for (let index = 0; index < Blog.length; index++) {
        BlogItems.push(
            <div class="single-blog-post">
            <h3>{Blog[index].title}</h3>
            <div class="post-meta">
                <ul>
                    <li><i class="fa fa-user"></i> Mac Doe</li>
                    <li><i class="fa fa-clock-o"></i> 1:33 pm</li>
                    <li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
                </ul>
                <span>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                </span>
            </div>
            
            <p>{Blog[index].body}</p>
            <Link  class="btn btn-primary" to={'/blogs'}>Read More</Link>
        </div>
        )
        
    }
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
					
						
						<div class="shipping text-center">
							<img src="./asset/images/home/shipping.jpg" alt="" />
						</div>
					</div>
				</div>
				<div class="col-sm-9">
					<div class="blog-post-area">
						<h2 class="title text-center">Latest From our Blog</h2>
						{BlogItems}

					</div>
				</div>
			</div>
		</div>
	</section>
	
        </div>
    )
}
