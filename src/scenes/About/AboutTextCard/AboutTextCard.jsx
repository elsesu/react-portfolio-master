import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hello Folks, My Name is{' '}
        <span className={s.purple}>Sesugh Asa </span>
        from <span className={s.purple}> Abuja, Nigeria.</span>
        <br />
        I am a Software engineer, my expertise include Web and Mobile development{' '}
        <br />
        using React and React-Native.
        <br />
        <br />
        I have a Bachelor's degree in Economics and
        <br />
        Master's degree in Business Management.
        <br />
        <br />
        I don't always code sometimes, i engage in other fun activities such as!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Swimming
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Watching Football ps I am an Arsenal Fan
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing video games and watching youtube videos
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
