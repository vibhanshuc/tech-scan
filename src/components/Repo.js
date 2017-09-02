import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardText} from 'material-ui/Card';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import moment from 'moment';
import {pink500, grey500} from 'material-ui/styles/colors'

export default ({html_url, full_name, description, language, forks_count, stargazers_count, updated_at}) => (
  <Card style={{marginBottom: 10}}>
    <CardText>
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <Link style={{fontSize: 18, color: pink500}} to={html_url}>{full_name}</Link>
          <p>{description}</p>
          <span style={{fontSize: 12, color: grey500}}>Updated {moment(updated_at).fromNow()}</span>
        </div>
        <div style={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
          <div style={{width: 100, display: 'flex', alignItems: 'flex-start'}}>
            <span style={{display: 'flex', alignItems: 'center',}}>
              {language && <span style={{background: pink500, borderRadius: '50%', width: 20, height: 20, marginRight: 5,}}>&nbsp;</span>}
              {language}
            </span>
          </div>
          <div style={{width: 100, display: 'flex', alignItems: 'flex-start'}}>
            <span style={{display: 'flex', alignItems: 'center'}}>
              <StarIcon style={{paddingRight: 5}}/> {stargazers_count}
            </span>
          </div>
        </div>
      </div>
    </CardText>
  </Card>
)
