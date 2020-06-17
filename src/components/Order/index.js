import React from "react";
import { ReviewOrder, SelectOrder, Wrapper } from "./style";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Order = () => {
  const classes = useStyles();
  const [ingredient, setIngredient] = React.useState("");

  const handleChange = (event) => {
    setIngredient(event.target.value);
  };
  return (
    <Wrapper>
      <SelectOrder>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            Select your ingredient
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={ingredient}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Vodka</MenuItem>
            <MenuItem value={20}>Gin</MenuItem>
            <MenuItem value={30}>Cognac</MenuItem>
          </Select>
        </FormControl>
      </SelectOrder>
      <ReviewOrder>Review order</ReviewOrder>
    </Wrapper>
  );
};

export default Order;
