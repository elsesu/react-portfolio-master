import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import img from '../../../assets/linkedin.jpeg';
import { AiFillGithub } from 'react-icons/ai';
import './IntroSection.module.scss'
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsappSquare,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            A BRIEF <span className={s.purple}> INTRODUCTION </span>{' '}
            OF MY MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I am a Full Stack Software Engineer with four years+ of
              experience <br /> 
              Creating Web apps with Reactjs, Vue and Nextjs all powered by nodejs backend as well as mobile apps for both Android and ios using React Native and firebase.
            </p>

            <p>
              My core skills include {' '}
              <i>
                <b className={s.purple}>
                  Javascript, React, Vue, NextJs React Native, Nodejs, Css,
                </b>
              </i>
              <br />
              and other relevant frameworks i may need in the course of development. <br />
              i have experience in integration of API's and development of Ui from Figma mockups.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Products and Solutions to solve Client Problems</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} className='img'/>
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          You can contact <span className={s.purple}>me on </span>the following channels
      
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
               href="https://github.com/elsesu"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
               href="https://wa.link/yy77wm"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaWhatsappSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="+2349024177393"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/sesugh-asa-6b5811197/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
