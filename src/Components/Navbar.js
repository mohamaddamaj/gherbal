import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    closeMenu();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6">{t("pageTitle")}</Typography>
        </Link>
        <Box display="flex" alignItems="center">
          <IconButton onClick={openMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={closeMenu}
          >
            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage("ar")}>العربية</MenuItem>
          </Menu>
          <Link
            to={`/${i18n.language === "en" ? "ar" : "en"}`}
            style={{ textDecoration: "none", color: "white" }}
          ></Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
