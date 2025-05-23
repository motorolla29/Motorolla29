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
import { ReactComponent as FigmaIcon } from '../images/skills-icons/figma.svg';
import { ReactComponent as NodeJsIcon } from '../images/skills-icons/node-js.svg';
import { ReactComponent as ChaiIcon } from '../images/skills-icons/chai.svg';
import { ReactComponent as MaterialUiIcon } from '../images/skills-icons/material-ui.svg';
import { ReactComponent as FramerMotionIcon } from '../images/skills-icons/framer-motion.svg';
import { ReactComponent as MondoDBIcon } from '../images/skills-icons/mongodb.svg';
import { ReactComponent as PostgreSQLIcon } from '../images/skills-icons/postgresql.svg';
import { ReactComponent as MaplibreIcon } from '../images/skills-icons/maplibre.svg';
import { ReactComponent as StripeIcon } from '../images/skills-icons/stripe.svg';
import { ReactComponent as MobXIcon } from '../images/skills-icons/mobx.svg';
import { ReactComponent as VercelIcon } from '../images/skills-icons/vercel.svg';

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
    case 'figma':
      return <FigmaIcon key="figma" />;
    case 'node.js':
      return <NodeJsIcon key="node.js" />;
    case 'chai':
      return <ChaiIcon key="chai" />;
    case 'material-ui':
      return <MaterialUiIcon key="material-ui" />;
    case 'framer-motion':
      return <FramerMotionIcon key="framer-motion" />;
    case 'mongo-db':
      return <MondoDBIcon key="mongo-db" />;
    case 'postgre-sql':
      return <PostgreSQLIcon key="postgre-sql" />;
    case 'maplibre':
      return <MaplibreIcon key="maplibre" />;
    case 'stripe':
      return <StripeIcon key="stripe" />;
    case 'mobx':
      return <MobXIcon key="mobx" />;
    case 'vercel':
      return <VercelIcon key="vercel" />;
    default:
      break;
  }
};

export default getSkillLogo;
