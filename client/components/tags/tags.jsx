// const React = React;
const TextField = ReactionUI.Components.TextField;
const Button = ReactionUI.Components.Button;
const Tag = ReactionUI.Components.Tag;
// const Sortable = ReactionUI.Lib.Sortable;
const classnames = ReactionUI.Lib.classnames;

class Tags extends React.Component {
  displayName = "Tag List (Tags)"


  handleNewTagSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.tag.value);
    if (this.props.onCreateTag) {
      console.log("ok?");
      this.props.onCreateTag(event.target.tag.value);
    }
  }

  handleTagCreate = (tagId) => {
    if (this.props.onTagCreate) {
      this.props.onTagCreate(tagId);
    }
  }

  handleTagRemove = (tagId) => {
    if (this.props.onTagRemove) {
      this.props.onTagRemove(tagId);
    }
  }

  handleTagUpdate = (event) => {

  }

  handleTagBookmark = (event) => {

  }

  renderTags() {
    if (_.isArray(this.props.tags)) {
      const tags = this.props.tags.map((tag) => {
        return (
          <Tag
            editable={this.props.editable}
            key={tag.name}
            onTagBookmark={this.handleTagBookmark}
            onTagRemove={this.handleTagRemove}
            onTagUpdate={this.handleTagUpdate}
            tag={tag} />
        );
      });

      // Render an blank tag for creating new tags
      if (this.props.editable) {
        tags.push(
          <Tag
            blank={true}
            onTagCreate={this.handleTagCreate}
          />
        );
      }

      return tags;
    }
  }

  render() {
    const classes = classnames({
      rui: true,
      tags: true,
      edit: this.props.editable
    });

    return (
      <div className={classes}>
        {this.renderTags()}
      </div>
    );
  }
}

// Prop Types
Tags.propTypes = {
  editable: React.PropTypes.bool,
  tags: React.PropTypes.arrayOf(ReactionCore.Schemas.Tag)
};

// Export
ReactionUI.Components.Tags = Tags;
