// app/vision/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Vision — AI × Blockchain, One Fabric",
  description:
    "A long-term plan to unify AI and blockchain into a single, verifiable intelligence fabric. Near term: build TEE and integrate it into Proof of Terms.",
};

export default function VisionPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <article className="prose prose-invert">
        {/* Header */}
        <header className="not-prose mb-8">
          <Overline>Vision</Overline>
          <h1 className="text-3xl font-semibold text-white">
            AI × Blockchain as One Fabric
          </h1>
          <p className="mt-3 text-gray-300 leading-relaxed">
            I do not treat AI and blockchain as separate stacks. I want them to
            behave as one fabric: models that reason, cryptography that verifies,
            and a product surface that stays quiet and clear.
          </p>
        </header>

        <Divider />

        {/* Unifying idea */}
        <section>
          <SectionHeader label="Unifying Idea">Reason with Proof</SectionHeader>
          <p>
            AI is good at inference and pattern finding. It is weak on provenance.
            Blockchains are good at provenance and settlement. They do not reason.
            I want composition, not a bolt on. AI proposes. Cryptography disposes.
            If an output matters, it should carry context, attribution, and a
            verifiable trail that a person can inspect without friction.
          </p>
        </section>

        <Divider />

        {/* Near-term mission */}
        <section>
          <SectionHeader label="Near Term">First Thin Slice</SectionHeader>
          <p>
            I am early in this work. The first concrete step is a small and useful slice.
          </p>

          <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            <div className="card p-4">
              <h3 className="text-sm font-semibold text-white">Term Extraction Engine</h3>
              <p className="mt-1 text-sm text-gray-300">
                Extract precise terms from technical sources in AI and blockchain,
                include provenance, confidence, and structure that downstream tools can reuse.
              </p>
              <ul className="mt-2 text-sm text-gray-300 list-disc pl-5">
                <li>Hybrid approach, heuristics with embeddings and light rules</li>
                <li>Record spans, model version, and parameters</li>
                <li>Evaluate with a small curated set, report precision and recall</li>
              </ul>
            </div>

            <div className="card p-4">
              <h3 className="text-sm font-semibold text-white">Proof of Terms</h3>
              <p className="mt-1 text-sm text-gray-300">
                A web3 dictionary powered by the engine. Each term links to sources and versions.
                For entries that warrant it, add on chain integrity. The goal is a calm reading
                experience with clear provenance.
              </p>
              <ul className="mt-2 text-sm text-gray-300 list-disc pl-5">
                <li>Searchable glossary with status and history</li>
                <li>Simple curation loop for edits and approvals</li>
                <li>Optional chain commit for critical terms</li>
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* Protocol and agents */}
        <section>
          <SectionHeader label="Protocols">Decentralized Agentic Networks</SectionHeader>
          <p>
            I keep asking a simple question. What if core internet protocols behaved like
            small, cooperating agents. They would route data, learn from behavior, recover from
            failure, and publish a clear record of what changed and why the result can be trusted.
          </p>

          <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                h: "Identity and Attestation",
                b: "Keys or DIDs with signed capability grants. Agents prove who they are and what they may do.",
              },
              {
                h: "Provenance Graphs",
                b: "Content addressed DAGs of inputs, transforms, and outputs. Easy to diff and audit.",
              },
              {
                h: "Selective Disclosure",
                b: "Share proofs without exposing raw data. Use ZK or TEEs where needed.",
              },
              {
                h: "Flexible Settlement",
                b: "Commit on chain when appropriate, otherwise signed off chain logs. Keep integrity, avoid friction.",
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

        {/* Philosophy */}
        <section className="not-prose">
          <SectionHeader label="Philosophy">How I Work</SectionHeader>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                t: "Truthful by design",
                d: "If it matters, make it attestable. Hashes, signatures, provenance.",
              },
              {
                t: "Privacy with purpose",
                d: "Local or edge first. Enclaves or ZK when proof is required and data should stay private.",
              },
              {
                t: "Human before hype",
                d: "Plain language, quiet UI, clear controls. Admit uncertainty.",
              },
              {
                t: "Composability",
                d: "Small primitives that combine into clear systems. Refactor often.",
              },
              { t: "Thin slices", d: "Ship, learn, adjust. Keep the log honest." },
            ].map((p) => (
              <li key={p.t} className="card p-4">
                <h3 className="text-sm font-semibold text-white">{p.t}</h3>
                <p className="mt-1 text-sm text-gray-300">{p.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        {/* Ultimate goal */}
        <section>
          <SectionHeader label="Arc">Where This Leads</SectionHeader>
          <p>
            The long arc is a verifiable intelligence fabric. A blockchain based infrastructure
            for AI, and an AI based infrastructure for future blockchains. Systems that are
            decentralized, explainable, and ethical by construction. Trust is not assumed. It is earned.
          </p>
        </section>

        <Divider />

        {/* CTA */}
        <section className="not-prose">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-white">Follow the work</h3>
            <p className="mt-1 text-sm text-gray-300">
              I will share research notes, prototypes, and failures in the Lab Journal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/lab" className="btn-outline">Read the Lab</Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

/* ---------------------------- helpers ---------------------------- */

function Overline({ children }) {
  return <p className="text-xs tracking-widest uppercase text-gray-400">{children}</p>;
}

function SectionHeader({ label, children }) {
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
