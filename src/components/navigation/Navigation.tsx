import { useState } from "react";
import { MenuToggle } from "../shared/menu-toggle/MenuToggle";
import "./Navigation.scss";

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="navigation">
      <h3>Marvel</h3>
      <MenuToggle onToggle={() => setIsOpened(!isOpened)} isActive={isOpened} />
    </div>
  );
};

export default Navigation;
