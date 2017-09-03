import React from 'react';
import Languages from '../components/Languages';
import TwoColumnWrapper from '../components/TwoColumnWrapper';
import TechStack from '../components/TechStack';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const stacks = [
  'JavaScript',
  'Java',
  'Python',
  'Php',
  'Ruby',
];

const stackList = (<List>
  <Subheader>Technologies</Subheader>
  {stacks.map(tech => <ListItem key={tech} children={<TechStack name={tech}/>}/>)}
</List>);

const Technologies = () => <TwoColumnWrapper content1={stackList}
                                             content2={<Languages owner={'django'} repo={'django'}/>}
/>;

export default Technologies;
