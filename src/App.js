import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper';

class App extends Component {
  // console.log(generatePalette(seedColors[4]));
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors,
    }
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState({palettes: [...this.state.palettes, newPalette]});
  }
  render() {
    return (
      <Switch>
        <Route exact path='/palette/new' render={(routeProps) => <NewPaletteForm {...routeProps} savePalette={this.savePalette}/> } />
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps}/>} />
        <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route exact path='/palette/:paletteId/:colorId' render={(routeProps) => 
          <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId}/>} 
        />
      </Switch>
      // <div>
      //   <Palette palette = {generatePalette(seedColors[4])}/>
      // </div>
    );
  }
}

export default App;
