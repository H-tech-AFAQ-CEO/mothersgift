'use client'

import { useState } from 'react'

const packages = [
  {
    name: 'The First Week',
    price: '$68',
    note: 'A gentle beginning',
    detail: 'A considered box of the essentials for the first seven days home.',
    items: ['Cooling eye mask', 'Nourishing body oil', 'A handwritten note'],
    featured: false,
  },
  {
    name: 'The Full Reset',
    price: '$118',
    note: 'Most loved',
    detail: 'Our most complete offering for rest, restoration, and feeling held.',
    items: ['Everything in First Week', 'Restorative bath soak', '30-day care plan'],
    featured: true,
  },
  {
    name: 'A Little Extra',
    price: '$36',
    note: 'Add it on',
    detail: 'A small, meaningful addition to make the moment feel more personal.',
    items: ['Ceramic keepsake cup', 'Herbal tea blend', 'A note from you'],
    featured: false,
  },
]

function PackageCard({ packageItem, selected, onSelect }: { packageItem: typeof packages[number]; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`package-card ${packageItem.featured ? 'package-card-featured' : ''} ${selected ? 'package-card-selected' : ''}`}
    >
      <div className="package-card-top">
        <span className="eyebrow">{packageItem.note}</span>
        <span className="package-price">{packageItem.price}</span>
      </div>
      <h3>{packageItem.name}</h3>
      <p>{packageItem.detail}</p>
      <div className="package-items">
        {packageItem.items.map((item) => <span key={item}>{item}</span>)}
      </div>
      <span className="select-package">{selected ? 'Selected' : 'Choose this gift'} <span aria-hidden="true">↗</span></span>
    </button>
  )
}

function GiftFlow() {
  const [step, setStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState('The Full Reset')
  const [occasion, setOccasion] = useState('New arrival')

  const next = () => setStep((current) => Math.min(current + 1, 3))

  return (
    <section className="flow-section" id="gift">
      <div className="section-kicker"><span>03</span><span>Make it personal</span></div>
      <div className="flow-heading">
        <div>
          <p className="eyebrow">A gift that keeps showing up</p>
          <h2>Start with care.<br /><em>We&apos;ll handle the rest.</em></h2>
        </div>
        <p className="flow-intro">A simple way to send something genuinely useful, quietly beautiful, and made for the days that follow.</p>
      </div>

      <div className="flow-shell">
        <div className="flow-progress">
          {['Choose a package', 'Add their details', 'We send it'].map((label, index) => (
            <div className={`flow-step ${step >= index + 1 ? 'is-active' : ''}`} key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span><small>{label}</small>
            </div>
          ))}
        </div>
        <div className="flow-content">
          {step === 1 && <div className="flow-panel">
            <div className="panel-copy"><span className="eyebrow">Step one</span><h3>What feels right?</h3><p>Every package is designed around the real rhythms of early recovery.</p></div>
            <div className="flow-options">{packages.map((item) => <PackageCard key={item.name} packageItem={item} selected={selectedPackage === item.name} onSelect={() => setSelectedPackage(item.name)} />)}</div>
            <button className="dark-button flow-button" onClick={next}>Continue with {selectedPackage} <span>→</span></button>
          </div>}
          {step === 2 && <div className="flow-panel form-panel">
            <div className="panel-copy"><span className="eyebrow">Step two</span><h3>A few thoughtful details.</h3><p>We&apos;ll use these to make the gift feel like it came from you.</p></div>
            <div className="form-grid"><label>Who is it for?<input placeholder="Their name" /></label><label>What&apos;s the occasion?<select value={occasion} onChange={(event) => setOccasion(event.target.value)}><option>New arrival</option><option>Just because</option><option>Thinking of you</option></select></label><label className="wide">Add a note <textarea placeholder="A few words from you..." rows={3} /></label></div>
            <div className="form-actions"><button className="text-button" onClick={() => setStep(1)}>← Back</button><button className="dark-button flow-button" onClick={next}>Review your gift <span>→</span></button></div>
          </div>}
          {step === 3 && <div className="flow-panel confirmation-panel"><div className="confirmation-mark">✦</div><span className="eyebrow">You&apos;re doing a lovely thing</span><h3>Your {selectedPackage} gift is ready.</h3><p>We&apos;ll send a confirmation with all the details. Thank you for showing up for someone in a meaningful way.</p><button className="dark-button flow-button" onClick={() => setStep(1)}>Start another gift <span>↗</span></button></div>}
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <nav className="site-nav"><a className="wordmark" href="#top">morrow<span>·</span></a><div className="nav-links"><a href="#why">Why morrow</a><a href="#guide">The First Week</a><a href="#gift">Gift care</a></div><a className="nav-cta" href="#gift">Send a gift <span>↗</span></a></nav>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Care, made visible</p><h1>For the ones<br /><em>who held you.</em></h1><p className="hero-sub">Postpartum care, thoughtfully gathered and gently delivered. Because the person who made the beginning possible deserves a beginning of their own.</p><a className="dark-button" href="#gift">Give them morrow <span>→</span></a><p className="hero-note"><span className="tiny-star">✦</span> Designed with midwives, doulas &amp; new parents</p></div><div className="hero-art" aria-label="A still life of a care box, linen, and botanical sprigs" role="img"><div className="sun-disc" /><div className="hero-label">a softer<br /><em>way forward</em></div><div className="care-box"><div className="box-lid">morrow</div><div className="box-front"><span>care for the<br />days after</span><i>✦</i></div></div><div className="botanical botanical-one" /><div className="botanical botanical-two" /><div className="hero-caption">01 / A considered start</div></div></section>
      <div className="marquee"><span>Rest is productive</span><i>✦</i><span>Care is a practice</span><i>✦</i><span>Small things matter</span><i>✦</i><span>Rest is productive</span></div>
      <section className="manifesto" id="why"><div className="section-kicker"><span>01</span><span>The why</span></div><div className="manifesto-grid"><h2>The fourth trimester<br />is a <em>new beginning.</em></h2><div className="manifesto-copy"><p>We prepare endlessly for the arrival of a baby. But what about the person who made it all possible?</p><p>Morrow is a reminder that care shouldn&apos;t stop at the threshold of birth. Our boxes make room for rest, restoration, and the quiet reassurance of being looked after.</p><a className="underlined-link" href="#guide">Read our approach <span>↗</span></a></div></div></section>
      <section className="guide-section" id="guide"><div className="section-kicker"><span>02</span><span>The guide</span></div><div className="guide-grid"><div className="guide-image"><div className="guide-number">01</div><div className="guide-bowl"><span>rest</span></div><div className="guide-caption">A note for the first week</div></div><div className="guide-copy"><p className="eyebrow">The First Week</p><h2>There is no<br /><em>right way.</em></h2><p className="large-copy">Just the next kind thing. We made this guide for the in-between moments: the three a.m. wake-up, the cold cup of tea, the unexpected wave of feeling.</p><div className="guide-list"><div><span>01</span><p>Let the days be slow</p></div><div><span>02</span><p>Accept the soft landing</p></div><div><span>03</span><p>Ask for what you need</p></div></div><a className="dark-button" href="#gift">Read the guide <span>→</span></a></div></div></section>
      <GiftFlow />
      <footer className="site-footer"><div className="footer-mark">morrow<span>·</span></div><p>Care for the beginning<br />and everything after.</p><div className="footer-links"><a href="#why">Instagram</a><a href="#guide">Our story</a><a href="#gift">Contact</a></div><small>© 2026 morrow care co.</small></footer>
    </main>
  )
}
