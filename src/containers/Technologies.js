import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Languages from '../components/Languages';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import {Flex, Box} from 'reflexbox'

const stacks = ['JavaScript',
  'Java',
  'Python',
  'Php',
  'Ruby'];


const TechStack = ({name}) => (
  <Link to={`/repos/${name.toLowerCase()}`}>
    <ListItem
      children={
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Avatar size={64} src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}-original.svg`}/>
          <span style={{fontSize: 30, paddingLeft: 20}}>{name}</span>
        </div>
      }
    />
  </Link>
);

class Technologies extends Component {

  render() {
    return (
      <Flex>
        <Box w={2/3} pr={20}>
          <List>
            <Subheader>Technologies</Subheader>
            {stacks.map(tech => <TechStack name={tech}/>)}
          </List>
        </Box>
        <Box w={1/3}>
          <Languages owner={'django'} repo={'django'}/>
        </Box>
      </Flex>
    )
  }
}

export default Technologies;
