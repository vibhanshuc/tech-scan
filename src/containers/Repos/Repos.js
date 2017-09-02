import React, {Component} from 'react';
import {getTopic} from '../../lib/api';
import Repo from '../../components/Repo';
import Pagination from 'react-js-pagination/dist/Pagination';
import NProgress from 'nprogress';
import TextField from 'material-ui/TextField';
import Languages from '../../components/Languages';

const PER_PAGE = 9;

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
      count: null,
      items: [],
      showItems: [],
      total: 0,
      activePage: 1
    }
  }

  fetchTopicData = async () => {
    NProgress.start();
    const topic = await getTopic(this.state.search);
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

  handleInputChange = (event) => {
    this.setState({search: event.target.value});
  };

  handleEnterKeyPress = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await this.fetchTopicData();
    }
  };

  render() {
    const {count, showItems, search} = this.state;

    return (
      <div style={{display: 'flex'}}>
        <div style={{flex: 0.7, marginRight: 10,}}>
          {showItems.length ?
            <div>
              <TextField name="search"
                         value={search}
                         onChange={this.handleInputChange}
                         onKeyDown={this.handleEnterKeyPress}/>
              {count} repository results
              {showItems.map(item => <Repo key={item.id} {...item}/>)}
              <Pagination
                hideDisabled={true}
                activePage={this.state.activePage}
                itemsCountPerPage={PER_PAGE}
                totalItemsCount={this.state.total}
                onChange={this.handlePageChange}
              />
            </div>
            : <span>Loading....</span>
          }
        </div>
        <div style={{flex: 0.3}}>
          <Languages owner={'angular'} repo={'angular'}/>
        </div>
      </div>
    )
  }
}

export default Repos;
