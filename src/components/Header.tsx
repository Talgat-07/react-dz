import "../style/header.sass";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { ActionIcon } from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react";

interface AppProps {
  theme: () => void;
  isTheme: string;
}

const Header: FC<AppProps> = ({ theme, isTheme }) => {
  const Navigate = useNavigate();
  return (
    <div className="header">
      <ActionIcon onClick={() => theme()}>
        {isTheme === "light" ? <Moon /> : <Sun />}
      </ActionIcon>
      <div className="nav">
        <span onClick={() => Navigate("/")}>Главная</span>
        <span onClick={() => Navigate("contacts")}>Контакты</span>
        <span onClick={() => Navigate("cart")}>Корзина</span>
      </div>
    </div>
  );
};

export default Header;
