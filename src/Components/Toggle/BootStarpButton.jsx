

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function BootStarpButton() {
  return (
    <>
    <Link to={"/"}>
      <Button variant="primary" size="lg">
          Large button
        </Button>
        </Link>
    </>
  );
}

export default BootStarpButton;