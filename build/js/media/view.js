var MediaView = React.createClass({

    getInitialState: function() {
        return {media: null}
    },

    render: function() {
        
        if (this.state.media){

            return ( 
                <div className="mediaView" >
                    <h2 className="fullName">
                        {this.state.media.user.full_name}
                    </h2>
                    <img src={this.state.media.images.low_resolution.url}></img>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})