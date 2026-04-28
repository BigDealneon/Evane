import React from 'react';
import Image from 'next/image';

export default function Reality() {
  return (
    <section className="rl" aria-label="What you actually see">
      <div className="container rl__inner">
        <span className="eyebrow">Inside the channel</span>
        <h2 className="rl__title">No vague commentary. Real trades, in real time.</h2>
        <blockquote className="rl__quote">
          <p>
            Every call in the channel is a trade the desk is actually taking — with explicit entries, stop-loss levels and clear invalidation criteria. No delay, no recycled content, no hopium.
          </p>
          <footer className="rl__quote-author">Elizabeth</footer>
        </blockquote>
        <div className="rl__portrait" aria-hidden="true">
          <Image
            src="/images/portrait.webp"
            alt=""
            width={280}
            height={373}
            quality={75}
            priority={false}
            className="rl__elizabeth-img"
          />
        </div>
      </div>
    </section>
  );
}
