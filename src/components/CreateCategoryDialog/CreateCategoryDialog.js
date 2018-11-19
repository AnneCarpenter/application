import React, { Component } from 'react';
import styles from './CreateCategoryDialog.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  TextField,
  Popover
} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import ColorPicker from '../ColorPicker/ColorPicker';

class CreateCategoryDialog extends Component {
  state = {
    anchor: null,
    color: '#FF0000',
    description: ''
  };

  onColorChange = (color, event) => {
    this.setState({
      ...this.state,
      anchor: null,
      color: color.hex
    });
  };

  onDescriptionChange = event => {
    this.setState({
      ...this.state,
      description: event.target.value
    });
  };

  openCreateCategoryColorMenu = event => {
    this.setState({
      anchor: event.currentTarget
    });
  };

  closePopover = () => {
    this.setState({
      anchor: null
    });
  };

  render() {
    const { classes, createCategory, onClose, open } = this.props;

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <ButtonBase
                  aria-haspopup="true"
                  aria-owns={this.state.anchor ? 'create-category-color' : null}
                  onClick={this.openCreateCategoryColorMenu}
                  style={{
                    color: this.state.color
                  }}
                >
                  <LabelIcon />
                </ButtonBase>
              </Grid>

              <Grid item>
                <TextField
                  id="create-category-description"
                  label="Description"
                  onChange={this.onDescriptionChange}
                  value={this.state.description}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>

          <Button
            color="primary"
            onClick={() =>
              createCategory(this.state.color, this.state.description)
            }
          >
            Create category
          </Button>
        </DialogActions>

        <Popover
          open={Boolean(this.state.anchor)}
          anchorEl={this.state.anchor}
          onClose={this.closePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <div className={classes.colorPicker}>
            <ColorPicker onChange={this.onColorChange} />
          </div>
        </Popover>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreateCategoryDialog);
