import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";

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
        <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
          <Typography variant="h6">{t("pageTitle")}</Typography>
        </Link>
        <Box display="flex" alignItems="center">
          <IconButton onClick={openMenu}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={closeMenu}
          >
            <MenuItem onClick={() => changeLanguage("en")}>
              <Link to="/">English</Link>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("ar")}>
              <Link to="/ar">العربية</Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
