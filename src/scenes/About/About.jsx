import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import aboutPromoImg from '../../assets/about-promo.svg';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              ABOUT <b className={s.purple}>ME</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
           
          </div>
        </div>

        <h2 className={s.skills}>
          Some of My <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

      
      </div>
    </BaseLayout>
  );
};

export default About;
