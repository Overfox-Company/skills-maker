import { useState } from 'react'
import './App.css'

const steps = ['Define', 'Configure', 'Publish']

function App() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Skills Maker home"><span className="brand-mark">✦</span><span>skills<span className="brand-accent">.maker</span></span></a>
        <div className="nav-links"><a href="#workspace">Workspace</a><a href="#docs">Docs</a><button className="avatar" type="button" aria-label="Open profile">OM</button></div>
      </nav>
      <section className="hero" id="workspace">
        <div className="eyebrow"><span className="status-dot" /> Skill builder</div>
        <h1>Turn your expertise<br /><em>into a skill.</em></h1>
        <p className="hero-copy">Create focused, reusable skills that give your AI workflow a sharper point of view.</p>
        <div className="workspace-card">
          <div className="card-heading"><div><p className="card-kicker">New skill</p><h2>Start with a clear intention</h2></div><span className="step-count">0{activeStep + 1} / 03</span></div>
          <div className="stepper" aria-label="Skill creation progress">
            {steps.map((step, index) => <button className={`step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'complete' : ''}`} key={step} type="button" onClick={() => setActiveStep(index)}><span className="step-number">{index < activeStep ? '✓' : index + 1}</span>{step}</button>)}
          </div>
          <div className="prompt-box"><label htmlFor="skill-intention">What should this skill help with?</label><textarea id="skill-intention" placeholder="e.g. Help me write concise product launch notes..." /><div className="prompt-footer"><span>Be specific. You can refine this later.</span><span>⌘ ↵</span></div></div>
          <div className="card-actions"><button className="text-button" type="button">Save draft</button><button className="primary-button" type="button" onClick={() => setActiveStep(Math.min(activeStep + 1, steps.length - 1))}>{activeStep === steps.length - 1 ? 'Finish skill' : 'Continue'} <span>→</span></button></div>
        </div>
      </section>
      <section className="feature-row" id="docs">
        <div><span className="feature-icon">◎</span><h3>Focused by design</h3><p>One skill, one clear outcome.</p></div>
        <div><span className="feature-icon">⌁</span><h3>Built to evolve</h3><p>Shape it as your workflow grows.</p></div>
        <div><span className="feature-icon">↗</span><h3>Ready to share</h3><p>Publish when the idea is ready.</p></div>
      </section>
      <footer><span>Skills Maker</span><span>Build better conversations.</span></footer>
    </main>
  )
}

export default App
