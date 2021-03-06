var UserList = React.createClass({displayName: 'UserList',

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
            }.bind(this),
            //beforeSend: self.setHeader
        });
    },

    /*setHeader: function (xhr) {
  		xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	},*/

    handleListItemClicked: function(id){
        var user = _.find(this.state.data, {id: id})
        this.refs.userView.setState({user:user})
    },

    render: function() {

        var self = this
        console.log(this.state.data)
        var users = this.state.data.map(function (user) {
        
          return (    
            <UserListItem user={user} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="userPage">
                <div className="userList six columns">
                    {users}
                </div>
                <div className="userView six columns">
                    <UserView ref="userView"/>
                </div>
            </div>
        )
    }
})
