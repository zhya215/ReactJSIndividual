var UserListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.user)
        this.props.onListItemClicked(this.props.user.id)
    },

    render: function() {

        var user = this.props.user

        return ( 
            <div className="user row" >
                <div className="userName six columns" onClick={this.handleClick}>
                    {user.full_name}                    
                </div>
            </div>
        )
  }
})