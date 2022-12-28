import React from 'react';
import Phone from '../images/phone.svg';
import { useGlobalContext } from '../store/Context';
import Button from './UI/Button';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes from startups to Fortune 500s
            use Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <Button css="btn">Start now</Button>
        </article>
        <article className="hero-images">
          <img src={Phone} alt="smartphone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
