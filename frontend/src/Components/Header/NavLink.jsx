// components/NavLink.jsx
import { useNavigate } from 'react-router-dom';

const NavLink = ({ to, children, className = '' }) => {
  const navigate = useNavigate();
  
  return (
    <button 
      className={`nav-item ${className}`}
      onClick={() => navigate(to)}
      role="link"
    >
      {children}
    </button>
  );
};

export default NavLink;