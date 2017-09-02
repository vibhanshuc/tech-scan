import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Languages from '../../components/Languages';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

const TechStack = ['JavaScript',
  'Java',
  'Python',
  'Php',
  'Ruby'];

class Technologies extends Component {

  render() {
    return (
      <div>
        <div style={{display: 'flex'}}>
          <div style={{flex: 0.7, paddingRight: 20}}>
            <List>
              <Subheader>Technologies</Subheader>
              {TechStack.map((tech) => (
                <Link key={tech} to={`/repos/${tech.toLowerCase()}`}>
                  <ListItem
                    key={tech}
                    children={
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <Avatar size={64} src={`${process.env.PUBLIC_URL}/images/${tech.toLowerCase()}-original.svg`}/>
                        <span style={{fontSize: 30, paddingLeft: 20}}>{tech}</span>
                      </div>
                    }
                  />
                </Link>
              ))}
            </List>
          </div>
          <div style={{flex: '0.3'}}>
            <Languages owner={'django'} repo={'django'}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Technologies;
