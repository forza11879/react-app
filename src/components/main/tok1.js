render: function() {
    var valueField;
    if(this.props.editAble){
        valueField =  <td className="col-md-12">
                                        <Select ref="child" options={this.state.options} onInputChange={this._getUsers} value={this.state.value}/>
                                    </td>;
    }
    else{
        valueField = <td>{this.props.value}</td>;
    }

    return (
        <tr>
            <td className="info-key">{this.props.param}</td>
            <td className="sep">:</td>
            {valueField}
        </tr>
    );
},
_getUsers: function(input){
    UserActions.search(input);
    var optionsDirty = UserStore.getUsers();
    options = [];
    //debugger;
    optionsDirty.map(function(option){
        options.push({value:option.id, label:option.firstName+' '+option.lastName});
    });

    //update component with new options and the current value
    this.setState({
        options:options,
        value:input
    });
}