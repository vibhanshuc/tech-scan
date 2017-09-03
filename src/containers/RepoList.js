import React, {Component} from 'react';
import {getTopic} from '../lib/api';
import Repo from '../components/Repo';
import Pagination from 'react-js-pagination/dist/Pagination';
import NProgress from 'nprogress';
import TextField from 'material-ui/TextField';
import Languages from '../components/Languages';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Flex, Box} from 'reflexbox'
import injectSheet from 'react-jss'
import TwoColumnWrapper from '../components/TwoColumnWrapper';

const styles = {
  text: {
    marginLeft: 10
  },
  result: {
    paddingLeft: 5,
  }
};
const PER_PAGE = 9;
const sorts = [undefined,
  'stars',
  'forks',
  'updated'];

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
      count: null,
      items: [],
      showItems: [],
      total: 0,
      activePage: 1,
      sort: 0,
    }
  }

  fetchTopicData = async () => {
    NProgress.start();
    const topic = await getTopic(this.state.search, sorts[this.state.sort]);
    this.setState({
      count: topic.total_count,
      items: topic.items,
      total: topic.items.length,
      activePage: 1,
      showItems: topic.items.slice(0, PER_PAGE)
    });
    NProgress.done();
  };

  async componentDidMount() {
    await this.fetchTopicData();
  }

  handlePageChange = (pageNumber) => {
    this.setState((prevState) => {
      return {
        activePage: pageNumber,
        showItems: prevState.items.slice((pageNumber - 1) * PER_PAGE, pageNumber * PER_PAGE)
      }
    });
  };

  handleInputChange = (event,) => {
    this.setState({search: event.target.value});
  };

  handleEnterKeyPress = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await this.fetchTopicData();
    }
  };

  handleSortChange = (event, value) => {
    this.setState({sort: value}, async () => {
      await this.fetchTopicData();
    });
  };

  renderToolbar = (classes) => {
    const {count, search} = this.state;
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <TextField name="search"
                     value={search}
                     onChange={this.handleInputChange}
                     onKeyDown={this.handleEnterKeyPress}
                     className={classes.text}/>
          <span className={classes.result}>{count ? `${count} repository results` : ''}</span>
        </ToolbarGroup>
        <ToolbarGroup>
          <DropDownMenu value={this.state.sort} onChange={this.handleSortChange}>
            <MenuItem value={0} primaryText="Sort: Best Match"/>
            <MenuItem value={1} primaryText="Sort: Stars"/>
            <MenuItem value={2} primaryText="Sort: Forks"/>
            <MenuItem value={3} primaryText="Sort: Updated"/>
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  };

  renderItems = () => {
    const {showItems} = this.state;

    return (
      <div>
        {showItems.map(item => <Repo key={item.id} {...item}/>)}
        <Pagination
          hideDisabled={true}
          activePage={this.state.activePage}
          itemsCountPerPage={PER_PAGE}
          totalItemsCount={this.state.total}
          onChange={this.handlePageChange}
        />
      </div>
    )
  };

  render() {
    const {showItems} = this.state;
    const {classes} = this.props;

    return (
      <TwoColumnWrapper content1={<div>
        {this.renderToolbar(classes)}
        <br/>
        {showItems.length ? this.renderItems() : <span>Loading....</span>}
      </div>}
      content2={<Languages owner={'angular'} repo={'angular'}/>}/>
    )
  }
}

export default injectSheet(styles)(RepoList);
