/**
 * Created by Sergii_Azizov on 6/10/2016.
 */

var Button = React.createClass({
    render: function () {
        return (
            React.createElement('button', {
                className: this.props.className,
                onClick: this.props.clickHandler
            }, this.props.text)
        )
    }
});