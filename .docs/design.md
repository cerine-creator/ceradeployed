# Design — Cera

Style: classy, épuré, restraint. Fond sombre premium (#0a0a0b), texte blanc cassé,
accent unique vert émeraude (#10b981-ish, proche du logo) utilisé avec parcimonie
(CTA, liens hover, chiffres clés). Typo: Poppins (titres, 700/800) + Inter (corps).
Sections alternent noir profond / blanc cassé (#f7f7f8) pour rythme. Glow radial
subtil vert/émeraude en hero uniquement (pas violet/magenta — trop chargé pour
"classy"). Animations: fade+translate au scroll (IntersectionObserver via CSS+JS
léger), hover lift sur cards, marquee lent pour logos clients, smooth-scroll ancres.
Pas d'intro overlay plein écran (trop lourd) — header sticky sobre direct.
