import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/saeed.jpg' alt='saeed mohammadiha' width={300} height={300} />
      </div>
      <h1>Hi, I'm Saeed</h1>
      <p>
        I blog about web development - espesially frontend frameworkeslike
        Angular and React
      </p>
    </section>
  );
}
