import { useLogoStyles } from './useLogoStyles';
import { LogoIcon } from '../../../common/components/Icons/LogoIcon';

export const Logo = () => {
  const classes = useLogoStyles();
  return (
    <a href="/" className={classes.root}>
      <LogoIcon className={classes.img} />
    </a>
  );
};
