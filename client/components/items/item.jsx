
class Item extends React.Component {
  render() {
    return (
      <div className="rui item">
        {this.props.children}
      </div>
    );
  }
}

ReactionUI.Components.Item = Item
