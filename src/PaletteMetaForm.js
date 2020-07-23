import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'


class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newPaletteName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open, newPaletteName } = this.state;
    const { hideForm, handleSubmit } = this.props;
    return (
      <Dialog
        open={open}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Please enter a unique name for the new palette:
            </DialogContentText>
            <Picker />
            <TextValidator
              label="new pal"
              value={newPaletteName}
              name="newPaletteName"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["this field is required", "Palette Name used"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default PaletteMetaForm;
