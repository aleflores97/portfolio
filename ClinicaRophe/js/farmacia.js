new Vue({
    el: "#especialidades",
    data:{
        especialidades: [
            {
                id_especialidad: 1,
                nombre_especialidad: 'Angiología'
            },            
            {
                id_especialidad: 2,
                nombre_especialidad: 'Ginecología'
            },
            {
                id_especialidad: 3,
                nombre_especialidad: 'Medicina Interna'
            },
            {
                id_especialidad: 4,
                nombre_especialidad: 'Odontología'
            }
        ],
        products: [
            {
                id: 1,
                nombre: "Acetaminofén",
                descripcion: "descripcion",
                foto: "images/farmacia/acetaminofen.jpg"
            },
            ,
            {
                id: 3,
                nombre: "Alka-seltzer",
                descripcion: "descripcion",
                foto: "images/farmacia/alka_seltzer.jpg"
            }
            ,
            {
                id: 4,
                nombre: "Amoxicilina",
                descripcion: "descripcion",
                foto: "images/farmacia/amoxicilina.jpg"
            }
            ,
            {
                id: 5,
                nombre: "Aspirina",
                descripcion: "descripcion",
                foto: "images/farmacia/aspirina.jpg"
            }
            ,
            {
                id: 6,
                nombre: "diclofenac",
                descripcion: "descripcion",
                foto: "images/farmacia/diclofenac.jpg"
            }
            ,
            {
                id: 9,
                nombre: "Loratadina",
                descripcion: "descripcion",
                foto: "images/farmacia/loratadina.jpg"
            }
            ,
            {
                id: 11,
                nombre: "Metocarbamol",
                descripcion: "descripcion",
                foto: "images/farmacia/metocarbamol.jpg"
            }
            ,
            {
                id: 12,
                nombre: "Omeprazol",
                descripcion: "descripcion",
                foto: "images/farmacia/omeprazol.jpg"
            }
            ,
            {
                id: 13,
                nombre: "Panadol Antigripal",
                descripcion: "descripcion",
                foto: "images/farmacia/panadol_antigripal.jpg"
            }
            ,
            {
                id: 14,
                nombre: "Propranolol",
                descripcion: "descripcion",
                foto: "images/farmacia/propranolol.jpg"
            }
            ,
            {
                id: 16,
                nombre: "Salbutamol",
                descripcion: "descripcion",
                foto: "images/farmacia/salbutamol.jpg"
            }
            ,
            {
                id: 17,
                nombre: "Vitamina B12",
                descripcion: "descripcion",
                foto: "images/farmacia/vitamina_b12.jpg"
            }
            ,
            {
                id: 18,
                nombre: "Vitamina C",
                descripcion: "descripcion",
                foto: "images/farmacia/vitaminaC.jpg"
            }
        ],
        cardsServicios: [
            {img: "images/farmacia1.jpeg" },
            {img: "images/farmacia3.jpeg" },
            {img: "images/farmacia2.jpeg" }
        ],

        search: "",
        current: "",
        currentImg: "",
        selectedCategory: ''

    },
    methods:{       
        pasarVariables(pagina, nombres) {
            pagina +="?";
            nomVec = nombres.split(",");
            for (i=0; i<nomVec.length; i++){
            pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
            }
            pagina = pagina.substring(0,pagina.length-1);
            location.href=pagina;
        },
         random_card() {
                    if (this.cardsServicios.length > 0) {
                        const rand = Math.floor(Math.random() * this.cardsServicios.length);
                        const card=this.cardsServicios[rand];
                        const imgSrc = card.img;
                        $('#imagenFarmacia').css("background", "linear-gradient( rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5) ),url('" + imgSrc + "') no-repeat center center fixed"); 
                        $('#imagenFarmacia').css("background-size", "cover"); 
                    }
                },
                setCategory: function(nombre) {
                    this.selectedCategory = nombre;
                },
                getCurrentObject: function(item) {
                    this.current = item;
                    this.currentImg = item.imgs[0].img;
                },
                getCurrentImg: function(img) {
                    this.currentImg = img;
                }
                
    },

    mounted(){

        pagina = window.location.href;
        dividir = pagina.split('=');
        id = dividir.splice(1);
        


        this.random_card();
        // this.serviciosFunction();
    },
    computed: {
        filteredProducts: function () {
            return this.filteredByCategory.filter((product) => {
                return product.nombre.toLowerCase().match(this.search.toLowerCase());
            });
        },
        filteredByCategory: function() {
			var vm = this;
			var category = vm.selectedCategory;
			
			if(category.toLowerCase() === "") {
				return vm.products;
			 }// else {
			// 	return vm.products.filter(function(product) {
			// 		return product.category === category;
			// 	});
			// }
		}
    }
})