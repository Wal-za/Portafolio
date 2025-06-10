import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Globe,
  MessageCircle,
  Monitor,
  Settings,
  Github,
  Linkedin,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Rocket,
} from "lucide-react"

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostgresql,
  SiGithub,
  SiGit,
  SiDocker,    
  SiJavascript,
  SiWordpress, 
  SiRedux,
  SiPython,
  SiPhp,
  SiJquery, 
} from "react-icons/si";
import { FaServer } from "react-icons/fa";



export default function OuloPortfolio() {


const techStack = [
  // Lenguajes base
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> }, 

  // Frameworks y Librerías Frontend
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },  

  // Backend
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <FaServer /> },

  // Bases de datos
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Firebase", icon: <SiFirebase /> },

  // DevOps / Control de versiones / Herramientas
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> }, 

  // CMS / Creación rápida
  { name: "WordPress", icon: <SiWordpress /> },

  { name: "python", icon: <SiPython /> }, 
  { name: "PHP", icon: <SiPhp /> },
  { name: "jQuery", icon: <SiJquery /> },
  
  
];



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-emerald-600 opacity-90">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight">Oulo Soluciones</h1>
          <p className="text-2xl md:text-3xl font-light mb-4 opacity-95">
            Transformamos ideas en soluciones digitales inteligentes
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Creamos experiencias visuales que conectan, resuelven y enamoran
          </p>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="mr-2 h-5 w-5" />
              Contáctanos
            </Button>
            <p className="text-sm opacity-80 italic">Convierte tu idea en una solución elegante y funcional</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="h-8 w-8 text-white opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse">
          <Zap className="h-10 w-10 text-yellow-300 opacity-70" />
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Personas creando soluciones digitales a medida
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Somos un estudio de desarrollo que une lo técnico con lo humano. Diseñamos soluciones que se ven bien,
              funcionan perfecto y conectan con quien las usa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Frontend</h3>
                <p className="text-slate-600 mb-4">Experto en React, Electron, diseño de interfaces</p>
                <p className="text-blue-600 font-semibold italic">"Convierte cada clic en una experiencia"</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Backend</h3>
                <p className="text-slate-600 mb-4">Especialista en Node.js, MongoDB, APIs, automatizaciones</p>
                <p className="text-emerald-600 font-semibold italic">
                  "Hace que todo funcione detrás de escena, sin fricción"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Soluciones digitales que ya hablan por ti
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Sitios web personalizados",
                description:
                  "Creamos espacios digitales únicos que reflejan tu identidad y convierten visitas en conexión.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Code,
                title: "Aplicaciones modernas",
                description: "Construimos plataformas funcionales y seguras con React + Node.js, listas para escalar.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Monitor,
                title: "Aplicaciones de escritorio",
                description: "Automatiza procesos internos con Electron sin depender del navegador.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: MessageCircle,
                title: "Chatbots con IA",
                description: "Conversa con tu audiencia de forma natural, automática y personalizada.",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: Database,
                title: "Bases de datos MongoDB/MySQL",
                description: "Organiza, gestiona y protege tu información como una empresa moderna.",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: Settings,
                title: "Consultoría técnica",
                description: "Diagnóstico, mejora y evolución de tus sistemas con acompañamiento humano.",
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-20 px-4 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
        Nuestro trabajo, nuestra mejor carta de presentación
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Torii",
          image: "https://torii.com.co/login/logo.png",
          tech: `React.js, JavaScript, Bootstrap,
                 MongoDB, Node.js, Express`,
          impact: "Mayor interaccion con usuarios",
          url: "https://torii.com.co/",
        },
        {
          name: "Sistema Gestión de Clientes",
          image: "https://axia.com.co/wp-content/uploads/2020/05/LOGO_Mesa-de-trabajo-1.png",
          tech: "React, Node.js, MongoDB, VBA",
          impact: "Redujo el tiempo de procesamiento un 80%",
          url: "https://axia-server.netlify.app/",
        },
       
      ].map((project, index) => (
        <a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group block"
        >
        <div className="relative h-48 flex items-center justify-center bg-white">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{project.tech}</p>
                  <p className="text-emerald-600 font-semibold italic">"{project.impact}"</p>
                </CardContent>
              </a>
            ))}
          </div>
        </div>
</section>


      {/* Casos de Uso */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">¿Qué podemos construir para ti?</h2>
            <p className="text-xl text-slate-600 mb-8">Soluciones a tu medida, sin plantillas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Un sitio personal que proyecte tu marca con autenticidad",
              "Una web corporativa con backend profesional",
              "Una aplicación web moderna para vender, organizar o automatizar",
              "Un sistema interno para tu negocio (gestión, productividad, automatización)",
              "Un chatbot que hable como tú y atienda a tus clientes 24/7",
              "Una app de escritorio para trabajar offline o en equipos cerrados",
              "Una arquitectura de datos a medida, segura y escalable",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <ArrowRight className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-slate-800 italic">
              "Si puedes soñarlo, podemos diseñarlo. Y si puedes imaginarlo, podemos hacerlo funcionar."
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
        Tecnología que impulsa resultados
      </h3>

      <p className="text-slate-300 text-lg mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
        No solo desarrollamos con las mejores herramientas. Creamos experiencias digitales que hacen crecer tu negocio y conectan con tus clientes.
      </p>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-items-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
      className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            <span className="text-lg">{tech.icon}</span>
            {tech.name}
          </div>
        ))}
      </div>

      <p className="text-slate-300 text-lg mt-16 max-w-2xl mx-auto font-semibold leading-relaxed">
        Tu proyecto merece resultados reales. Yo me encargo de hacerlos realidad.
      </p>
    </div>
      </section>


      {/* Contacto */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16"> 
  <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
    Mira lo que podemos hacer por ti
  </h2>
      <div className="relative overflow-hidden rounded-xl shadow-lg mx-auto max-w-4xl aspect-video">
              <video
              className="w-full h-full object-cover"
              controls
              loop
              playsInline
              poster="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/como-hacer-una-pagina-web-en-html.jpg"
            >
              <source src="/media/Oulo.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
            </div>
        </div>


         

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4 mt-12">
              <p className="text-center text-lg max-w-md">
                ¿Tu sitio web está realmente transmitiendo el valor de tu marca? 🚀 En nuestro equipo analizamos oportunidades de mejora para que tu presencia digital trabaje a tu favor. Escríbenos y hablemos sin compromiso.
              </p>
              <a
                href="https://wa.me/573135675861?text=Hola%2C%20estoy%20interesado%20en%20mejorar%20mi%20sitio%20web%20y%20me%20gustar%C3%ADa%20conocer%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full text-lg transition duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                ¡Conversemos por WhatsApp!
              </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">Oulo Soluciones</h3>
          <p className="text-slate-400 mb-6">Transformando ideas en soluciones digitales inteligentes</p>
          <p className="text-sm text-slate-500">© 2024 Oulo Soluciones. Creado con pasión y tecnología moderna.</p>
        </div>
      </footer>
    </div>
  )
}
