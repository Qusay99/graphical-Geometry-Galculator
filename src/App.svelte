<script lang="ts">
	import Router from 'svelte-spa-router'
	import routes from './routes'
  
	let name = "World";
</script>
  
  <header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <div class="container-fluid">
		<a class="navbar-brand" href="#">
		  <i class="icon fa-solid fa-calculator"></i>
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
			  <a class="nav-link active" aria-current="page" href="#">Home</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="#">Link</a>
			</li>
			<li class="nav-item dropdown">
			  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				Dropdown
			  </a>
			  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
				<li><a class="dropdown-item" href="#">Action</a></li>
				<li><a class="dropdown-item" href="#">Another action</a></li>
				<li><hr class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#">Something else here</a></li>
			  </ul>
			</li>
			<li class="nav-item">
			  <a class="nav-link disabled">Disabled</a>
			</li>
		  </ul>
		</div>
	  </div>
	</nav>
  </header>
  
<!-- Show the router -->
<Router {routes} />
  
<style>
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0 auto;
		height: 100%;
	}

	.icon{
		/* width: calc(8px + 2vw);
		height: calc(8px + 2vw); */
		font-size: calc(12px + 2.5vw);
		color: #df212e;
		padding: 0.2vw;
		border-radius: 50%;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
		max-width: none;
		}
	}
</style>
  