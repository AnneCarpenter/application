import React, { Component } from 'react';
import styles from './Search.css';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classNames(classes.formControl)}>
        <Input
          className={classNames(classes.input)}
          disableUnderline
          id="input-with-icon-adornment"
          placeholder="Search your images"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Search);