var MediaListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.media)
        this.props.onListItemClicked(this.props.media.id)
    },

    render: function() {

        var media = this.props.media

        return ( 
            <div className="media row" >
                <div className="mediaName six columns" onClick={this.handleClick}>
                    {media.user.full_name}                    
                </div>
            </div>
        )
  }
})