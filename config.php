<?php

$pageurl = "https://".$_SERVER["SERVER_NAME"]; // Production
// $pageurl = "../lener"; // Development

$url = explode('/', $_GET['cod']);
$page = $url["0"];
$subpage = $url["1"];

if($page == NULL){
	$page = "home";
}

if (!is_file("pages/".$page.".php")) { $page = "404"; }

switch($page){
	case "404":
		$title = "Página não encontrada";
		$description = "Infelizmente essa página não foi encontrada.";
		break;

	case "home":
		$title = "Lener Construtora";
		$description = "Lener preparado para ser utilizado como base de desenvolvimento: <br /> SASS, Webpack, Three.js, ES6 modules, PHP";
		break;

	case "sobre-a-lener":
		$title = "Lener Construtora - Sobre a Lener";
		$description = "Uma empresa que soma com a experiência de mais de 20 anos do Grupo Dinal, a Lener Construções segue seu caminho sempre em busca de realizar sonhos com excelência, competência, qualidade e, em 2022, conta com a tecnologia de energia sustentável - geotermia e aerotermia - que proporcionam climatização por meio da energia do ar e do calor da terra.";
		break;

	case "grupo-dinal":
		$title = "Lener Construtora - Grupo Dinal";
		$description = "Um grupo que engloba marcas inovadoras da América Latina e segue empreendendo e aprimorando constantemente seus projetos, construções, vendas e financiamentos imobiliários, firmando-se como referência no setor.";
		break;
	
	case "contato":
		$title = "Lener Construtora - Contato";
		$description = "Fale conosco ou faça uma visita";
		break;

	default:
		$title = "Lener";
		$description = "Lener preparado para ser utilizado como base de desenvolvimento: <br /> SASS, Webpack, Three.js, ES6 modules, PHP";
		break;
}

?>