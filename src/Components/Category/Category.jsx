import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Category() {
    const [Categories, setCategories] = useState([])
    useEffect(() => {
		fetch('https://fakestoreapi.com/products/categories')
		.then(res=>res.json())
		.then(json=>setCategories(json))
	}, [])
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
    return (
        <div>
            {CategoryItem}
        </div>
    )
}
