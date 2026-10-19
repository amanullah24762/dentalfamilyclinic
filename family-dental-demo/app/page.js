'use client';

import { useEffect, useRef, useState } from 'react';

const MAP = 'https://maps.app.goo.gl/P7CC4EacYpLexbNC8';
const PHONE = 'tel:+923203771995';
const ADDRESS = 'Allama Iqbal Road, opposite City Book Depot, above National Bank of Pakistan, New Mirpur City, AJK, Pakistan.';
// Editable demonstration categories; the clinic must confirm availability.
const treatments = [
  ['General Dental Check-ups', 'A conversation about your oral health and the questions on your mind.', 'tooth'],
  ['Teeth Cleaning and Scaling', 'Ask about professional cleaning and everyday care for your smile.', 'spark'],
  ['Tooth Fillings', 'Discuss options for looking after a tooth affected by decay or damage.', 'tooth'],
  ['Root Canal Treatment', 'Understand whether root canal care may be appropriate for your needs.', 'plus'],
  ['Gum Care', 'Talk through gum concerns and ways to support your oral hygiene.', 'leaf'],
  ["Children’s Dental Care", 'Explore a thoughtful introduction to dental visits for little smiles.', 'heart'],
  ['Cosmetic Dentistry', 'A starting point for discussing the changes you would like to explore.', 'spark'],
  ['Dental Consultation', 'Space to ask questions and understand possible next steps.', 'chat'],
];
const photos = {
  hero: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1200',
  room: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1000',
  care: 'https://images.pexels.com/photos/3845706/pexels-photo-3845706.jpeg?auto=compress&cs=tinysrgb&w=900',
  visit: 'https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=900',
};

function Icon({ name = 'tooth', className = '' }) {
  const paths = {
    tooth: <path d="M12 5C8 2 3 4 4 10c.5 3 2 10 4 10 2 0 1-7 4-7s2 7 4 7c2 0 3.5-7 4-10 1-6-4-8-8-5Zm0 0 3 1" />,
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    heart: <path d="m12 20-8-8C-2 5 7 0 12 7c5-7 14-2 8 5Z" />,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /><path d="M20 2v4m-2-2h4" /></>,
    plus: <><rect x="4" y="4" width="16" height="16" rx="5" /><path d="M12 8v8m-4-4h8" /></>,
    leaf: <><path d="M20 4C6 2 2 9 6 16s16 3 14-12Z" /><path d="m4 21 11-12" /></>,
    chat: <><path d="M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 18 0Z" /><path d="M7 10h8m-8 4h5" /></>,
    phone: <path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3-2 4C10 22 2 14 3 5Z" />,
  };
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.tooth}</svg>;
}

function Brand() {
  return <a className="brand" href="#home" aria-label="Family Dental Clinic home"><span className="brand-icon"><Icon /></span><span>family dental<span className="brand-sub">CLINIC · MIRPUR</span></span></a>;
}

function Photo({ src, alt, className = '', priority = false }) {
  const [failed, setFailed] = useState(false);
  return <div className={`photo ${className}`}>
    {failed ? <div className="photo-fallback"><Icon /><span>Care begins with a conversation.</span><small>Concept photograph unavailable</small></div> : <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailed(true)} />}
  </div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [topic, setTopic] = useState('Dental Consultation');
  const dialog = useRef(null);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    const nodes = document.querySelectorAll('[data-reveal], .treatment, .steps article, .gallery figure, .trust-item');
    nodes.forEach(node => { node.classList.add('reveal-ready'); observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  function inquire(value = 'Dental Consultation') { setTopic(value); setMenu(false); dialog.current?.showModal(); }
  const links = [['Home', 'home'], ['About', 'about'], ['Treatments', 'treatments'], ['Patient Care', 'patient-care'], ['Contact', 'contact']];
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="topbar"><span>A little care. A lot to smile about.</span><a href={PHONE}>Mirpur, AJK <span className="top-divider">/</span> +92 320 3771995</a></div>
    <header className="header"><div className="reading-progress" aria-hidden="true" />
      <div className="nav-wrap"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><button className="button nav-cta" onClick={() => inquire()}>Book an Appointment <Icon name="arrow" /></button><button ref={menuButton} className={`menu-button ${menu ? 'is-open' : ''}`} aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu(!menu)}><span /><span /></button></div>
      <div className={`mobile-menu ${menu ? 'open' : ''}`} inert={!menu ? true : undefined} onKeyDown={event => { if (event.key === 'Escape') { setMenu(false); menuButton.current?.focus(); } }}><nav id="mobile-nav" aria-label="Mobile navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}<Icon name="arrow" /></a>)}<button className="button" onClick={() => inquire()}>Book an Appointment</button></nav></div>
    </header>
    <main id="main">
      <section id="home" className="hero container">
        <div className="hero-copy"><p className="eyebrow"><span className="dot" /> Family dental care in Mirpur</p><h1>Healthy Smiles.<br /><em>Happier</em><br />Families<span className="mint-period">.</span></h1><p className="intro">A welcoming place for every generation. Thoughtful dental care starts with feeling heard, understood, and at ease.</p><div className="hero-actions"><button className="button" onClick={() => inquire()}>Request an Appointment <Icon name="arrow" /></button><a className="text-link" href="#treatments">Explore Our Treatments <span>↗</span></a></div><a className="location-link" href={MAP} target="_blank" rel="noreferrer"><Icon name="pin" /><span>Allama Iqbal Road, Mirpur, AJK</span><span>↗</span></a></div>
        <div className="hero-art"><div className="orbit" aria-hidden="true" /><Photo src={photos.hero} alt="Stock concept of a dentist caring for a patient" className="hero-photo" priority /><div className="image-tag"><span className="tiny-star">✳</span> A comfortable start<br />to a healthier smile.</div><div className="care-badge"><span className="badge-icon"><Icon name="heart" /></span><div>Little smiles.<br /><strong>Lifelong care.</strong></div></div><p className="image-caption">VISUAL CONCEPT · STOCK PHOTOGRAPHY</p><span className="vertical-note" aria-hidden="true">CARE THAT FEELS PERSONAL</span></div>
      </section>
      <section className="trust-band" aria-label="Our care concept"><div className="container trust-grid">{[['heart', 'For the whole family', 'Every age. Every kind of smile.'], ['spark', 'A welcoming setting', 'A fresh, thoughtful care concept.'], ['chat', 'Clarity at every step', 'Questions deserve clear answers.'], ['leaf', 'Your comfort matters', 'A little reassurance goes a long way.']].map(([icon, title, text]) => <div className="trust-item" key={title}><Icon name={icon} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
      <section id="treatments" className="section container" data-reveal><div className="section-heading"><div><p className="eyebrow">A little attention. A lasting difference.</p><h2>Care for every<br /><em>kind of smile.</em></h2></div><div className="section-aside"><p>From everyday questions to your next steps, explore a more considered approach to dental care.</p><p className="disclaimer">Illustrative treatment categories. Please contact the clinic to confirm availability and suitability.</p></div></div><div className="treatment-grid">{treatments.map(([title, description, icon], i) => <article className="treatment" key={title}><div className="treatment-top"><span className="treatment-icon"><Icon name={icon} /></span><span className="index">0{i + 1}</span></div><h3>{title}</h3><p>{description}</p><button className="card-link" onClick={() => inquire(title)} aria-label={`Ask about ${title}`}>Ask About This Treatment <Icon name="arrow" /></button></article>)}</div></section>
      <section id="about" className="about-section"><div className="container about-grid" data-reveal><div className="about-art"><Photo src={photos.room} alt="Stock concept of a bright dental practice" className="about-photo" /><div className="about-stamp"><Icon name="tooth" /><span>Thoughtful care.<br /><em>Human connection.</em></span></div><p className="image-caption">PRACTICE IMAGERY FOR CONCEPT PURPOSES</p></div><div className="about-copy"><p className="eyebrow">The heart of the experience</p><h2>Care That Puts<br />Your <em>Family First.</em></h2><p className="large-copy">A dental visit should begin with a conversation, not a feeling of uncertainty.</p><p>Our proposed care philosophy puts respectful communication, patient comfort, and family needs at the centre of the experience. There is room to ask questions, share concerns, and understand what comes next.</p><div className="about-points"><span><Icon name="heart" /> A thoughtful welcome for adults and children</span><span><Icon name="chat" /> Clear conversations about your dental needs</span></div><a className="text-link" href="#patient-care">Discover the patient experience <span>↗</span></a><p className="disclaimer">Demo editorial copy — the clinic’s own story and care philosophy can be added after review.</p></div></div></section>
      <section id="patient-care" className="section container" data-reveal><div className="center-heading"><p className="eyebrow">Simple steps. A thoughtful experience.</p><h2>Feel at ease.<br /><em>From the very first hello.</em></h2></div><div className="steps">{[['Request Your Visit', 'Get in touch with the clinic to discuss a suitable time for your visit.'], ['Discuss Your Dental Needs', 'Share your questions, concerns, and what you would like help with.'], ['Explore Your Treatment Options', 'Discuss possible next steps and make space for an informed conversation.']].map(([title, text], i) => <article key={title}><div className="step-number">0{i + 1}<span /></div><h3>{title}</h3><p>{text}</p></article>)}</div><p className="steps-note">This is a website concept. Appointment inquiries here are illustrative and are not connected to a live booking system.</p></section>
      <section className="gallery-section"><div className="container" data-reveal><div className="section-heading"><div><p className="eyebrow">A glimpse of the feeling</p><h2>More comfort.<br /><em>More reasons to smile.</em></h2></div><p className="section-aside">Light-filled spaces. Attentive conversations. A visual direction built around feeling welcome.</p></div><div className="gallery"><figure><Photo src={photos.room} alt="Stock dental interior used as a design reference" /><figcaption><span>01</span> A welcoming space</figcaption></figure><figure><Photo src={photos.care} alt="Stock dental care scene used as a design reference" /><figcaption><span>02</span> Care in the details</figcaption></figure><figure><Photo src={photos.visit} alt="Stock patient visit used as a design reference" /><figcaption><span>03</span> Time for your smile</figcaption></figure></div><p className="disclaimer">Visual concept gallery. All images are stock photographs, not photographs of Family Dental Clinic or its patients. Replace with approved clinic photography.</p></div></section>
      <section className="container appointment-section" id="appointment" data-reveal><div className="appointment-panel"><div className="appointment-decoration" aria-hidden="true"><Icon /></div><p className="eyebrow">Let’s start with a conversation</p><h2>Your Next Smile<br /><em>Starts Here.</em></h2><p>Have a question or ready to arrange a visit?<br />Contact the clinic and take the next step at your own pace.</p><div className="appointment-actions"><button className="button button-light" onClick={() => inquire()}>Request an Appointment <Icon name="arrow" /></button><a className="call-link" href={PHONE}><Icon name="phone" /> +92 320 3771995</a></div><a className="directions-link" href={MAP} target="_blank" rel="noreferrer">Find your way to the clinic ↗</a><small>Demo inquiry only. Please call the clinic to arrange an actual appointment.</small></div></section>
      <section id="contact" className="container contact-section" data-reveal><div><p className="eyebrow">A familiar place, close to home</p><h2>Find us<br /><em>in Mirpur.</em></h2><p className="contact-intro">Your next conversation is just a call away.</p></div><div className="contact-card"><div className="contact-row"><span className="contact-icon"><Icon name="pin" /></span><div><h3>Family Dental Clinic Mirpur</h3><address>{ADDRESS}</address><a className="text-link" href={MAP} target="_blank" rel="noreferrer">Get Directions <span>↗</span></a></div></div><div className="contact-row"><span className="contact-icon"><Icon name="phone" /></span><div><p className="eyebrow">Call the clinic</p><a className="phone-number" href={PHONE}>+92 320 3771995</a><p className="disclaimer">Please call to confirm opening hours and appointment arrangements.</p></div></div></div></section>
    </main>
    <footer><div className="container footer-main"><div><Brand /><p>Thoughtful care.<br />For the smiles that matter most.</p></div><div><h3>Explore</h3>{links.slice(1).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div className="footer-contact"><h3>Come say hello</h3><p>{ADDRESS}</p><a href={PHONE}>+92 320 3771995</a><a href={MAP} target="_blank" rel="noreferrer">Google Maps directions ↗</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Family Dental Clinic Mirpur.</span><span>Independent website demo · Not an official clinic website</span><a href="#home">Back to top ↑</a></div></footer>
    <dialog ref={dialog} className="inquiry-dialog" aria-labelledby="inquiry-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><div className="dialog-content"><button className="dialog-close" aria-label="Close appointment inquiry" onClick={() => dialog.current?.close()}>×</button><span className="treatment-icon"><Icon name="chat" /></span><p className="eyebrow">A first step, at your pace</p><h2 id="inquiry-title">Let’s talk about<br /><em>your smile.</em></h2><p className="topic-label">Interested in: <strong>{topic}</strong></p><p>This is a demonstration inquiry. No request has been sent and no appointment has been booked. Please call Family Dental Clinic to ask about this treatment or arrange a visit.</p><a className="button" href={PHONE}><Icon name="phone" /> Call +92 320 3771995</a><a className="text-link" href={MAP} target="_blank" rel="noreferrer">View clinic directions <span>↗</span></a></div></dialog>
  </>;
}
