import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'iChildBloom',
    Svg: require('@site/static/img/building2.svg').default,
    description: (
      <>
        Autism & Child's Development Support Software <br/>
         {/* Learn more at{' '} */}
        <a href="https://ichildbloom.com" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </>
    ),
  },

  {
    title: 'iCodeRemotely',
    Svg: require('@site/static/img/building2.svg').default,
    description: (
      <>
        IT services & IT consulting <br/>
         {/* Learn more at{' '} */}
        <a href="https://icoderemotely.com" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </>
    ),
  },
  {
    title: 'Join Community',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        Join community to connect, collaborate, & grow! 🚀 <br/>
        <a href="https://chat.whatsapp.com/CpDsDeWXzHOLdQ6J9wffa0" target="_blank" rel="noopener noreferrer">
          Join for free
        </a>
      </>
    ),
  },
  // {
  //   title: 'Youtube',
  //   Svg: require('@site/static/img/yyoutube.svg').default,
  //   description: (
  //     <>
  //       Making software fun and interesting for all <br/>
  //       <a href="#" target="_blank" rel="noopener noreferrer">
  //         Subscribe for free
  //       </a>
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
