import React, { useEffect } from "react";
import {
  Typography,
  Container,
  Button,
  ButtonGroup,
  Grid,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[600]),
    backgroundColor: blue[600],
    paddingLeft: 25,
    paddingRight: 25,
    height: 60,
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const ColorButtonMain = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[600]),
    backgroundColor: blue[700],
    height: 60,
    paddingLeft: 25,
    paddingRight: 25,
    "&:hover": {
      backgroundColor: blue[800],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "10px",
    width: "90%",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Typography
        component="div"
        style={{ backgroundColor: "#1e88e5", height: 60 }}
      >
        <Grid container alignItems="center">
          <Grid container item xs={9} justify="flex-start">
            <ColorButtonMain href="/" style={{ border: 0 }}>
              Trang chủ
            </ColorButtonMain>
            <ColorButton
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              Điều hướng <ExpandMore></ExpandMore>
            </ColorButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              style={{ marginLeft: "83px", width: "300px", zIndex: "1" }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="menu-list-grow">
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>

          <Grid item xs={3}>
            <Grid container justify="flex-end">
              <ButtonGroup
                variant="contained"
                disableElevation
                aria-label="contained primary button group"
              >
                <ColorButton href="#" style={{ border: 0 }}>
                  Đăng nhập
                </ColorButton>
                <ColorButton href="#" style={{ border: 0 }}>
                  Đăng ký
                </ColorButton>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Typography>
    </Container>
  );
};

export default NavBar;
