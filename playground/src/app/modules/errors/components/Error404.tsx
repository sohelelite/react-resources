import { FC } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { Link } from "react-router-dom";

const Error404: FC = () => {
  return (
    <>
      <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
      <div className="fw-semibold fs-6 text-gray-500 mb-7">
        We can't find that page.
      </div>

      <div className="mb-3">
        <img
          src={toAbsoluteUrl("media/auth/404-error.png")}
          alt="Error 404"
          className="mw-100 mh-300px theme-light-show"
        />
        <img
          src={toAbsoluteUrl('media/auth/404-error-dark.png')}
          className='mw-100 mh-300px theme-dark-show'
          alt=''
        />
      </div>

      <div className='mb-0'>
        <Link to='/dashboard' className='btn btn-sm btn-primary'>
          Return Home
        </Link>
      </div>

    </>
  );
};

export {Error404}
