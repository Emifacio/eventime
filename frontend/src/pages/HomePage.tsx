import { Link } from "react-router-dom"
import { 
  BiSearchAlt2, 
  BiUserCircle, 
  BiRightArrowAlt 
} from "react-icons/bi"
import { 
  TbSparkles, 
  TbQrcode 
} from "react-icons/tb"

export function HomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-white select-none relative overflow-hidden pb-12">
      {/* Background Decorative Gradients */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <div className="text-center max-w-4xl px-4 z-10 my-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800/80 mb-6 text-sm text-sky-400 hover:border-sky-500/30 transition-all duration-300">
          <TbSparkles className="animate-pulse text-sky-400" />
          <span>Diseño de Eventos Potenciado por IA</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Redefine tus eventos con <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">Eventime</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Crea experiencias memorables, diseña la estética de tus entradas con inteligencia artificial, automatiza cobros y garantiza accesos seguros mediante códigos QR únicos.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Comenzar ahora
            <BiRightArrowAlt className="text-xl group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-350 hover:text-white font-semibold rounded-xl border border-zinc-800 hover:border-zinc-700 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4 mt-8 z-10">
        
        {/* Feature 1 */}
        <div className="group relative bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/80 hover:border-zinc-750 hover:bg-zinc-900/85 transition-all duration-300 flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div>
            <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
              <TbSparkles />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Diseño Creativo con IA</h3>
            <p className="text-zinc-450 leading-relaxed text-sm">
              Genera simultáneamente la portada de tu evento y la estética visual de las entradas utilizando Inteligencia Artificial. Diseños únicos y profesionales en segundos.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="group relative bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/80 hover:border-zinc-750 hover:bg-zinc-900/85 transition-all duration-300 flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div>
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
              <TbQrcode />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cobros Automatizados y QR Único</h3>
            <p className="text-zinc-450 leading-relaxed text-sm">
              Simplifica las transacciones con cobros automatizados. Al completarse la compra, los asistentes reciben una entrada digital con un código QR seguro y de un solo uso.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="group relative bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/80 hover:border-zinc-750 hover:bg-zinc-900/85 transition-all duration-300 flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div>
            <div className="w-12 h-12 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
              <BiSearchAlt2 />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Descubrimiento Inteligente</h3>
            <p className="text-zinc-450 leading-relaxed text-sm">
              Explora y encuentra eventos adaptados exactamente a tus gustos. Filtra por categorías, intereses o categorías recomendadas de forma intuitiva y personalizada.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="group relative bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/80 hover:border-zinc-750 hover:bg-zinc-900/85 transition-all duration-300 flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div>
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
              <BiUserCircle />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tu Historial y Entradas</h3>
            <p className="text-zinc-450 leading-relaxed text-sm">
              Mantén un registro interactivo de todos los eventos a los que has asistido. Accede a tus entradas activas, colecciona tus pases pasados y revive tus mejores recuerdos en tu perfil.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage;
