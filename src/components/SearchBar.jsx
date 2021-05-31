import React, { useEffect } from "react";
import { Typography, Grid, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "10px",
    width: "90%",
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <Grid
      container
      alignItems="center"
      style={{ width: "100%", height: "60px", backgroundColor: blue[600] }}
      justify="center"
    >
      <Grid item xs={6}>
        <Typography
          component="div"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "60px",
            height: 40,
            padding: "0 20px 0 20px",
          }}
        >
          <Grid container alignItems="center">
            <SearchIcon color="action"></SearchIcon>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={handleSearch}
            >
              <InputBase
                id="Search"
                placeholder="Search for anything"
                color="secondary"
                style={{ height: 40, width: "100%" }}
              />
            </form>
          </Grid>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
