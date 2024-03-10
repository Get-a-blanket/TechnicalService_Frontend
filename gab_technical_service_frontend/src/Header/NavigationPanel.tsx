import React from 'react';
import "../Styles/Header.css";

interface NavigationPanelProps {
  home: React.ReactNode;
  map: React.ReactNode;
  about: React.ReactNode;
}

const NavigationPanel: React.FC<NavigationPanelProps> = ({ home, map, about }) => {
  return (
    <div className='navigation-panel' style={{ display: "flex", flexDirection: "column", position: "fixed", top: "0", right: "0", paddingTop: "25px" }}>
      <div className='navigation-panel-home'>
        {home}
      </div>
      <div className='navigation-panel-map'>
        {map}
      </div>
      <div className='navigation-panel-about'>
        {about}
      </div>
    </div>
  );
};

export default NavigationPanel;
