/**
 * Created by Sergii_Azizov on 6/10/2016.
 */
var BlogItem = React.createClass({
    getInitialState: function () {
        return {state: this.props.state};
    },
    clickHandler: function () {
        this.setState({state: !this.state.state});
    },
    render: function () {
        var classPrefix = this.props.classPrefix + 'item' || '';
        var classState = !this.state.state ? 'text-bold' : '';
        var $button = React.createElement(Button, {
            text: this.state.state ? 'Read' : 'Unread',
            clickHandler: this.clickHandler
        });

        return (
            React.createElement('li', {
                className: classPrefix + ' ' + classState
            }, this.props.title, $button)
        )
    }
});