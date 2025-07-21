import { useState } from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';;
import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  const dummyUser = user?.user;

  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => setShowLogout(!showLogout)}
      >
        {dummyUser?.avatar ? (
          <img src={dummyUser.avatar} alt='avatar' className='img' />
        ) : (
          <FaUserCircle />
        )}

        {dummyUser?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;





// import { useState } from 'react';
// import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
// import Wrapper from '../assets/wrappers/LogoutContainer';
// import { useDashboardContext } from '../pages/DashboardLayout';

// // Optional: default avatar if user.avatar is not available
// const defaultAvatar =
//   'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

// const LogoutContainer = () => {
//   const [showLogout, setShowLogout] = useState(false);
//   const { user, logoutUser } = useDashboardContext();

//   // Return nothing if user is not ready yet (avoids error)
//   if (!user) return null;

//   const { avatar, name } = user;

//   return (
//     <Wrapper>
//       <button
//         type="button"
//         className="btn logout-btn"
//         onClick={() => setShowLogout(!showLogout)}
//       >
//         {avatar ? (
//           <img src={avatar} alt="avatar" className="img" />
//         ) : (
//           <FaUserCircle />
//         )}
//         {name}
//         <FaCaretDown />
//       </button>

//       <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
//         <button type="button" className="dropdown-btn" onClick={logoutUser}>
//           Logout
//         </button>
//       </div>
//     </Wrapper>
//   );
// };

// export default LogoutContainer;