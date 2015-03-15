var MediaList = React.createClass({displayName: 'MediaList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            type: 'GET',
            crossDomain: true,
            url: this.props.url,
            dataType: 'jsonp',
            success: function(data) {
                this.setState({
                    data: data.data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(id){
        var media = _.find(this.state.data, {id: id})
        this.refs.mediaView.setState({media:media})
    },

    render: function() {

        var self = this
        console.log(this.state.data)
        var medias = this.state.data.map(function (media) {
        
          return (    
            <MediaListItem media={media} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="mediaPage">
                <div className="mediaList six columns">
                    {medias}
                </div>
                <div className="mediaView six columns">
                    <MediaView ref="mediaView"/>
                </div>
            </div>
        )
    }
})