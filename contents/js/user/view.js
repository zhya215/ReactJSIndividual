var UserView = React.createClass({

    getInitialState: function() {
        return {user: null}
    },

    render: function() {
        
        if (this.state.user){

            return ( 
                <div className="userView" >
                    <h2 className="fullName">
                        {this.state.user.full_name}
                    </h2>
                    <h2 className="userName">
                        {this.state.user.username}
                    </h2>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})