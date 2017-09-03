import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {getLanguages} from '../lib/api';
import {ListItem} from 'material-ui/List';
import injectSheet from 'react-jss'
import {Flex} from 'reflexbox'

const style = {
  container: {
    border: '1px solid rgb(237, 237, 237)',
  },
};

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
    const {classes} = this.props;
    return (
      <List className={classes.container}>
        <Subheader>Languages</Subheader>
        {languages.map((lang) =>
          <ListItem key={lang[0]} primaryText={
            <Flex justify={'space-between'}>
              <span>{lang[0]}</span>
              <span>{lang[1]}</span>
            </Flex>
          }
          />)}
      </List>
    )
  }
}

export default injectSheet(style)(Languages);
