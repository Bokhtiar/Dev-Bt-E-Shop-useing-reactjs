import React from 'react'
import {Link} from 'react-router-dom'

export default function E404() {
    return (
        <div>
            <div class="container text-center">
		<div class="logo-404">
			<a href="index.html"><img src="images/home/logo.png" alt="" /></a>
		</div>
		<div class="content-404">
			<img src="images/404/404.png" class="img-responsive" alt="" />
			<h1><b>Under Construction this page!</b> </h1>
			<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
			<h2><Link to={'/'}>Bring me back Home</Link></h2>
		</div>
	</div>
        </div>
    )
}
