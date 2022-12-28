import React from 'react';
import { useGlobalContext } from '../store/Context';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../Data';
import Button from './UI/Button';

const Sidebar = () => {
  const { toggleSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${toggleSidebar ? 'show' : ''}`}>
      <div className="sidebar">
        <Button css="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </Button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
