import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import LanguageItem from './LanguageItem';
import {getLanguages} from '../lib/api';

class Languages extends Component {
  state = {
    languages: [],
  };

  async componentDidMount() {
    try {
      const languages = await getLanguages(this.props.owner, this.props.repo);
      this.setState({languages: Object.entries(languages)});
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {languages} = this.state;
    return (
      languages.length ?
        (<List style={{border: '1px solid rgb(237, 237, 237)', flex: 1}}>
        <Subheader>Languages</Subheader>
        {languages.map((lang) => <LanguageItem key={lang[0]} name={lang[0]} count={lang[1]}/>)}
      </List>): <span>Loading...</span>
    )
  }
}

export default Languages;
