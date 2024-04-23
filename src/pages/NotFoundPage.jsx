import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <div>404 Not Found</div>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
}

export default NotFoundPage;
