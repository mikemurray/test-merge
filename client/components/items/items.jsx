const Item = ReactionUI.Components.Item;

class Items extends React.Component {
  displayName = "Items"

  renderItems() {
    const items = this.props.children.map((item, index) => {
      if (this.props.autoWrap) {
        return (
          <Item key={index}>
            {React.cloneElement(item)}
          </Item>
        );
      }

      return React.cloneElement(item);
    });

    return items;
  }

  render() {
    return (
      <div className="rui items">
        {this.renderItems()}
      </div>
    );
  }
}

Items.defaultProps = {
  autoWrap: true
};

Items.propTypes = {
  autoWrap: React.PropTypes.bool.isRequired,
  children: React.PropTypes.arrayOf(React.PropTypes.node)
};

ReactionUI.Components.Items = Items;
