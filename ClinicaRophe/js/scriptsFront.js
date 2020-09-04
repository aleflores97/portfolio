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
        allServices: [
            {
                id_publicacion: 5,
                nombre_publicacion: "servicio1",
                descripcion: "descripcion",
                media: "images/servicios1.jpeg",
                nombre_tipo_publicacion: "Servicios"
            },
            {
                id_publicacion: 6,
                nombre_publicacion: "servicio2",
                descripcion: "descripcion",
                media: "images/servicios2.jpeg",
                nombre_tipo_publicacion: "Servicios"
            }
        ],
        allDoctor: [
            {
                "id_medico": 1,
                "jvpm": 2,
                "nombres": "Pablo Antonio",
                "apellidos": "García Gallardo",
                "anio_titulacion": "2003",
                "escuela_titulacion": "Universidad de El Salvador",
                "descripcion_perfil": "especialidad",
                "fecha_nacimiento": "1981-04-05",
                "email": "correo@correo.com",
                "telefono": "1254-6521",
                "celular": "7598-9642",
                "foto": "images/16.jpg",
                "sexo": "Masculino",
                "facebook": "facebook",
                "twitter": "twitter",
                "instagram": "instagram",
                "linkedin": "linkedin",
                "id_especialidad": 1,
                "nombre_especialidad": "Angiólogo",
                "descripcion": "Es la especialidad médica que se encarga del estudio de los vasos del sistema circulatorio (venas y arterias) y del sistema linfático.",
                "fotoe": "images/angiologia.jpg"
            },
            {
                "id_medico": 2,
                "jvpm": 2,
                "nombres": "Ingrid Magaly",
                "apellidos": "Morán Cruz",
                "anio_titulacion": "1999",
                "escuela_titulacion": "Universidad de El Salvador",
                "descripcion_perfil": "especialidad",
                "fecha_nacimiento": "1981-04-05",
                "email": "correo@correo.com",
                "telefono": "1254-6521",
                "celular": "7598-9642",
                "foto": "images/prueba.jpg",
                "sexo": "Femenino",
                "facebook": "facebook",
                "twitter": "twitter",
                "instagram": "instagram",
                "linkedin": "linkedin",
                "id_especialidad": 2,
                "nombre_especialidad": "Ginecólogo",
                "descripcion": "En medicina hace referencia a la especialidad médica y quirúrgica que trata las enfermedades del sistema reproductor femenino (útero, vagina y ovarios). ",
                "fotoe": "images/ginecologia.jpg"
            },
            {
                "id_medico": 3,
                "jvpm": 456752,
                "nombres": "Carlos Alfredo",
                "apellidos": "Monterroza",
                "anio_titulacion": "1984",
                "escuela_titulacion": "Universidad de El Salvador",
                "descripcion_perfil": "Especialista en Hipertensión y maestría en Salud Pública.",
                "fecha_nacimiento": "1981-04-05",
                "email": "correo@correo.com",
                "telefono": "1254-6521",
                "celular": "7598-9642",
                "foto": "images/carlos_perfil.jpg",
                "sexo": "Femenino",
                "facebook": "facebook",
                "twitter": "twitter",
                "instagram": "instagram",
                "linkedin": "linkedin",
                "id_especialidad": 3,
                "nombre_especialidad": "Medicina Interna",
                "descripcion": "Es una especialidad médica que atiende integralmente los problemas de salud en pacientes adultos, ingresados en un centro hospitalario o en consultas ambulatorias",
                "fotoe": "images/medicina_interna.jpg"
            },
            {
                "id_medico": 2,
                "jvpm": 2,
                "nombres": "Leslie Abigail",
                "apellidos": "Barrientos Medina",
                "anio_titulacion": "2015",
                "escuela_titulacion": "Universidad de El Salvador",
                "descripcion_perfil": "especialidad",
                "fecha_nacimiento": "1981-04-05",
                "email": "correo@correo.com",
                "telefono": "1254-6521",
                "celular": "7598-9642",
                "foto": "images/15.jpg",
                "sexo": "Femenino",
                "facebook": "facebook",
                "twitter": "twitter",
                "instagram": "instagram",
                "linkedin": "linkedin",
                "id_especialidad": 4,
                "nombre_especialidad": "Odontólogo",
                "descripcion": "Es una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, el cual incluye además de los dientes, las encías, etc.. ",
                "fotoe": "images/odontologia.jpg"
            }
        ],
        publicaciones: [],
        allComments : [
            {
                "Coment": "Hola, soy el primer comentario del sistema",
                "id_medico": 3,
                "id_suscriptor": 1,
                "id_comentario": 1,
                "id_comentario_padre": null,
                "fecha_publicacion": "2019-09-03 07:12:26",
                "color": "#4caf50",
                "Suscriptor": "Daniel"
            },
            {
                "Coment": "Hola, la respuesta del primer comentario del sistema",
                "id_medico": 3,
                "id_suscriptor": 3,
                "id_comentario": 3,
                "id_comentario_padre":1,
                "fecha_publicacion": "2019-09-03 07:12:26",
                "color": "#579643",
                "Suscriptor": "David"
            },
            {
                "Coment": "Soy el médico",
                "id_medico": 3,
                "id_comentario": 2,
                "id_suscriptor": 1000001,
                "id_comentario_padre":null,
                "fecha_publicacion": "2019-09-03 07:12:26",
                "color": "#4caf50",
                "Suscriptor": "Carlos"
            }
        ],
        cardsServicios: [
            {img: "images/servicios1.jpeg" },
            {img: "images/servicios3.jpeg" },
            {img: "images/servicios2.jpeg" }
        ],
        replys: false,
        idActualizar: -1,
        id_medico: '',

        doctor: [],
        services: [],
        comments: [],

    },
    methods:{
        limpiar(){
            document.getElementById('comenta').value = "";
        },
        pasarVariables(pagina, nombres) {
            pagina +="?";
            nomVec = nombres.split(",");
            for (i=0; i<nomVec.length; i++){
            pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
            }
            pagina = pagina.substring(0,pagina.length-1);
            location.href=pagina;
        },
        reply(index, id){
            console.log(id);
            this.replys = true;
            this.commentReply = id;
            this.idActualizar = index;
        
        },
        crear(){
            document.getElementById('iniciarSesion').style.display = 'none';
            document.getElementById('crearUsuario').style.display = 'block';
            document.querySelector(".usuarioMenu").classList.toggle("displayNone");
        },
        ingresar(){
            document.getElementById('crearUsuario').style.display = 'none';
            document.getElementById('iniciarSesion').style.display = 'block';
            document.querySelector(".usuarioMenu").classList.toggle("displayNone");

        },
        cancelar(){
            this.replys = false;
        },
        comentario(id_medico){
                for (var i=0;i< this.allComments.length;i++) {
                    if (this.allComments[i].id_medico == id_medico) {
                      this.comments.push(this.allComments[i]);
                    }
                  }
                  console.log(this.comments);
        },
        medico(id_especialidad){
                for (var i=0;i< this.allDoctor.length;i++) {
                    if (this.allDoctor[i].id_especialidad == id_especialidad) {
                      this.doctor.push(this.allDoctor[i]);
                    }
                  }
        },
        galeria(id_especialidad){
            $("#modalEsp").addClass('is-active');
            axios.get(url + "publicacion/findByTE/" + id_especialidad)            
            .then(res => {
                console.log(url + "publicacion/findByTE/" + id_especialidad);
                
                this.publicaciones = res.data;
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
            
        },
        cerrar(){
            // $("#modal").removeClass('is-active');
            $("#modalEsp").removeClass('is-active');
        },
         random_card() {
                    if (this.cardsServicios.length > 0) {
                        const rand = Math.floor(Math.random() * this.cardsServicios.length);
                        const card=this.cardsServicios[rand];
                        const imgSrc = card.img;
                        $('#imagenServicios').css("background", "linear-gradient( rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5) ),url('" + imgSrc + "') no-repeat center center fixed"); 
                        $('#imagenServicios').css("background-size", "cover"); 
                    }
                },
                serviceFunction(id_service){
                    this.services = []
                    for (var i=0;i< this.allServices.length;i++) {
                        // var doc  = this.allServices[i].id_especialidad;
                        if (this.allServices[i].id_publicacion == id_service) {
                          this.services.push(this.allServices[i]);
                        }
                      }
                      console.log(this.services);
                }
                
    },

    mounted(){

        pagina = window.location.href;
        dividir = pagina.split('=');
        id = dividir.splice(1);
        

        this.medico(id);
        this.comentario(id);

        this.random_card();
        // this.serviciosFunction();
    }
})




 

function farmacia(){     
    
    var cardsFarmacia = [
        {img: "images/farmacia3.jpeg" },
        {img: "images/farmacia2.jpeg" },
        {img: "images/farmacia4.jpeg" },
    ];
    
    function random_card() {
        if (cardsFarmacia.length > 0) {
            const rand = Math.floor(Math.random() * cardsFarmacia.length);
            const card=cardsFarmacia[rand];
            const imgSrc = card.img;
            $('#imagenFarmacia').css("background", "linear-gradient( rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5) ),url('" + imgSrc + "') no-repeat center center fixed"); 
        }
    }
    random_card();

    
}


function ocultar(){
    $('.overlayProducto').css("visibility", "hidden"); 
}

var trigger = document.querySelector(".has-dropdown");
trigger.addEventListener("click", function(event) {
  document.querySelector(".navbar-dropdown").classList.toggle("displayNone");
});

$(document).ready(function(){
    if($(window).width() < 1023) {
        // console.log("vista de movil activa");
        var usuario = document.querySelector(".usuarioNav");
        usuario.addEventListener("click", function(event) {
          document.querySelector(".usuarioMenu").classList.toggle("displayNone");
        });
    }
})

