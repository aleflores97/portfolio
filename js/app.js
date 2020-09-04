new Vue({
    el: '#app',
    data: {
        skills: [
            // hombres
            {
                id: 1,
                name:"HTML",
                value:"30%",
                
            },
            {
                id: 2,
                name:"CSS",
                value:"30%",
                
            },
            {
                id: 3,
                name:"JavaScript",
                value:"70%",
                
            }
        ],
        projects: [
            {
                id: 1,
                name: "Un Pulmón Más",
                position: 'Web Developer',
                date: 'Nov. 2019 - Oct. 2020',
                imgs: [
                    {
                        img: ''
                    }
                ],
                url: 'UnPulmónMás'
            },
            {
                id: 2,
                name: "Clinica Rophe",
                position: 'Web Designer',
                date: 'Abril. 2019 - Jul. 2020',
                imgs: [
                    {
                        img: 'img/ClinicaIndex.png',
                    }
                ],
                url: 'ClinicaRophe/index.html'
            },
            {
                id: 3,
                name: "Beto's Coffee",
                position: 'Web Developer',
                date: 'Oct. 2018 - Jul. 2019',
                imgs: [
                    {
                        img: 'img/CoffeeIndex.png'
                    }
                ],
                url: 'BetosCoffee/index.html'
            }
        ],
        images: [
            {
                id: 1,
                projectId: 1,
                src: 'img/ClinicaMedico.png'
            },
            {
                id: 2,
                projectId: 1,
                src: 'img/ClinicaProduct.png'
            },
        ],
        singleProject: '',

        //idioms
        spanish: [
            {
                header1: "¡Hola!",
                header2: "Soy Alejandra Flores",
                menu1: "Inicio",
                menu2: "Sobre mi",
                menu3: "Habilidades",
                menu4: "Servicios",
                menu5: "Experiencia",
                menu6: "Trabajos",
                about1: "Bueno, ¿Qué puedo decirte sobre mi? Soy una persona que terminó sus estudios cuando tenía 19 años, Me gradué como Técnico en Sistemas, pero sentí que algo faltaba. Así que estudié una Certificación en Diseño Web y ahi encontré lo que en realidad me gusta sobre los sitios web, no me malentiendas me encanta programar también, pero me siento más cómoda con el diseño web.",
                about2: "Ahora estoy buscando oportunidades de empleo para mejorar y desarrolar habilidades, también me encanta trabajar en equipo, y me gusta ayudar a las personas y trabajar para salvar la naturaleza. Es algo que me motiva a ser mejor persona, y me inspira a dar lo mejor de mi para tener los recursos y seguir ayudando",
                about3: "Mi trabajo es interpretar lo que las personas necesita de la mejor manera y traducirlo en algo visible que ellos puedan acceder. Mi trabajo es haer sus ideas una manera fácil para promover sus productos, servicios o lo que sea que ellos quieran en el sitio web",
                service1Name: "Diseño Responsivo",
                service1Desc: "",
                service2Name: "Diseño FrontEnd",
                service2Desc: "",
                service3Name: "Desarrollo Web",
                service3Desc: "",
                experience1: "Técnico en ingeniería de Sistemas Informáticos",
                dateExperience1: "2016 - 2017",
                experience2: "Inicio Certificación en Diseño Web",
                dateExperience2: "Octubre 2018",
                experience3: "Desarrollo de sitio web para Beto's Coffee como proyecto de certificación",
                dateExperience3: "Octubre 2018 - Julio 2019",
                experience4: "Diseño de sitio web para Clínica ROPHE como proyecto de Certificación",
                dateExperience4: "Abril 2019 - Julio 2019",
                experience5: "Fin Certificación en Diseño Web",
                dateExperience5: "Julio 2019",
                experience6: "Desarrollo de sitio Web para Un Pulmon Mas",
                dateExperience6: "Noviembre 2019 - Julio 2020",
                experience7: "Curso de Inglés",
                dateExperience7: "Marzo 2020 - Octubre 2020"
            }
        ],
        english: [
            {
                header1: "Hi!",
                header2: "I'm Alejandra Flores",
                menu1: "Home",
                menu2: "About me",
                menu3: "Skills",
                menu4: "Services",
                menu5: "Experience",
                menu6: "Work",
                about1: "Well, what can I say about myself? I'm a person who ended her studies when she was 19 years old. I graduated as a Systems Technician, but I felt that something missing, so I studied a Web Design Certification and there I found what I really like about websites, don't get me wrong I like programming too, but I really feel more comfortable with the design.",
                about2: "Now I'm looking for jobs opportunities to improve and develop skills, also I like to work with a team, and I like to help people and work to save nature. I'ts something that motivates me to be a better person, and inspire me to do my best in order to have the resources to keep helping.",
                about3: "My job is about to interpret what the client needs in the best way and translate it through something visible that they can access. My work is making their ideas an easy way to promote their products, services or whatever they want to do with the website. ",
                service1Name: "Responsive Design",
                service1Desc: "",
                service2Name: "Frontend Design",
                service2Desc: "",
                service3Name: "Web Developent",
                service3Desc: "",
                experience1: "Computer Systems Engineering Technician",
                dateExperience1: "2016 - 2017",
                experience2: "Start of Certification in Web Design",
                dateExperience2: "October 2018",
                experience3: "Website development for Beto's Coffee as a certification project",
                dateExperience3: "October 2018 - July 2019",
                experience4: "Website development for Clínica ROPHE as a certification project",
                dateExperience4: "April 2019 - July 2019",
                experience5: "End of Certification in Web Design",
                dateExperience5: "July 2019",
                experience6: "Website development for Un Pulmón Más",
                dateExperience6: "November 2019 - Jul 2020",
                experience7: "English Training",
                dateExperience7: "March 2020 -  September 2020"
            }
        ],

        idiom: [],
        idiomSelected: ''
    },
    mounted(){
        this.idiomSelected = this.english
    }
});
