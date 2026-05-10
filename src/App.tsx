import { motion } from 'framer-motion'
import { Brain, Heart, Shield, Ear, Target, Sparkles, MessageCircle, type LucideIcon } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' },
} as const

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/80 bg-[#f8f6f3]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3dfbd] text-sm font-bold text-[#d18400]">
            Ps
          </div>
          <span className="text-xl font-semibold">Denise</span>
        </a>

        <div className="hidden items-center gap-10 text-sm text-stone-600 md:flex">
          <a href="#sobre">Sobre</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#blog">Blog</a>
          <a href="#contato">Contato</a>
        </div>

        <a
          href="#contato"
          className="rounded-xl bg-[#d18400] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/10 transition hover:-translate-y-0.5 hover:bg-[#b97300]"
        >
          Agendar Consulta
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="min-h-screen border-b border-stone-200/70 bg-gradient-to-b from-[#fbfaf8] to-[#f8f6f3] pt-28">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <h1 className="max-w-2xl text-5xl font-bold leading-[0.95] tracking-tight text-stone-900 md:text-7xl">
            Psicologia para quem busca acolhimento, clareza e mudança
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            Um espaço seguro onde sua história, seus sentimentos e seus objetivos são ouvidos com atenção plena, respeito e profissionalismo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className="rounded-xl bg-[#d18400] px-8 py-4 text-center font-bold text-white shadow-xl shadow-orange-900/10 transition hover:-translate-y-1 hover:bg-[#b97300]">
              Agendar Consulta
            </a>
            <a href="#sobre" className="rounded-xl border border-stone-300 bg-white/60 px-8 py-4 text-center font-bold text-stone-900 transition hover:-translate-y-1 hover:bg-white">
              Conhecer Meu Trabalho
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="flex justify-center md:justify-end">
          <div className="rounded-3xl bg-white p-7 shadow-2xl shadow-stone-900/10">
            <div className="flex h-[420px] w-[320px] items-center justify-center rounded-2xl bg-[#f5ead8]">
              <div className="text-center">
                <div className="text-6xl">👩‍⚕️</div>
                <p className="mt-4 text-stone-500">Foto da psicóloga</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="px-6 py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Sobre Mim</h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Bem-vinda. Meu nome é Dra. Denise, sou psicóloga dedicada a criar espaços de acolhimento, confiança e transformação.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 leading-7 text-stone-600 shadow-xl shadow-stone-900/5">
            Minha jornada na psicologia começou movida pelo desejo de compreender o ser humano em sua integralidade.
            <br /><br />
            Acredito que cada pessoa carrega uma história única, e meu papel é caminhar ao seu lado com empatia, ética e profissionalismo.
          </div>

          <div className="grid gap-6">
            {['10+ Anos de estudo e dedicação', 'TCC, Psicodrama e abordagem humanista', 'Atendimento para adolescentes, adultos e casais'].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-7 shadow-xl shadow-stone-900/5">
                <p className="text-sm text-stone-400">Experiência</p>
                <h3 className="mt-2 text-xl font-bold text-[#d18400]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Especialidades() {
  const items = [
    ['Ansiedade e Fobias', 'Técnicas eficazes para reduzir ansiedade e desenvolver estratégias práticas.'],
    ['Depressão e Tristeza', 'Acompanhamento compassivo para recuperar esperança, energia e sentido.'],
    ['Relacionamentos', 'Melhoria da comunicação, resolução de conflitos e vínculos saudáveis.'],
    ['Autoestima', 'Fortalecimento da confiança e construção de uma relação mais compassiva consigo.'],
    ['Luto e Perdas', 'Apoio empático no processamento de perdas e experiências difíceis.'],
    ['Transições de Vida', 'Suporte em mudanças profissionais, pessoais e identitárias.'],
  ]

  return (
    <section id="especialidades" className="bg-[#fbfaf8] px-6 py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Especialidades</h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Trabalho com uma variedade de demandas emocionais, sempre com foco em seu bem-estar e transformação.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {items.map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-9 shadow-xl shadow-stone-900/5 transition hover:-translate-y-2">
              <div className="mb-8 h-12 w-12 rounded-xl bg-[#f5ead8]" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-stone-500">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Beneficios() {
  const items: [LucideIcon, string, string][] = [
    [Shield, 'Espaço Seguro', 'Um ambiente confidencial onde você pode ser completamente autêntico.'],
    [Ear, 'Escuta Qualificada', 'Atenção plena e profissional para entender suas necessidades.'],
    [Heart, 'Atendimento Humanizado', 'Cada sessão é personalizada para sua jornada.'],
    [Sparkles, 'Desenvolvimento Emocional', 'Ferramentas práticas para melhorar sua qualidade de vida.'],
    [Target, 'Objetivos Claros', 'Trabalhamos juntas para definir metas realistas.'],
    [Brain, 'Crescimento Pessoal', 'A terapia é catalisadora para transformação profunda.'],
]

  return (
    <section id="beneficios" className="px-6 py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-6xl text-center">
        <h2 className="text-5xl font-bold">Por Que Começar Terapia Comigo?</h2>
        <p className="mt-4 text-stone-600">A terapia é um investimento em você.</p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {items.map(([Icon, title, text]) => (
            <div key={String(title)} className="px-6">
              <Icon className="mx-auto mb-5 h-10 w-10 text-[#d18400]" />
              <h3 className="text-lg font-bold">{String(title)}</h3>
              <p className="mt-3 leading-7 text-stone-500">{String(text)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function ComoFunciona() {
  const steps = [
    'Contato Inicial',
    'Agendamento',
    'Primeira Sessão',
    'Acompanhamento Contínuo',
    'Evolução e Crescimento'
  ]

  return (
    <section id="como-funciona" className="bg-[#fbfaf8] px-6 py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-3xl">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Como Funciona
          </h2>

          <p className="mt-4 text-stone-600">
            Seu caminho para o bem-estar em 5 passos simples.
          </p>
        </div>

        {/* TROCA AQUI */}
        <div className="mt-16 space-y-5">
          {steps.map((step, index) => (
            <div key={step} className="relative flex gap-6">

              {/* Linha */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[21px] top-12 h-full w-[5px] bg-[#d18400]/40" />
              )}

              {/* Bolinha */}
              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d18400] font-bold text-white shadow-lg shadow-orange-900/10">
                {index + 1}
              </div>

              {/* Texto */}
              <div className="pb-6">
                <h3 className="text-xl font-bold">
                  {step}
                </h3>

                <p className="mt-2 leading-7 text-stone-600">
                  Você recebe orientação clara e acolhedora para avançar com segurança no processo terapêutico.
                </p>
              </div>

            </div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

function BlogContatoFooter() {
  return (
    <>
      <section id="blog" className="px-6 py-28">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-bold">Blog</h2>
          <p className="mt-4 text-stone-600">Artigos e reflexões sobre bem-estar mental.</p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {['Como Lidar com Ansiedade', 'A Importância da Autocompaixão', 'Entendendo a Depressão'].map((title) => (
              <div key={title} className="rounded-3xl bg-white p-6 text-left shadow-xl shadow-stone-900/5">
                <div className="mb-6 flex h-36 items-center justify-center rounded-2xl bg-[#f5ead8] text-4xl">📝</div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-stone-500">Estratégias práticas e acessíveis para sua saúde emocional.</p>
                <p className="mt-6 font-bold text-[#d18400]">Ler Mais →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#fbfaf8] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-5xl font-bold">Vamos Conversar?</h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-600">Entre em contato e dê o primeiro passo.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
           <form
  action="https://formsubmit.co/mcpigle@gmail.com"
  method="POST"
  className="rounded-3xl bg-white p-8 shadow-xl shadow-stone-900/5"
>
  <input type="hidden" name="_subject" value="Nova mensagem pelo site da psicóloga" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  <label className="mb-5 block text-sm font-bold">
    Nome Completo
    <input
      name="nome"
      required
      className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#d18400]"
    />
  </label>

  <label className="mb-5 block text-sm font-bold">
    Telefone/WhatsApp
    <input
      name="telefone"
      required
      className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#d18400]"
    />
  </label>

  <label className="mb-5 block text-sm font-bold">
    Email
    <input
      type="email"
      name="email"
      required
      className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#d18400]"
    />
  </label>

  <label className="mb-5 block text-sm font-bold">
    Tipo de Atendimento
    <select
      name="tipo_atendimento"
      required
      className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#d18400]"
    >
      <option value="">Selecione uma opção</option>
      <option value="Online">Online</option>
      <option value="Presencial">Presencial</option>
      <option value="Ainda não sei">Ainda não sei</option>
    </select>
  </label>

  <label className="mb-5 block text-sm font-bold">
    Primeira vez aqui?
    <select
      name="primeira_vez"
      required
      className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#d18400]"
    >
      <option value="">Selecione uma opção</option>
      <option value="Sim">Sim</option>
      <option value="Não">Não</option>
    </select>
  </label>

  <label className="block text-sm font-bold">
    Como posso ajudar você?
    <textarea
      name="mensagem"
      required
      className="mt-2 h-36 w-full rounded-xl border border-stone-200 p-4 outline-none focus:border-[#d18400]"
    />
  </label>

  <button
    type="submit"
    className="mt-6 w-full rounded-xl bg-[#d18400] py-4 font-bold text-white transition hover:bg-[#b97300]"
  >
    Enviar Mensagem
  </button>
  <div className="mt-6 text-center">
  <span className="text-sm text-stone-400">ou</span>

  <a
    href="https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#20bd5c]"
  >
    <MessageCircle size={22} />
    WhatsApp
  </a>
</div>
</form>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-xl shadow-stone-900/5">
                <h3 className="text-xl font-bold">Outros Meios de Contato</h3>
                <p className="mt-6 text-stone-500">WhatsApp</p>
                <p className="font-bold text-[#d18400]">(11) 9xxxx-xxxx</p>
                <p className="mt-4 text-stone-500">Email</p>
                <p className="font-bold text-[#d18400]">contato@psicologia.com.br</p>
              </div>

              <div className="flex h-56 items-center justify-center rounded-3xl bg-[#ebe6df] text-stone-500 shadow-xl shadow-stone-900/5">
                🗺️ Mapa interativo virá aqui
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="text-5xl font-bold">Está Pronto Para Dar o Primeiro Passo?</h2>
        <p className="mx-auto mt-4 max-w-xl text-stone-600">Transformação começa com um único passo.</p>
        <a href="#contato" className="mt-8 inline-block rounded-xl bg-[#d18400] px-8 py-4 font-bold text-white">
          Agendar Consulta Agora
        </a>
      </section>

      <footer className="border-t border-stone-200 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Sobre</h3>
            <p className="mt-4 text-stone-500">Espaço de acolhimento e transformação.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Navegação</h3>
            <p className="mt-4 text-stone-500"><a href="#sobre">Sobre</a> • <a href="#especialidades">Especialidades</a> • <a href="#blog">Blog</a> • <a href="#contato">Contato</a></p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Conectar-se</h3>
            <p className="mt-4 text-stone-500"><a href="https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">WhatsApp</a> • <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> • <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Especialidades />
      <Beneficios />
      <ComoFunciona />
      <BlogContatoFooter />
    </>
  )
}