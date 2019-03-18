class Target extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awesome: false,
      num: this.props.count || 5,
    };
  }

  render() {
    if (this.state.num === 1) {
      return (
        <div onClick={() => this.setState({ awesome: !this.state.awesome })}>
          {'' + !!this.state.awesome}
        </div>
      );
    }
    var count = this.state.num;
    var children = [];
    for (var i = 0; i < count; i++) {
      children.push(<Target key={guid()} count={count - 1} />);
    }
    return (
      <div style={{
        margin: 5,
        marginLeft: 10,
        border: '2px solid #ccc',
      }}>
        {count} : {this.state.num} / {'' + !!this.state.awesome}
        {children}
      </div>
    );
  }
}

module.exports = { Target }
  ;
