// app/vision/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Vision — AI × Blockchain, One Fabric',
  description:
    'A humane, builder-first vision to integrate AI and blockchain into one verifiable intelligence fabric with decentralized agentic network protocols.',
};

export default function VisionPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <article className="prose prose-invert">
        {/* Page header */}
        <header className="not-prose mb-8">
          <Overline>Vision</Overline>
          <h1 className="text-3xl font-semibold text-white">
            AI × Blockchain as One Fabric
          </h1>
          <p className="mt-3 text-gray-300 leading-relaxed">
            I want AI and blockchain to stop feeling like two stacks. The goal is a
            <em> trustworthy intelligence fabric</em>: models that reason, and cryptography that
            proves what happened — in ways humans can actually understand.
          </p>

          <div className="card mt-4">
            <p className="m-0 text-sm text-gray-200">
              <strong>North Star:</strong> Every meaningful output should carry <em>context</em>,
              <em> attribution</em>, and a <em>verifiable trail</em> — without turning the product
              into theater.
            </p>
          </div>
        </header>

        {/* Why */}
        <section>
          <SectionHeader label="Why this?">The Gap I’m Closing</SectionHeader>
          <p>
            AI is excellent at patterns but weak at provenance. Blockchains are excellent at
            provenance but don’t reason. I’m not “adding a chain to AI”; I’m composing them:
            <strong> AI proposes, cryptography disposes</strong>. If it matters, make it attestable.
          </p>
        </section>

        <Divider />

        {/* Principles (compact grid) */}
        <section className="not-prose">
          <SectionHeader label="Principles">How I Build</SectionHeader>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                t: 'Truthful by design',
                d: 'Hashes, signatures, provenance on data and outputs. Attestable by default.',
              },
              {
                t: 'Privacy with purpose',
                d: 'Local/edge first; enclaves or ZK when proof is needed without revealing data.',
              },
              {
                t: 'Human-centered',
                d: 'Plain language, calm UI, granular controls. No “AI theater.”',
              },
              {
                t: 'Composability',
                d: 'Small, sharp primitives that compose into systems. Clarity over novelty.',
              },
              { t: 'Ship → learn → refactor', d: 'Thin slices, measurable wins, honest logs.' },
            ].map((p) => (
              <li key={p.t} className="card p-4">
                <h3 className="text-sm font-semibold text-white">{p.t}</h3>
                <p className="mt-1 text-sm text-gray-300">{p.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        {/* What "one fabric" looks like */}
        <section>
          <SectionHeader label="Shape">What “One Fabric” Looks Like</SectionHeader>
          <p>
            Think of a <strong>decentralized agentic network</strong>: retrievers, extractors,
            checkers, and publishers cooperating via shared protocols. Each step leaves a
            verifiable footprint — who did what, using which inputs, and why the output is trusted.
          </p>

          <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                h: 'Inputs',
                b: 'Content hashes and usage rights travel with the data.',
              },
              {
                h: 'Models',
                b: 'Version, prompt/context, parameters, and confidence are logged.',
              },
              {
                h: 'Pipelines',
                b: 'Each hop signs artifacts. You can expand a “receipt.”',
              },
              {
                h: 'Outputs',
                b: 'Human-readable attestations: what, how, and by whom.',
              },
            ].map((c) => (
              <div key={c.h} className="card p-4">
                <h3 className="text-sm font-semibold text-white">{c.h}</h3>
                <p className="mt-1 text-sm text-gray-300">{c.b}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Protocol slice */}
        <section>
          <SectionHeader label="Protocols">Agent Network Basics</SectionHeader>
          <ul>
            <li>
              <strong>Identity & Attestation:</strong> keys/DIDs + signed capability grants.
            </li>
            <li>
              <strong>Provenance Graphs:</strong> content‑addressed DAG of inputs → transforms →
              outputs (easy diff, easy audit).
            </li>
            <li>
              <strong>Selective Disclosure:</strong> share proofs, not raw data (ZK/TEEs where
              needed).
            </li>
            <li>
              <strong>Flexible Settlement:</strong> commit on‑chain when appropriate; otherwise sign
              off‑chain logs. Integrity without friction.
            </li>
          </ul>
        </section>

        <Divider />

        {/* Current focus */}
        <section>
          <SectionHeader label="Now">What I’m Building</SectionHeader>
          <ul>
            <li>
              <strong>TEE — Term Extraction Engine:</strong> precise term extraction from technical
              sources with provenance, confidence, and reusable structure.
            </li>
            <li>
              <strong>Proof‑of‑Output:</strong> minimal, readable attestations per model step
              (prompt, context, model version, output hash, signature).
            </li>
            <li>
              <strong>Agent Handshakes:</strong> small RPC/message schemas so agents request,
              transform, review, and publish with signatures at each hop.
            </li>
          </ul>
        </section>

        <Divider />

        {/* Roadmap (condensed) */}
        <section>
          <SectionHeader label="Roadmap">Near‑Term</SectionHeader>
          <ol>
            <li>
              Ship <strong>TEE v1</strong> with clean provenance; measure precision/recall and share
              failure cases.
            </li>
            <li>
              Add <strong>attested pipelines</strong> so users can expand a receipt of how results
              were produced.
            </li>
            <li>
              Draft a <strong>minimal agent protocol</strong> (identity, messages, attestations) and
              test with a few cooperating agents.
            </li>
          </ol>
        </section>

        <Divider />

        {/* Boundaries */}
        <section>
          <SectionHeader label="Boundaries">What I Avoid</SectionHeader>
          <p>
            I won’t ship black‑box “AI magic” or chain maximalism. I care about tools that respect
            people, admit uncertainty, and work under real constraints. Less theater, more signal.
          </p>
        </section>

        <Divider />

        {/* CTA */}
        <section className="not-prose">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-white">Collaborate</h3>
            <p className="mt-1 text-sm text-gray-300">
              If you’re exploring LLMs, cryptography, verification, or agent protocols, I’m happy to
              compare notes and build.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-outline">
                Get in touch
              </Link>
              <Link
                href="/lab"
                className="text-sm text-gray-300 underline-offset-2 hover:text-white hover:underline"
              >
                Read the Lab Journal →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

/* ---------------------------- small helpers ---------------------------- */

function Overline({ children }) {
  return (
    <p className="text-xs tracking-widest uppercase text-gray-400"> {children} </p>
  );
}

function SectionHeader({
  label,
  children,
}) {
  return (
    <div className="not-prose">
      <Overline>{label}</Overline>
      <h2 className="text-xl font-semibold text-white mt-1">{children}</h2>
    </div>
  );
}

function Divider() {
  return <div className="my-8 h-px bg-gray-800 not-prose" />;
}
