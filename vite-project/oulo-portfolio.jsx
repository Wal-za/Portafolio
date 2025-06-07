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

export default function OuloPortfolio() {
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
                name: "E-commerce Moderno",
                image: "/placeholder.svg?height=300&width=400",
                tech: "React, Node.js, MongoDB",
                impact: "Aumentó las ventas online un 250%",
              },
              {
                name: "Sistema de Gestión",
                image: "/placeholder.svg?height=300&width=400",
                tech: "Electron, PostgreSQL",
                impact: "Redujo el tiempo de procesamiento un 80%",
              },
              {
                name: "Chatbot Inteligente",
                image: "/placeholder.svg?height=300&width=400",
                tech: "IA, APIs, React",
                impact: "Automatizó el 90% de consultas frecuentes",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{project.tech}</p>
                  <p className="text-emerald-600 font-semibold italic">"{project.impact}"</p>
                </CardContent>
              </Card>
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
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Tecnologías que dominamos</h3>
        <div className="flex flex-wrap justify-center gap-4">
  {[
    "HTML (Lenguaje de marcado)",
    "CSS (Hojas de estilo)",
    "JavaScript (Lenguaje de programación)",
    "PHP (Backend)",
    "Python (Backend)",
    "Bootstrap (Framework CSS)",
    "Tailwind CSS (Framework utilitario)",
    "React (Librería de UI)",
    "Vue.js (Framework frontend)",
    "Angular (Framework frontend)",
    "SASS / SCSS (Preprocesador CSS)",
    "jQuery (Librería JS)",
    "Vite (Empaquetador rápido)",
    "Webpack (Empaquetador de módulos)",
    "Babel (Transpilador JS)",
    "Material UI (Componentes React)",
    "Chakra UI (Componentes React)",
    "Ant Design (Componentes UI)",
    "Node.js (Entorno de ejecución)",
    "Express.js (Framework backend)",
    "Django (Framework Python)",
    "Flask (Microframework Python)",
    "Laravel (Framework PHP)",
    "Next.js (React Fullstack)",
    "Nuxt.js (Vue Fullstack)",
    "MongoDB (NoSQL)",
    "PostgreSQL (Relacional)",
    "MySQL (Relacional)",
    "SQLite (Relacional ligero)",
    "Firebase (BaaS)",
    "Axios (Cliente HTTP)",
    "REST APIs (Comunicación)",
    "GraphQL (Consultas API)",
    "JWT (Autenticación)",
    "WebSockets (Tiempo real)",
    "Git (Control de versiones)",
    "GitHub (Repositorio)",
    "Docker (Contenedores)",
    "Netlify (Despliegue frontend)",
    "Vercel (Despliegue fullstack)",
  ].map((tech, index) => (
    <span
      key={index}
       className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
    >
      {tech}
    </span>
  ))}
</div>

        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Construyamos juntos tu próxima solución
            </h2>
            <p className="text-xl text-slate-600">Cuéntanos tu idea. Nosotros la transformamos en experiencia</p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre</label>
                    <Input
                      placeholder="Tu nombre completo"
                      className="border-2 border-gray-200 focus:border-emerald-500 rounded-lg p-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Correo electrónico</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="border-2 border-gray-200 focus:border-emerald-500 rounded-lg p-3"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Cuéntanos tu proyecto</label>
                  <Textarea
                    placeholder="Describe tu idea, necesidad o proyecto. Mientras más detalles, mejor podremos ayudarte..."
                    rows={6}
                    className="border-2 border-gray-200 focus:border-emerald-500 rounded-lg p-3"
                  />
                </div>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <Button variant="outline" size="lg" className="rounded-full hover:bg-slate-100">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full hover:bg-slate-100">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full">
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
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
