/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

var Divider = React.createClass({
    render: function () {
        return (
            React.createElement('hr', {
                className: this.props.className
            })
        )
    }
});