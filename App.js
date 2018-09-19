import React, { Component } from 'react';
import ApplicationItem from './component/Application-Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      isOddClick: false,
      applications: [
        {
          title: 'Application 1',
          type: 'button',
        },
        {
          title: 'Application 2',
          type: 'link',
        },
      ],
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  increaseCounter() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
    }));
  }

  deleteItem(index) {
    let applications = this.state.applications;
    applications.splice(index, 1);
    this.setState({ applications });
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header">Displaying Application List Item</h1>
        <ul className="list-group">
          {this.state.applications.map((application, index) => {
            return (
              <ApplicationItem
                index={index}
                deleteItem={this.deleteItem}
                key={application.title}
                listItem={application}
              />
            );
          })}
        </ul>
        <button
          className={
            this.state.clicks % 2 == 1 && this.state.clicks < 20
              ? 'changeBgColor btn counter'
              : 'btn btn-info counter'
          }
          onClick={this.increaseCounter.bind(this)}
        >
          Clicked {this.state.clicks} Time(s)
        </button>
      </div>
    );
  }
}

export default App;
