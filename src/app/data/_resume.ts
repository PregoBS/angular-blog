import type { ResumeSection, ResumeHeader } from "src/types-api";


const _resumeSectionEducation: ResumeSection = {
    name: "Educação",
    entries: [
        {
            type: 'two-rows',
            rows: [
                { left: "Universidade do Vale do Rio dos Sinos UNISINOS", right: "São Leopoldo - RS", firstRow: true, mergeColumns: false },
                { left: "Análise e Desenvolvimento de Sistemas", right: "2022/2 – 2025/1", firstRow: false, mergeColumns: false },
            ]
        },
        {
            type: 'two-rows',
            rows: [
                { left: "Harvard School Online", right: "Remoto", firstRow: true, mergeColumns: false },
                { left: "CS50 – Introduction to Computer Science", right: "2022", firstRow: false, mergeColumns: false },
            ]
        },
        {
            type: 'two-rows',
            rows: [
                { left: "Fundação Escola Técnica Liberato Salzano Vieira da Cunha", right: "Novo Hamburgo – RS", firstRow: true, mergeColumns: false },
                { left: "Técnico em Mecânica e Ensino Médio", right: "2015", firstRow: false, mergeColumns: false },
            ]
        },
    ]
};

const _resumeSectionWorkExp: ResumeSection = {
    name: "Experiências de Trabalho",
    entries: [
        {
            type: 'more-rows',
            rows: [
                { left: "NefroAtual Cursos e Treinamentos LTDA (Dr. Luís Sette)", right: "Remoto", firstRow: true, mergeColumns: false },
                { left: "Desenvolvedor Fullstack", right: "Jul 2022 – Atual", firstRow: false, mergeColumns: false },
                { left: "NefroAtual - App Store e Google Play Store | https://nefroatual.com.br", right: "", firstRow: false, mergeColumns: true },
                {
                    left: "Aumentei as interações dos usuários ao longo do tempo \
          desenvolvendo um aplicativo mobile para Andriod/iOS utilizando \
          React Native e Firebase juntamente com a aplicação web construída \
          com o AstroJS framework.", right: "", firstRow: false, mergeColumns: true
                },
            ]
        },
        {
            type: 'more-rows',
            rows: [
                { left: "My Job Upgrade", right: "Remoto", firstRow: true, mergeColumns: false },
                { left: "Desenvolvedor Fullstack", right: "Mai 2023", firstRow: false, mergeColumns: false },
                { left: "https://myjobupgrade.com", right: "", firstRow: false, mergeColumns: true },
                {
                    left: "Desenvolvi um aplicativo com NextJS e TypeScript \
          integrado ao GPT da OpenAI que gera currículos voltados à \
          uma vaga de emprego específica.", right: "", firstRow: false, mergeColumns: true
                },
            ]
        },
        {
            type: 'more-rows',
            rows: [
                { left: "Seven Multimercados", right: "Remoto", firstRow: true, mergeColumns: false },
                { left: "Investimento e Produtos Financeiros – Startup", right: "", firstRow: true, mergeColumns: true },
                { left: "Desenvolvedor Fullstack", right: "Jan/2020 - Mai/2022", firstRow: false, mergeColumns: false },
                {
                    left: "Desenvolvi uma Planilha de Excel para melhor \
          gerenciamento de risco que aumento os resultados gerais em \
          325% e possibilitou aplicar métricas aos investimentos.\nDesenvolvi \
          uma ferramenta de Screener para ativos financeiros com Python \
          que reduziu o tempo de tomada de decisão em 10 vezes, automatizando \
          passos de análises complexos.\nDesenvolvi um website FullStack \
          com NodeJS, React, Docker, AWS EC2 que permitiu a vários \
          investidores acessarem a ferramenta de Screener em tempo real, \
          o que melhorou a qualidade dos investimentos realizados.", right: "", firstRow: false, mergeColumns: true
                },
            ]
        },
    ],
};

const _resumeSectionExtra: ResumeSection = {
    name: "Atividades Complementares",
    entries: [
        {
            type: 'more-rows',
            rows: [
                { left: "TecXp TECNOSINOS - Powered By SebraeX", right: "São Leopoldo – RS", firstRow: true, mergeColumns: false },
                { left: "Hackathon", right: "Junho/2023", firstRow: false, mergeColumns: false },
                { left: "Premiado em 1º Lugar como melhor projeto de tecnologia e inovação.", right: "", firstRow: false, mergeColumns: true },
            ]
        },
    ],
};

const _resumeSectionAdditionalInfo: ResumeSection = {
    name: "Informações Adicionais",
    entries: [
        {
            type: 'more-rows',
            rows: [
                {
                    left: "Habilidades: Python • NodeJS • MongoDB • SQL • \
          Docker • AWS EC2 • Load Balancer • Security Groups • HTML • \
          CSS • JavaScript • TypeScript • React • React-Native • Angular \
          • NextJS • REST API • Princípios SOLID• Firebase.", right: "", firstRow: true, mergeColumns: true
                },
                { left: "Interesses: Guitarrista, apaixonado por dar vida a novos projetos, entusiasta de tecnologia e investidor.", right: "", firstRow: false, mergeColumns: true },
                { left: "Línguas: Inglês Intermediário", right: "", firstRow: false, mergeColumns: true },
            ]
        },
    ],
};

const _resumeSections: ResumeSection[] = [
    _resumeSectionEducation,
    _resumeSectionWorkExp,
    _resumeSectionExtra,
    _resumeSectionAdditionalInfo
];

const _resumeHeader: ResumeHeader = {
    name: "Rodrigo Elizeu Cherutti",
    items: [
        { type: 'link', link: "mailto:rodrigocherutti@hotmail.com", label: "rodrigocherutti@hotmail.com" },
        { type: 'link', link: "linkedin.com/in/rodrigo-cherutti", label: "LinkedIn" },
        { type: 'link', link: "github.com/PregoBS", label: "GitHub" },
        { type: 'text', label: "Novo Hamburgo - RS" },
    ]
};

const _resume = {
    header: _resumeHeader,
    sections: _resumeSections,
};

export default _resume;