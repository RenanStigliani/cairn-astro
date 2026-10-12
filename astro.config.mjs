// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { satteri } from '@astrojs/markdown-satteri';
import { basePathPlugin } from './src/plugins/base-path.mjs';

const base = '/cairn-astro';

export default defineConfig({
    site: 'https://renanstigliani.github.io',
    base,
    trailingSlash: 'always',
    markdown: {
        processor: satteri({ mdastPlugins: [basePathPlugin(base)] }),
    },
    integrations: [
        starlight({
            title: 'Cairn',
            description: 'Tradução em português do Cairn, um RPG de aventura sobre explorar um bosque sombrio e misterioso.',
            logo: { src: './src/assets/logo.svg', replacesTitle: true },
            favicon: '/favicon.ico',
            customCss: ['./src/styles/custom.css'],
            components: {
                Footer: './src/components/Footer.astro',
                ThemeProvider: './src/components/ThemeProvider.astro',
                ThemeSelect: './src/components/ThemeSelect.astro',
            },
            locales: {
                root: { label: 'Português (Brasil)', lang: 'pt-BR' },
            },
            editLink: {
                baseUrl: 'https://github.com/RenanStigliani/cairn-astro/edit/main/',
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/RenanStigliani/cairn-astro' },
            ],
            sidebar: [
                {
                    label: 'Início',
                    link: '/'
                },
                {
                    label: 'Regras',
                    collapsed: true,
                    items: [
                        {
                            label: 'Visão Geral',
                            link: '/regras/'
                        },
                        {
                            label: 'Visão Geral & Princípios',
                            link: '/regras/overview-and-principles/'
                        },
                        {
                            label: 'Regras Básicas',
                            link: '/regras/core-rules/'
                        },
                        {
                            label: 'Procedimentos',
                            link: '/regras/procedures/'
                        },
                        {
                            label: 'Criação de Personagem',
                            link: '/regras/character-creation/'
                        },
                        {
                            label: 'Pacotes de Equipamento',
                            link: '/regras/gear-packages/'
                        },
                        {
                            label: 'Mercado',
                            link: '/regras/marketplace/'
                        },
                        {
                            label: 'Tomos de Magia',
                            link: '/regras/spellbooks/'
                        }
                    ]
                },
                {
                    label: 'Guia do Guardião',
                    collapsed: true,
                    items: [
                        {
                            label: 'Visão Geral',
                            link: '/guia-do-guardiao/'
                        },
                        {
                            label: 'Bestiário',
                            link: '/guia-do-guardiao/bestiary/'
                        },
                        {
                            label: 'Bibliografia',
                            link: '/guia-do-guardiao/bibliography/'
                        },
                        {
                            label: 'Combate',
                            link: '/guia-do-guardiao/combat/'
                        },
                        {
                            label: 'Conhecimento e Percepção',
                            link: '/guia-do-guardiao/knowledge-and-perception/'
                        },
                        {
                            label: 'Crescimento',
                            link: '/guia-do-guardiao/growth/'
                        },
                        {
                            label: 'Criando Antecedentes',
                            link: '/guia-do-guardiao/creating-backgrounds/'
                        },
                        {
                            label: 'Criando Monstros',
                            link: '/guia-do-guardiao/creating-monsters/'
                        },
                        {
                            label: 'Destacamentos',
                            link: '/guia-do-guardiao/detachments/'
                        },
                        {
                            label: 'Dificuldade Variável',
                            link: '/guia-do-guardiao/variable-difficulty/'
                        },
                        {
                            label: 'Exploração de Áreas Selvagens',
                            link: '/guia-do-guardiao/wilderness-exploration/'
                        },
                        {
                            label: 'Exploração de Masmorra',
                            link: '/guia-do-guardiao/dungeon-exploration/'
                        },
                        {
                            label: 'Forest Seeds',
                            link: '/guia-do-guardiao/forest-seeds/'
                        },
                        {
                            label: 'Pointcrawls',
                            link: '/guia-do-guardiao/pointcrawls/'
                        },
                        {
                            label: 'Procedimentos de Nomenclatura',
                            link: '/guia-do-guardiao/naming-procedures/'
                        },
                        {
                            label: 'Relicário',
                            link: '/guia-do-guardiao/reliquary/'
                        },
                        {
                            label: 'Salvamento',
                            link: '/guia-do-guardiao/saves/'
                        },
                        {
                            label: 'Sementes de Cenário',
                            link: '/guia-do-guardiao/setting-seeds/'
                        },
                        {
                            label: 'Sementes de Masmorra',
                            link: '/guia-do-guardiao/dungeon-seeds/'
                        },
                        {
                            label: 'Sobre o Grupo de Exemplo',
                            link: '/guia-do-guardiao/about-the-example-party/'
                        },
                        {
                            label: 'Tabelas de PNJ',
                            link: '/guia-do-guardiao/npc-tables/'
                        },
                        {
                            label: 'Tomos de Magia',
                            link: '/guia-do-guardiao/spellbooks/'
                        },
                        {
                            label: 'Vald',
                            link: '/guia-do-guardiao/vald/'
                        },
                        {
                            label: 'Vínculos e Augúrios',
                            link: '/guia-do-guardiao/bonds-and-omens/'
                        }
                    ]
                },
                {
                    label: 'SRDs',
                    collapsed: true,
                    items: [
                        {
                            label: 'Visão Geral',
                            link: '/srds/'
                        },
                        {
                            label: 'Primeira Edição',
                            link: '/srds/first-edition/'
                        },
                        {
                            label: 'Segunda Edição',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Visão Geral',
                                    link: '/srds/second-edition/'
                                },
                                {
                                    label: 'Criação de Personagem',
                                    link: '/srds/second-edition/character-creation/'
                                },
                                {
                                    label: 'Antecedentes',
                                    collapsed: true,
                                    items: [
                                        {
                                            label: 'Visão Geral',
                                            link: '/srds/second-edition/antecedentes/'
                                        },
                                        {
                                            label: 'Atalaia',
                                            link: '/srds/second-edition/backgrounds/marchguard/'
                                        },
                                        {
                                            label: 'Barbeiro-Cirurgião',
                                            link: '/srds/second-edition/backgrounds/barber-surgeon/'
                                        },
                                        {
                                            label: 'Caldeireiro',
                                            link: '/srds/second-edition/backgrounds/kettlewright/'
                                        },
                                        {
                                            label: 'Campário',
                                            link: '/srds/second-edition/backgrounds/fieldwarden/'
                                        },
                                        {
                                            label: 'Cata-Fungo',
                                            link: '/srds/second-edition/backgrounds/fungal-forager/'
                                        },
                                        {
                                            label: 'Corredeiro',
                                            link: '/srds/second-edition/backgrounds/rill-runner/'
                                        },
                                        {
                                            label: 'Corta-Bolsas',
                                            link: '/srds/second-edition/backgrounds/cutpurse/'
                                        },
                                        {
                                            label: 'Domador',
                                            link: '/srds/second-edition/backgrounds/beast-handler/'
                                        },
                                        {
                                            label: 'Enjeitado',
                                            link: '/srds/second-edition/backgrounds/foundling/'
                                        },
                                        {
                                            label: 'Escolta',
                                            link: '/srds/second-edition/backgrounds/outrider/'
                                        },
                                        {
                                            label: 'Esconjurador',
                                            link: '/srds/second-edition/backgrounds/hexenbane/'
                                        },
                                        {
                                            label: 'Escrivaneiro',
                                            link: '/srds/second-edition/backgrounds/scrivener/'
                                        },
                                        {
                                            label: 'Espreitador',
                                            link: '/srds/second-edition/backgrounds/prowler/'
                                        },
                                        {
                                            label: 'Flecheiro dos Ventos',
                                            link: '/srds/second-edition/backgrounds/fletchwind/'
                                        },
                                        {
                                            label: 'Jogral',
                                            link: '/srds/second-edition/backgrounds/jongleur/'
                                        },
                                        {
                                            label: 'Mestibruxo',
                                            link: '/srds/second-edition/backgrounds/half-witch/'
                                        },
                                        {
                                            label: 'Montebanco',
                                            link: '/srds/second-edition/backgrounds/mountebank/'
                                        },
                                        {
                                            label: 'Ossueiro',
                                            link: '/srds/second-edition/backgrounds/bonekeeper/'
                                        },
                                        {
                                            label: 'Ourivex',
                                            link: '/srds/second-edition/backgrounds/aurifex/'
                                        },
                                        {
                                            label: 'Verdessábio',
                                            link: '/srds/second-edition/backgrounds/greenwise/'
                                        }
                                    ]
                                },
                                {
                                    label: 'Vald',
                                    link: '/srds/second-edition/vald/'
                                },
                                {
                                    label: 'Ferramentas',
                                    collapsed: true,
                                    items: [
                                        {
                                            label: 'Visão Geral',
                                            link: '/srds/second-edition/tools/'
                                        },
                                        {
                                            label: 'Gerador de Personagens',
                                            link: '/srds/second-edition/tools/character-generator/'
                                        }
                                    ]
                                },
                                {
                                    label: 'Cópias Impressas',
                                    link: '/srds/second-edition/print-copies/'
                                },
                                {
                                    label: 'Arquivos Digitais',
                                    link: '/srds/second-edition/game-files/'
                                },
                                {
                                    label: 'Sobre essa Tradução',
                                    link: '/srds/second-edition/about/'
                                }
                            ]
                        },
                        {
                            label: 'Edição Barebones',
                            link: '/srds/barebones-edition/'
                        }
                    ]
                },
                {
                    label: 'Materiais',
                    collapsed: true,
                    items: [
                        {
                            label: 'Visão Geral',
                            link: '/resources/'
                        },
                        {
                            label: 'Conversões',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Visão Geral',
                                    link: '/resources/conversoes/'
                                },
                                {
                                    label: 'A Torre do Céu Oculto',
                                    link: '/resources/conversoes/a-torre-do-ceu-oculto/'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Aplicativo Oficial',
                    link: '/official-app/'
                }
            ],
        }),
    ],
});
