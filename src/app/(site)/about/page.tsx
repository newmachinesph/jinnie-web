import type { Metadata } from 'next';
import { Mark } from '@/components/Mark';
import { Container, PageHeader, Prose } from '@/components/Page';

export const metadata: Metadata = {
  title: 'About',
  description: 'What Jinnie is for, what the mark means, and how the product speaks.',
  alternates: { canonical: '/about' },
};

const palette = [
  ['Primary', '#4338CA', 'Actions, links, brand'],
  ['Deep', '#312E81', 'Headings, pressed states'],
  ['Lamp gold', '#A16207', 'Highlights and warnings only'],
  ['Night', '#1E1B4B', 'Net-worth card, budget plan, splash'],
  ['Money in', '#047857', 'Never decorative'],
  ['Money out', '#B91C1C', 'Never decorative'],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Financial clarity that does not need a signal."
        lede="Jinnie keeps the whole picture on the device, from payroll account to paluwagan round, and shows the one number worth checking at the top of Home."
      />

      <Container className="grid gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <Prose>
          <h2>The mark</h2>
          <p>
            A genie lamp carrying 金, jīn: gold, wealth. The lamp is the promise; the character is what it holds.
            It is drawn, not typeset. The character is rendered as strokes because the launcher icon is rasterised
            off-device, where no CJK font is guaranteed, and a mark that renders differently in two places is not a
            mark. Below 28 points the strokes would merge, so the lamp silhouette carries the mark alone.
          </p>

          <h2>Who it is for</h2>
          <p>
            People who keep money in more than one place. A payroll account, an e-wallet or two, a card, some cash,
            maybe a dollar balance. Jinnie was built peso first, with the institutions, billers, and categories a
            household in the Philippines actually uses, and it works in any currency.
          </p>

          <h2>How it speaks</h2>
          <ul>
            <li>Formal but plain. Short declarative sentences. No exclamation marks, no slang.</li>
            <li>Money words are precise: record, post, settle, commitment.</li>
            <li>It never shames the user about debt or spending. Insights reports; it does not judge.</li>
            <li>It says what the product does, not what the user should feel.</li>
          </ul>

          <h2>How it looks</h2>
          <p>
            A deep indigo night for surfaces that hold a total, and a single lamp-gold accent spent sparingly.
            Gold is never a default. Green and red mean money in and money out, and nothing else. System font
            throughout, tabular numerals on every figure so columns line up, a 4-point radius on controls and
            cards, and depth from borders and contrast rather than shadows. No emoji anywhere in the product.
          </p>
          <table>
            <thead><tr><th>Token</th><th>Light</th><th>Use</th></tr></thead>
            <tbody>
              {palette.map(([name, hex, use]) => (
                <tr key={name}>
                  <td>
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block size-4 rounded-sm border border-line" style={{ background: hex }} aria-hidden="true" />
                      {name}
                    </span>
                  </td>
                  <td className="tnum font-mono text-sm">{hex}</td>
                  <td>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>How it is built</h2>
          <p>
            React Native and React, Expo modules with generated native projects, Re.Pack on Rspack, and Module
            Federation for the mini apps. No UI framework and no icon package: the component library and the icon
            set are drawn in the repository. The finance logic is tested under plain Node so the suite runs without
            a device.
          </p>
        </Prose>

        <aside className="mx-auto w-full max-w-[360px] lg:sticky lg:top-24">
          <div className="grid aspect-square place-items-center rounded-brand bg-night text-on-night">
            <Mark size={220} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="grid aspect-square place-items-center rounded-brand bg-primary text-white"><Mark size={64} /></div>
            <div className="grid aspect-square place-items-center rounded-brand border border-line bg-card text-ink"><Mark size={64} /></div>
            <div className="grid aspect-square place-items-center rounded-brand bg-accent text-white"><Mark size={64} /></div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The mark on night, on primary, on card, and on lamp gold. The same coordinates drive the in-app
            component, the launcher icon, and this site.
          </p>
        </aside>
      </Container>
    </>
  );
}
