import { useNavigate } from 'react-router-dom';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, ImgBox, Para, SEO } from '../components';
import { walkthroughs } from '../data/walkthroughs';

const BELIEFS = [
  'The underwriters who win the next decade aren\'t the ones who fear AI. They\'re the ones who out-prompt it.',
  'Submissions triage is where 80% of the value lives, and almost nobody is doing it well.',
  'A great prompt is not a clever sentence. It is a system.',
  'The desk teaches things the keynote can\'t.',
];

export default function AboutPage() {
  const navigate = useNavigate();
  // Pick 5 starter walkthroughs from actual data
  const starters = walkthroughs.slice(0, 5);

  return (
    <Page>
      <SEO
        title="About the Underwriting Cowboy"
        description="Former head of underwriting for a large APAC carrier. Three years deep on AI. Now writing about it from wherever the wifi is — and sharing every prompt that works."
        path="/about"
      />
      <Nav />

      {/* SPLIT: photo left / narrative right — Variant B */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.1fr',
        borderBottom: `1px solid ${UC.rule}`, minHeight: 720,
      }}>
        {/* PHOTO */}
        <div style={{ position: 'relative', minHeight: 480 }}>
          <ImgBox
            label="[ portrait — somewhere interesting, not an office ]"
            h="100%"
            accent
            style={{ border: 'none', borderRight: `1px solid ${UC.rule}`, minHeight: 480 }}
          />
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            background: UC.ink, color: UC.paper, padding: 18,
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          }}>
            <Eye color={UC.amberSoft}>NOW WRITING FROM</Eye>
            <span style={{ fontFamily: UC.mono, fontSize: 11 }}>SINGAPORE → DA NANG</span>
          </div>
        </div>

        {/* NARRATIVE */}
        <div style={{ padding: '72px 80px 64px' }}>
          <Eye>THE COWBOY</Eye>
          <h1 style={{
            fontFamily: UC.serif, fontWeight: 400, fontSize: 64,
            lineHeight: 1.0, letterSpacing: -1.0, margin: '14px 0 32px',
          }}>
            Hi. I'm the one<br />writing all this.
          </h1>
          <div style={{
            fontFamily: UC.serif, fontSize: 22, lineHeight: 1.4,
            color: UC.ink, maxWidth: 540, marginBottom: 24,
          }}>
            Former head of underwriting for a large APAC carrier. Three years deep on AI.
            One year writing it all down. Currently slow-travelling with my fiancée and a laptop.
          </div>
          <div style={{ fontFamily: UC.serif, fontSize: 18, lineHeight: 1.6, color: UC.ink2, maxWidth: 540 }}>
            <p style={{ marginBottom: 16 }}>
              I started Underwriting Cowboy because I couldn't find what I was looking for:
              a field guide written by someone who had actually done the job. Not a vendor
              whitepaper. Not a conference keynote. Something useful, on the desk, on a Monday morning.
            </p>
            <p style={{ marginBottom: 16 }}>
              Every walkthrough here is something I've tested on real work. When something
              doesn't work, I say so. When the output needs a human eye, I say that too.
              No theatre.
            </p>
            <p>
              The prompts are free. The newsletter is free. If you want to work together,
              there's a page for that.
            </p>
          </div>

          <Rule style={{ margin: '32px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              ['15 YRS', 'Underwriting in APAC'],
              ['3 YRS',  'Building the AI muscle'],
              ['12 MO',  'Writing publicly'],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: UC.serif, fontSize: 36, lineHeight: 1, color: UC.amber }}>{n}</div>
                <Eye style={{ marginTop: 6 }}>{l}</Eye>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BELIEFS STRIP */}
      <div style={{ padding: '56px 80px', background: UC.paperAlt }}>
        <Eye>WHAT I BELIEVE</Eye>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginTop: 24 }}>
          {BELIEFS.map((b, i) => (
            <div key={i}>
              <Eye color={UC.amber}>0{i + 1}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 19, lineHeight: 1.35, marginTop: 12 }}>
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* START HERE */}
      <div style={{ padding: '56px 80px' }}>
        <Eye>NEW HERE? START WITH</Eye>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, marginTop: 22 }}>
          {starters.map(w => (
            <div
              key={w.num}
              onClick={() => navigate(`/field-guide/${w.slug}`)}
              style={{ border: `1px solid ${UC.rule}`, padding: 16, cursor: 'pointer' }}
            >
              <Eye color={UC.amber}>№ {w.num}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 15, lineHeight: 1.35, marginTop: 10 }}>
                {w.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Foot />
    </Page>
  );
}
