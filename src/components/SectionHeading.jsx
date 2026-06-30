import React from "react";
import Reveal from "./Reveal";

/**
 * SectionHeading — the shared title treatment used across every section:
 * an eyebrow label, a two-tone heading, the gradient underline, and an
 * optional supporting line. Keeps spacing and typography consistent.
 *
 * Pass the heading as children; wrap the emphasized words in
 * <span className="text-gradient"> at the call site.
 */
const SectionHeading = ({ eyebrow, children, subtitle, className = "" }) => {
  return (
    <Reveal className={`pb-10 ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title block">{children}</h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
      {subtitle && <p className="mt-4 max-w-2xl text-gray-400">{subtitle}</p>}
    </Reveal>
  );
};

export default SectionHeading;
