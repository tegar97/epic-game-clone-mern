import React from 'react';


export class NoNavbarFooter extends React.PureComponent {
    render() {
      return (
        <div>
            <h1>hey</h1>
          {this.props.children}
      
        </div>
      );
    }
}

