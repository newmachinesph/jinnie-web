import Link from 'next/link';
import Image from 'next/image';
import { AppIcon } from '@/components/AppIcon';
import { AppTile } from '@/components/AppTile';
import { Container } from '@/components/Page';
import { PhoneFrame } from '@/components/PhoneFrame';
import { communityApps, coreApps } from '@/lib/apps';
import { site } from '@/lib/site';

const questions = [
  ['Does Jinnie connect to my bank?', 'You enter your accounts and transactions yourself. Jinnie does not ask for bank credentials, pull live balances, or move money. Recording a bill payment keeps your records up to date; you still pay through your bank or provider.'],
  ['What works offline?', 'Download the app and open the mini apps you need while connected. Their cached screens and your saved financial records can then work offline. Visit Learn and save its audio or video packs before going offline. New apps, updates, and uncached media need a connection.'],
  ['Where is my information saved?', 'Financial records stay in this app on this phone. Browser Learn progress stays in that browser; Learn inside Jinnie uses the app’s local storage. There is no automatic sync between devices. Export a backup before changing phones or clearing data.'],
  ['Can I protect my records?', 'Security lets you hide financial figures, set a PIN, enable biometrics where supported, and export a backup sealed with a passphrase. Keep that passphrase somewhere safe: there is no account-based recovery.'],
  ['Can I try it before adding my own money?', 'Yes. Settings can load the Reyes sample household, with accounts, bills, budgets, and history. Sample records are labeled and can be removed separately from your own. The screenshots on this page use that sample profile.'],
  ['How do I get the app?', 'Download the Android pre-release APK directly from our Download page. Jinnie is coming soon to Google Play. Learn is also available in your browser.'],
];

export default function HomePage() {
  return <>
    <section className="product-hero"><Container className="product-hero-grid">
      <div><p className="product-eyebrow"><span /> MADE FOR EVERYDAY MONEY</p><h1>Your money.<br />Your plans.<br /><em>In one place.</em></h1>
        <p className="product-lede">From payday to the next big goal. Keep track of your accounts, spending, bills, and shared expenses—then build the confidence to make your next move.</p>
        <div className="product-actions"><Link className="product-button" href="/download">Get Jinnie <AppIcon name="arrowRight" size={18} /></Link><Link className="product-link" href="#inside">Take a look inside <span aria-hidden="true">↓</span></Link></div>
        <p className="product-availability">Android pre-release · Learn in your browser · No sign-up</p>
        <div className="product-promises"><span><AppIcon name="offline" size={17} /> Offline after setup</span><span><AppIcon name="shield" size={17} /> Records stay on your device</span></div>
      </div>
      <div className="product-hero-stage"><div className="product-stage-label">THE ACTUAL APP / ANDROID</div><div className="product-hero-phones"><PhoneFrame screen="home" width={268} priority /><PhoneFrame screen="wallet" width={244} /></div><p className="product-stage-note">A little clarity goes a long way.<br /><span>Real screens. Reyes sample household.</span></p></div>
    </Container></section>
    <div className="product-strip"><Container><span>Built around life in the Philippines</span><span>Pesos + foreign currencies</span><span>English + Filipino learning</span></Container></div>
    <section id="inside" className="product-section"><Container>
      <div className="product-section-heading"><div><p className="product-eyebrow">A CLEARER PICTURE</p><h2>Less keeping track.<br />More knowing where you stand.</h2></div><p>Accounts show what you have. Wallet shows what changed. Bills help you remember what comes next. Your records work together.</p></div>
      <div className="product-screen-gallery">{[
        ['accounts','ACCOUNTS','Every balance, together.','Banks, cash, e-wallets, and credit cards. Keep each currency and set your own peso conversion rate.'],
        ['wallet','WALLET','Give every peso a place.','Record income, expenses, and transfers. Review your activity and correct an entry whenever you need.'],
        ['bills','BILLS','Know what’s coming up.','Track monthly dues. Mark a payment and update your Wallet and selected account in the same step.'],
      ].map(([id,label,title,copy])=><article key={id}><div className="product-screen-copy"><span>{label}</span><h3>{title}</h3><p>{copy}</p></div><PhoneFrame screen={id} width={250}/><Link href={`/apps/${id}`}>Explore {label.charAt(0)+label.slice(1).toLowerCase()} <AppIcon name="arrowRight" size={16}/></Link></article>)}</div>
      <p className="product-evidence-note">Captured on an Android phone with sample data. Jinnie records your payments; it does not send money or pay providers.</p>
    </Container></section>
    <section className="product-connected product-section"><Container className="product-connected-grid"><div><p className="product-eyebrow">ONE PAYMENT. CONNECTED RECORDS.</p><h2>Paid the bill?<br />Record it once.</h2><p className="product-lede">Choose the account you used and mark the bill paid. Jinnie keeps the record connected, so your next look at Home makes sense.</p><Link className="product-link" href="/how-it-works">See how Jinnie works <AppIcon name="arrowRight" size={18}/></Link></div>
      <ol className="product-record-flow">{[['Bills','Mark this month paid','The bill keeps its payment status and period.'],['Wallet','See the expense','One linked entry records the payment in your history.'],['Accounts','See the new balance','The selected account and your Home total update.']].map(([title,heading,copy],i)=><li key={title}><span className="product-flow-number">{i+1}</span><div><p>{title}</p><h3>{heading}</h3><span>{copy}</span></div><AppIcon name="check" size={20}/></li>)}</ol>
    </Container></section>
    <section className="product-section"><Container><div className="product-section-heading"><div><p className="product-eyebrow">ROOM FOR YOUR WHOLE FINANCIAL LIFE</p><h2>Start with what you need.<br />There’s room to grow.</h2></div><p>{coreApps.length + communityApps.length} mini apps in one launcher, plus Settings. Everyday finance, financial learning, and tools for money you manage with other people.</p></div>
      <h3 className="product-group-label">Your daily toolkit</h3><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{coreApps.map(app=><AppTile key={app.id} app={app}/>)}</div><h3 className="product-group-label">Goals, family, and shared plans</h3><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{communityApps.map(app=><AppTile key={app.id} app={app}/>)}</div>
    </Container></section>
    <section className="product-learn"><Container className="product-learn-grid"><div className="product-learn-art"><Image src="/learn-assets/characters/jinnie.png" width={480} height={480} alt="Jinnie, the girl-genie who guides your learning"/><span>SMALL LESSONS. REAL-LIFE CONFIDENCE.</span></div><div><p className="product-eyebrow">MEET YOUR MONEY GUIDE</p><h2>You don’t have to<br />figure it all out alone.</h2><p className="product-lede">Learn with Jinnie, from your first allowance to retirement planning. Find a path for your stage of life, try a money decision, and understand the why behind it.</p><ul className="product-learn-list"><li>48 lessons across six learning paths</li><li>English and Filipino, with narration and captioned videos</li><li>Scam practice, a glossary, savings wishes, and daily commitments</li><li>Local progress, learning backups, and completion certificates</li></ul><div className="product-actions"><Link className="product-button" href={site.learnUrl}>Try Learn now <AppIcon name="arrowRight" size={18}/></Link><Link className="product-link" href="/apps/learn">Explore the lessons</Link></div></div></Container></section>
    <section className="product-privacy product-section"><Container className="product-privacy-grid"><div><p className="product-eyebrow">PERSONAL MEANS PERSONAL</p><h2>Your phone.<br />Your records.<br />Your control.</h2><p>No Jinnie account to create. No automatic upload of your financial records. You choose when to export, where to keep a backup, and what to show on screen.</p><Link href="/security" className="product-link">Read about security <AppIcon name="arrowRight" size={18}/></Link></div><div className="product-privacy-points">{[['eye','Hide amounts in public','One privacy switch masks financial figures across your money apps.'],['shield','Put a lock on it','Set a PIN and use your fingerprint or face as a shortcut where supported.'],['download','Keep a backup you own','Export a plain JSON backup or seal it with a passphrase. Restore it when you need to.'],['offline','Plan beyond the signal','Saved records stay available offline. Download your mini apps and Learn media before you go.']].map(([icon,title,copy])=><article key={title}><AppIcon name={icon} size={24}/><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></Container></section>
    <section className="product-section"><Container className="product-faq-grid"><div><p className="product-eyebrow">BEFORE YOU START</p><h2>A few good<br />questions.</h2><Link href="/support" className="product-link">More help <AppIcon name="arrowRight" size={18}/></Link></div><div>{questions.map(([q,a])=><details className="product-faq" key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></Container></section>
    <section className="product-final"><Container><div><p className="product-eyebrow">WEALTH, IN ORDER.</p><h2>Make room for<br />your next chapter.</h2><p>Start with one account, one record, or one lesson.</p><div className="product-actions"><Link href="/download" className="product-button">Get the app <AppIcon name="arrowRight" size={18}/></Link><Link href={site.learnUrl} className="product-link">Start with Learn</Link></div></div><PhoneFrame screen="launcher" width={240}/></Container></section>
  </>;
}
