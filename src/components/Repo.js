import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardText} from 'material-ui/Card';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import moment from 'moment';
import {pink500, grey500, grey700} from 'material-ui/styles/colors'
import {Flex, Box} from 'reflexbox';
import injectSheet from 'react-jss'

const styles = {
  card : {
    marginBottom: 10,
  },
  fullName: {
    fontSize: 18,
    color: pink500,
  },
  updatedAt: {
    fontSize: 12,
    color: grey500,
  },
  dot: {
    background: pink500,
    borderRadius: '50%',
    width: 20,
    height: 20,
    marginRight: 5,
  },
  description: {
    height: 30,
    color: grey700,
    fontSize: 14,
    paddingBottom: 10,
  },
  starGazers: {
    paddingRight: 5,
  }
};

const Repo = ({classes, isColumn = false, owner, full_name, description = '', language, forks_count, stargazers_count, updated_at}) => (
  <Card className={classes.card}>
    <CardText>
      <Flex column={isColumn}>
        <Box w={isColumn ? 1: 1 / 2}>
          <Link className={classes.fullName} to={`/users/${owner.login}`}>{full_name}</Link>
          <p className={classes.description}>
            {description && description.length >= 100? classes.description.substr(0, 100): description}
            </p>
          <span className={classes.updatedAt}>Updated {moment(updated_at).fromNow()}</span>
        </Box>
        <Box w={isColumn ? 1: 1 / 2} justify={'space-between'} mt={isColumn? 10 : 0}>
          <Flex>
            <Box w={1 / 2}>
              <Flex align={'center'}>
                {language && <span className={classes.dot}>&nbsp;</span>}{language}
              </Flex>
            </Box>
            <Box w={1 / 2}>
              <Flex align={'center'}>
                <StarIcon className={classes.starGazers}/> {stargazers_count}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </CardText>
  </Card>
);

export default injectSheet(styles)(Repo);
