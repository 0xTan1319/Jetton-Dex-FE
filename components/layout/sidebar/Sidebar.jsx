import classes from './sidebar.module.scss';

export const Sidebar = ({ width = 200, children }) => {
  const sidebarStyle = {
    width: width
  };

  return (
    <div className={`sidebar ${classes.sidebar}`} style={sidebarStyle}>
      {children}
    </div>
  );
};
