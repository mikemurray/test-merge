Tag = class TagList extends React.Component {

  renderTags() {
    return this.props.tags.map((tag, index) => {
      return <Tag tag={tag}></Tag>
    })
  }

  renderEditableTags() {
    return this.props.tags.map((tag, index) => {
      return (
        <Tag tag={tag}></Tag>
      );
    })
  }

  render() {
    return (
      <div className="tag-list">
        {this.renderTags()}
      </div>
    );
  }
};
