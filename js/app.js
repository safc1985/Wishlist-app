(function(){
	
	var app = angular.module('store', []);

	app.controller('StoreController', function($scope){
		this.products = jerseys;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	
	var jerseys = [
	{
		name: 'JERSEY ADIDAS SELECCIÓN MEXICANA LOCAL',
		price: 1099.00,
		description: "Jersey oficial de la selección mexicana de futbol.",
		specification: "Cuello redondo elástico con cinta interior para mayor comodidad.",
		review: "Realiza una reseña de este producto.",
		canPurchase: true,
		soldOut: false,
		qty: 10,
		images: [
			{
				full: 'img/mexico.jpg',
				thumb: 'img/mexico.jpg'
			}
		],
		reviews: [
			{
				stars: 4,
				body: "Buen producto",
				author: "juan@hotmail.com"
			}
		]
	},
	{
		name: 'JERSEY ADIDAS ALEMANIA VISITA',
		price: 1099.00,
		description: "Una vez que entiendes la pasión futbolística de Alemania, entiendes el verdadero fútbol.",
		specification: "Está fabricado con la máxima calidad en materiales para brindar la comodidad, flexibilidad y dinamismo que necesitas. Cuenta con tecnología “Climacool” que te mantiene fresco y seco.",
		review: "Realiza una reseña de este producto.",
		canPurchase: true,
		soldOut: false,
		qty: 5,
		images: [
			{
				full: 'img/alemania.jpg',
				thumb: 'img/alemania.jpg'
			}
		],
		reviews: [
			{
				stars: 4,
				body: "Buen producto",
				author: "juan@hotmail.com"
			}
		]
	},
	
	{
		name: 'JERSEY ADIDAS CHELSEA FC LOCAL',
		price: 1099.00,
		description: "Reafirma tu pasión con el Jersey Adidas Chelsea FC  y apoya a tu equipo vistiendo sus colores de los pies a la cabeza ",
		specification: "• Tecnología climacool® que expulsa el sudor de tu piel para que te mantengas fresco por más tiempo. \n • Cuello redondo elástico con cinta interior que te brinda mayor confort. \n • Inserciones de malla que mejoran la ventilación para ayudarte a transpirar mejor. \n • Escudo del Chelsea FC en el pecho izquierdo. \n • Diseño a tres rayas blancas sobre los hombros clásicas de adidas. \n • Costuras planas para minimizar la irritación causada por el roce.",
		review: "Realiza una reseña de este producto.",
		canPurchase: true,
		soldOut: false,
		qty: 6,
		images: [
			{
				full: 'img/chelsea.jpg',
				thumb: 'img/chelsea.jpg'
			}
		],
		reviews: [
			{
				stars: 4,
				body: "Buen producto",
				author: "juan@hotmail.com"
			}
		]
	},
	
	{
		name: 'JERSEY ADIDAS REAL MADRID LOCAL',
		price: 1699.00,
		description: "El equipo de mis amores siempre será el Real Madrid, ver como conseguimos la tan ansiada décima, hace vibrar el alma.. ¡Halá madrid!.",
		specification: "Su tejido Adizero® hace mucho más ligera la playera, permitiendo que te muevas más ligero que nunca.",
		review: "Realiza una reseña de este producto.",
		canPurchase: true,
		soldOut: false,
		qty: 2,
		images: [
			{
				full: 'img/realmadrid.jpg',
				thumb: 'img/realmadrid.jpg'
			}
		],
		reviews: [
			{
				stars: 4,
				body: "Buen producto",
				author: "juan@hotmail.com"
			}
		]
	}
	
	];
})();