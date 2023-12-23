import { ReactComponent as HtmlIcon } from '../images/skills-icons/html.svg';
import { ReactComponent as CssIcon } from '../images/skills-icons/css.svg';
import { ReactComponent as JavascriptIcon } from '../images/skills-icons/javascript.svg';
import { ReactComponent as GulpIcon } from '../images/skills-icons/gulp.svg';
import { ReactComponent as WebpackIcon } from '../images/skills-icons/webpack.svg';
import { ReactComponent as GitIcon } from '../images/skills-icons/git.svg';
import { ReactComponent as NpmIcon } from '../images/skills-icons/npm.svg';
import { ReactComponent as BabelIcon } from '../images/skills-icons/babel.svg';
import { ReactComponent as ReactIcon } from '../images/skills-icons/react.svg';
import { ReactComponent as ReduxIcon } from '../images/skills-icons/redux.svg';
import { ReactComponent as TypescriptIcon } from '../images/skills-icons/typescript.svg';
import { ReactComponent as ThreeIcon } from '../images/skills-icons/three.svg';
import { ReactComponent as SassIcon } from '../images/skills-icons/sass.svg';
import { ReactComponent as GreenSock } from '../images/skills-icons/greensock.svg';
import { ReactComponent as JestIcon } from '../images/skills-icons/jest.svg';
import { ReactComponent as FormspreeIcon } from '../images/skills-icons/formspree.svg';

const getSkillLogo = (skill) => {
  switch (skill) {
    case 'html':
      return <HtmlIcon key="html" />;
    case 'css':
      return <CssIcon key="css" />;
    case 'gulp':
      return <GulpIcon key="gulp" />;
    case 'javascript':
      return <JavascriptIcon key="javascript" />;
    case 'webpack':
      return <WebpackIcon key="webpack" />;
    case 'git':
      return <GitIcon key="git" />;
    case 'npm':
      return <NpmIcon key="npm" />;
    case 'babel':
      return <BabelIcon key="babel" />;
    case 'react':
      return <ReactIcon key="react" />;
    case 'redux':
      return <ReduxIcon key="redux" />;
    case 'typescript':
      return <TypescriptIcon key="typescript" />;
    case 'three':
      return <ThreeIcon key="three" />;
    case 'sass':
      return <SassIcon key="sass" />;
    case 'gsap':
      return <GreenSock key="gsap" />;
    case 'jest':
      return <JestIcon key="gsap" />;
    case 'formspree':
      return <FormspreeIcon key="formspree" />;
    default:
      break;
  }
};

export default getSkillLogo;
