import SvgError from '../../assets/communs/error404.svg';

import './Error404.css';

function Error404() {
  return (
    <div className='sky'>
      <div className='stars' />
      <img style={{ width: '600px' }} src={SvgError} alt='404' />
    </div>
  );
}

export default Error404;
