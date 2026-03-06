function App() {
  return (
    <>
      <nav className="fixed w-full z-50 bg-surface-light/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="material-icons text-secondary dark:text-primary text-3xl">
                visibility
              </span>
              <span className="font-bold text-2xl tracking-tight text-dark dark:text-white">
                Argus
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-secondary dark:hover:text-primary font-medium transition-colors"
                href="#como-funciona"
              >
                Como funciona
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-secondary dark:hover:text-primary font-medium transition-colors"
                href="#solucoes"
              >
                Soluções
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-secondary dark:hover:text-primary font-medium transition-colors"
                href="#precos"
              >
                Preços
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                className="hidden md:block font-medium text-text-muted-light dark:text-text-muted-dark hover:text-secondary dark:hover:text-primary transition-colors"
                href="#"
              >
                Entrar
              </a>
              <a
                className="bg-secondary dark:bg-primary text-white dark:text-dark px-6 py-2.5 rounded-full font-bold hover:bg-dark dark:hover:bg-white transition-all shadow-md"
                href="#"
              >
                Começar Grátis
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 dark:bg-secondary/30 text-secondary dark:text-primary font-medium text-sm mb-8 border border-primary/30">
              <span className="material-icons text-sm">auto_awesome</span>A nova
              era da criação de conteúdo
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Transforme informação bruta em
              <span className="gradient-text italic pr-2">
                {" "}
                conteúdo pronto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-2xl mx-auto leading-relaxed">
              A inteligência artificial do Argus lê suas anotações, links e
              áudios, transformando-os em posts para redes sociais, newsletters
              e artigos em segundos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                className="w-full sm:w-auto px-8 py-4 bg-secondary dark:bg-primary text-white dark:text-dark rounded-full font-bold text-lg hover:bg-dark dark:hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                href="#"
              >
                Começar grátis agora
                <span className="material-icons">arrow_forward</span>
              </a>
              <a
                className="w-full sm:w-auto px-8 py-4 border-2 border-secondary/20 dark:border-primary/30 text-dark dark:text-white rounded-full font-bold text-lg hover:border-secondary dark:hover:border-primary transition-all flex items-center justify-center gap-2 bg-surface-light dark:bg-surface-dark/50"
                href="#demo"
              >
                <span className="material-icons">play_circle</span> Ver como
                funciona
              </a>
            </div>
            <p className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark">
              Não é necessário cartão de crédito. Cancele quando quiser.
            </p>
          </div>
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-[2.5rem] blur-2xl opacity-30 dark:opacity-20"></div>
            <div className="relative bg-surface-light dark:bg-dark border border-gray-200 dark:border-secondary rounded-4xl shadow-soft overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-5/12 p-6 md:p-8 border-r border-gray-100 dark:border-secondary/50 bg-gray-50 dark:bg-dark/80">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Entrada de Dados</h3>
                  <span className="px-2 py-1 bg-white dark:bg-secondary rounded-md text-xs font-semibold shadow-sm">
                    Texto Bruto
                  </span>
                </div>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-secondary/30 h-64 font-mono text-sm text-text-muted-light dark:text-text-muted-dark overflow-hidden relative">
                  "A nova taxa Selic foi definida ontem pelo Copom. Caiu 0.5%,
                  indo para 11.25% ao ano. Isso afeta financiamentos
                  imobiliários que devem ficar mais baratos nos próximos meses,
                  mas a poupança rende menos. Especialistas recomendam renda
                  fixa atrelada ao IPCA."
                  <div className="absolute bottom-4 right-4 animate-pulse">
                    <span className="material-icons text-primary-dark">
                      edit
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-secondary/50 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-secondary transition-colors">
                    <span className="material-icons text-base">link</span> URL
                  </button>
                  <button className="flex-1 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-secondary/50 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-secondary transition-colors">
                    <span className="material-icons text-base">mic</span> Áudio
                  </button>
                </div>
                <button className="w-full mt-4 py-4 bg-gradient-to-r from-secondary to-primary-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md">
                  <span className="material-icons">auto_awesome</span> Gerar
                  Conteúdo
                </button>
              </div>
              <div className="w-full md:w-7/12 p-6 md:p-8 bg-white dark:bg-dark relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-blue-50 dark:bg-secondary/30 text-secondary dark:text-primary rounded-lg text-sm font-bold flex items-center gap-1">
                      <span className="material-icons text-sm">article</span>
                      LinkedIn Post
                    </span>
                    <span className="px-3 py-1.5 text-text-muted-light dark:text-text-muted-dark rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-surface-dark cursor-pointer">
                      Twitter Thread
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-text-muted-light hover:text-secondary dark:text-text-muted-dark dark:hover:text-primary">
                      <span className="material-icons">content_copy</span>
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold leading-tight">
                    🚨 URGENTE: A Selic caiu para 11,25% ao ano. O que isso muda
                    na sua vida?
                  </h2>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                    Ontem o Copom anunciou um novo corte de 0,5% na taxa básica
                    de juros. Se você tem dinheiro investido ou pensa em comprar
                    um imóvel, preste atenção nestes 3 pontos:
                  </p>
                  <ul className="space-y-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <strong>Financiamentos:</strong> A tendência é que o
                      crédito imobiliário fique mais barato nos próximos meses.
                      Ótima notícia para quem busca a casa própria.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">📉</span>
                      <strong>Poupança:</strong> O rendimento, que já era baixo,
                      fica ainda menos atrativo.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">💡</span>
                      <strong>Onde investir:</strong> Especialistas agora
                      recomendam focar em renda fixa atrelada à inflação (IPCA).
                    </li>
                  </ul>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-4">
                    Como essa queda afeta seus planos financeiros para este ano?
                    Conta pra mim nos comentários! 👇
                  </p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark/50 mt-4">
                    #Economia #Investimentos #Selic #MercadoFinanceiro
                    #Planejamento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Criar conteúdo não deveria ser
              <span className="italic font-light">tão doloroso</span>
            </h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
              Jornalistas e criadores gastam horas adaptando a mesma informação
              para diferentes plataformas. O Argus resolve isso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background-light dark:bg-dark p-8 rounded-2xl border border-gray-100 dark:border-secondary/30 transition-transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">timer_off</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Consumo de Tempo</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Ler notas, resumir, encontrar o gancho perfeito e reescrever
                leva horas que você poderia usar apurando novas histórias.
              </p>
            </div>
            <div className="bg-background-light dark:bg-dark p-8 rounded-2xl border border-gray-100 dark:border-secondary/30 transition-transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">dynamic_feed</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptação de Formatos</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Um texto de blog não funciona no LinkedIn. Um fio do Twitter é
                diferente de um roteiro de Reels. Adaptar dá trabalho.
              </p>
            </div>
            <div className="bg-background-light dark:bg-dark p-8 rounded-2xl border border-gray-100 dark:border-secondary/30 transition-transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">psychology_alt</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Bloqueio Criativo</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Encontrar aquele título chamativo ou a introdução que prende a
                atenção do leitor (hook) pode ser exaustivo mentalmente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 relative" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-secondary dark:text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              O Processo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Três passos para o
              <span className="italic font-light">conteúdo perfeito</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-dark/20 via-secondary/20 to-primary-dark/20 -translate-y-1/2 z-0"></div>
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <div className="bg-white dark:bg-surface-dark p-8 rounded-4xl shadow-soft border border-gray-100 dark:border-secondary/30 relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary dark:bg-primary text-white dark:text-dark rounded-full flex items-center justify-center font-bold text-xl border-4 border-background-light dark:border-background-dark">
                  1
                </div>
                <div className="w-16 h-16 bg-blue-50 dark:bg-secondary/50 rounded-2xl flex items-center justify-center mb-6 mt-2">
                  <span className="material-icons text-3xl text-secondary dark:text-primary">
                    input
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Insira a informação</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  Cole seu texto bruto, anotações de entrevista, insira a URL de
                  uma notícia ou faça upload de um áudio.
                </p>
              </div>
              <div className="bg-white dark:bg-surface-dark p-8 rounded-4xl shadow-soft border border-gray-100 dark:border-secondary/30 relative mt-0 md:mt-12">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary dark:bg-primary text-white dark:text-dark rounded-full flex items-center justify-center font-bold text-xl border-4 border-background-light dark:border-background-dark">
                  2
                </div>
                <div className="w-16 h-16 bg-blue-50 dark:bg-secondary/50 rounded-2xl flex items-center justify-center mb-6 mt-2">
                  <span className="material-icons text-3xl text-secondary dark:text-primary">
                    tune
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Escolha o formato</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  Selecione para qual rede social ou plataforma você quer o
                  conteúdo. Ajuste o tom de voz (sério, descontraído,
                  jornalístico).
                </p>
              </div>
              <div className="bg-white dark:bg-surface-dark p-8 rounded-4xl shadow-soft border border-gray-100 dark:border-secondary/30 relative mt-0 md:mt-24">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary dark:bg-primary text-white dark:text-dark rounded-full flex items-center justify-center font-bold text-xl border-4 border-background-light dark:border-background-dark">
                  3
                </div>
                <div className="w-16 h-16 bg-blue-50 dark:bg-secondary/50 rounded-2xl flex items-center justify-center mb-6 mt-2">
                  <span className="material-icons text-3xl text-secondary dark:text-primary">
                    publish
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Copie e Publique</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  O Argus gera opções de textos otimizados com emojis, hashtags
                  e formatação correta. Só revisar e publicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-24 bg-surface-light dark:bg-surface-dark"
        id="precos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Um plano para cada
              <span className="italic font-light"> necessidade</span>
            </h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              Comece de graça e escale conforme sua produção de conteúdo
              aumenta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-dark p-8 rounded-4xl border border-gray-200 dark:border-secondary/30 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6">
                Para testar a ferramenta
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">R$ 0</span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  /mês
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  10 gerações por mês
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  Formatos básicos (Twitter, LinkedIn)
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  Apenas entrada de texto
                </li>
              </ul>
              <a
                className="w-full py-3 rounded-xl border-2 border-gray-200 dark:border-secondary/50 font-bold text-center hover:border-secondary dark:hover:border-primary transition-colors"
                href="#"
              >
                Começar Grátis
              </a>
            </div>
            <div className="bg-white dark:bg-dark p-8 rounded-4xl border border-gray-200 dark:border-secondary/30 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6">
                Para criadores iniciantes
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">R$ 29</span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  /mês
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  50 gerações por mês
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  Todos os formatos sociais
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  Leitura de URLs
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  1 tom de voz personalizado
                </li>
              </ul>
              <a
                className="w-full py-3 rounded-xl border-2 border-gray-200 dark:border-secondary/50 font-bold text-center hover:border-secondary dark:hover:border-primary transition-colors"
                href="#"
              >
                Assinar Starter
              </a>
            </div>
            <div className="bg-dark dark:bg-surface-dark p-8 rounded-4xl border-2 border-secondary dark:border-primary shadow-glow flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary dark:bg-primary text-white dark:text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Mais Popular
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Creator</h3>
              <p className="text-sm text-gray-400 dark:text-text-muted-dark mb-6 text-white/70">
                Para profissionais ativos
              </p>
              <div className="mb-8 text-white">
                <span className="text-4xl font-extrabold">R$ 79</span>
                <span className="text-white/70">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-white">
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>
                  Gerações ilimitadas
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>
                  Todos os formatos + Newsletters
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>
                  Transcrição de áudio/vídeo
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>
                  5 tons de voz personalizados
                </li>
              </ul>
              <a
                className="w-full py-3 rounded-xl bg-primary text-dark font-bold text-center hover:bg-white transition-colors shadow-lg"
                href="#"
              >
                Assinar Creator
              </a>
            </div>
            <div className="bg-white dark:bg-dark p-8 rounded-4xl border border-gray-200 dark:border-secondary/30 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6">
                Para equipes e agências
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">R$ 199</span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  /mês
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  Tudo do Creator
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  Até 5 usuários
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  API Access
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-icons text-green-500 text-sm">
                    check_circle
                  </span>
                  Suporte prioritário
                </li>
              </ul>
              <a
                className="w-full py-3 rounded-xl border-2 border-gray-200 dark:border-secondary/50 font-bold text-center hover:border-secondary dark:hover:border-primary transition-colors"
                href="#"
              >
                Falar com Vendas
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-dark"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Pronto para revolucionar sua <br />
            <span className="italic font-light text-primary">
              criação de conteúdo?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de jornalistas e criadores que já economizam
            dezenas de horas todas as semanas com o Argus.
          </p>
          <a
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-dark rounded-full font-bold text-xl hover:bg-white transition-all shadow-glow hover:-translate-y-1"
            href="#"
          >
            Começa a criar hoje
            <span className="material-icons ml-2">rocket_launch</span>
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Usado por +2.300 criadores
          </p>
        </div>
      </section>
      <footer className="bg-background-light dark:bg-background-dark py-12 border-t border-gray-200 dark:border-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-icons text-secondary dark:text-primary text-2xl">
                visibility
              </span>
              <span className="font-bold text-xl tracking-tight text-dark dark:text-white">
                Argus
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-text-muted-light dark:text-text-muted-dark">
              <a
                className="hover:text-secondary dark:hover:text-primary transition-colors"
                href="#"
              >
                Sobre
              </a>
              <a
                className="hover:text-secondary dark:hover:text-primary transition-colors"
                href="#"
              >
                Blog
              </a>
              <a
                className="hover:text-secondary dark:hover:text-primary transition-colors"
                href="#"
              >
                Termos de Serviço
              </a>
              <a
                className="hover:text-secondary dark:hover:text-primary transition-colors"
                href="#"
              >
                Privacidade
              </a>
            </div>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-surface-dark flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-dark transition-all"
                href="#"
              >
                <span className="material-icons text-[20px]">share</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-surface-dark flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-dark transition-all"
                href="#"
              >
                <span className="material-icons text-[20px]">mail</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-secondary/30 text-center text-sm text-text-muted-light dark:text-text-muted-dark">
            © 2026 Argus AI. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
