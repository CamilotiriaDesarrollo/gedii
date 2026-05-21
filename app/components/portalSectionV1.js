'use client'
import { useState } from 'react'
import { cards, perfilCards, perfiles } from '@/data/plataformas'

const tiraItems = [
  { nombre: 'SoyCultura', url: 'https://soycultura.mincultura.gov.co',    logo: '/logos/logo_soycultura.svg', descripcion: 'Registro Nacional de Agentes Culturales' },
  { nombre: 'Estímulos',  url: 'https://convocatorias.mincultura.gov.co',  logo: '/logos/logo_estimulos.svg',  descripcion: 'Becas, premios y residencias artísticas' },
  { nombre: 'SIPA',       url: 'https://sipapublico.mincultura.gov.co/',   logo: '/logos/logo_sipa.svg',       descripcion: 'Sistema de información de patrimonio y memoria' },
  { nombre: 'SIA',        url: 'https://siartes.mincultura.gov.co',        logo: '/logos/logo_sia.svg',        descripcion: 'Sistema de información para las artes' },
  { nombre: 'SINIC',      url: 'http://sinic.gov.co',                      logo: '/logos/logo_sinic.svg',      descripcion: 'Sistema nacional de información cultural' },
]

const cardColor = {
  explorar:   { bg: '#1E1A4A', accent: '#C4B8FF' },
  participar: { bg: '#2D2380', accent: '#A5B4FC' },
  tramites:   { bg: '#3730A3', accent: '#DDD6FE' },
  investigar: { bg: '#4C1D95', accent: '#D4BBFF' },
  difundir:   { bg: '#6D28D9', accent: '#EDE9FE' },
}

const cardTint = {
  explorar:   { tint: '#F3F1FF', accent: '#4C3DC9' },
  participar: { tint: '#EAE6FD', accent: '#4338CA' },
  tramites:   { tint: '#E2DBFB', accent: '#3730A3' },
  investigar: { tint: '#DAD3FA', accent: '#4C1D95' },
  difundir:   { tint: '#D1C8F8', accent: '#5B21B6' },
}

const verbos = {
  explorar:   'Explora',
  participar: 'Participa',
  tramites:   'Gestiona',
  investigar: 'Investiga',
  difundir:   'Difunde',
}

function FlipCard({ card, index, forceFlip, dimmed }) {
  const { bg, accent } = cardColor[card.id]
  const { tint, accent: frontAccent } = cardTint[card.id]
  const visibles = card.plataformas.filter(p => p.estado !== 'caido')
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className={[
        'v1-flip',
        forceFlip ? 'v1-flip--activa' : '',
        dimmed    ? 'v1-flip--inactiva' : '',
      ].filter(Boolean).join(' ')}
      style={{ '--v1-tint': tint, '--v1-accent': frontAccent }}
    >
      <div className="v1-flip__inner">

        {/* Frente */}
        <div className="v1-flip__front">
          <div className="v1-flip__front-top">
            <hr className="v1-flip__rule" />
            <span className="v1-flip__label">{card.titulo}</span>
          </div>

          <div className="v1-flip__display">
            <span className="v1-flip__verbo">{verbos[card.id]}</span>
          </div>

          <div className="v1-flip__front-bottom">
            <hr className="v1-flip__rule" />
            <p className="v1-flip__necesidad">&ldquo;{card.necesidad}&rdquo;</p>
            <div className="v1-flip__front-foot">
              <span className="v1-flip__num">{num}</span>
              <span className="v1-flip__hint">ver plataformas →</span>
              <div className="v1-flip__plus">+</div>
            </div>
          </div>
        </div>

        {/* Reverso */}
        <div className="v1-flip__back" style={{ background: bg }}>
          <h3 className="v1-flip__back-titulo">{card.titulo}</h3>

          <ul className="v1-flip__back-lista">
            {visibles.map(p => (
              <li key={p.nombre}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: accent }}
                  className={p.estado !== 'operativa' ? 'v1-flip__back-link--dim' : ''}
                >
                  <span className="v1-flip__back-nombre">{p.nombre}</span>
                  {p.descripcion && (
                    <span className="v1-flip__back-desc">{p.descripcion}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default function PortalSectionV1() {
  const [perfil, setPerfil] = useState(null)
  const activas = perfil ? new Set(perfilCards[perfil]) : null

  return (
    <section className="portal-v1">
      <div className="portal-v1__inner">

        <div className="boceto-header">
          <span className="boceto-header__tag">Sistemas de información cultural</span>
          <h2 className="boceto-header__titulo">
            Descubre la <em>Cultura</em>
          </h2>
          <p className="boceto-header__sub">
            La información cultural de Colombia en un solo lugar.
          </p>
        </div>

        <div className="portal-v1__grid">
          {cards.map((card, i) => (
            <FlipCard
              key={card.id}
              card={card}
              index={i}
              forceFlip={activas ? activas.has(card.id) : false}
              dimmed={activas ? !activas.has(card.id) : false}
            />
          ))}
        </div>

        <div className="eres-un">
          <span className="eres-un__label">Eres un</span>
          {perfiles.map(p => (
            <button
              key={p.id}
              className={`eres-un__opcion${perfil === p.id ? ' eres-un__opcion--activo' : ''}`}
              onClick={() => setPerfil(prev => prev === p.id ? null : p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="tira-footer">
          <p className="tira-footer__label">Principales sistemas de información</p>
          <div className="tira-plataformas">
            {tiraItems.map(item => (
              <a
                key={item.nombre}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tira-item"
              >
                <img src={item.logo} alt={item.nombre} className="tira-item__logo" />
                <span className="tira-item__desc">{item.descripcion}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
