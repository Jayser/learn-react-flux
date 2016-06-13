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
        var classPrefix = this.props.classPrefix;
        var classPrefixItem = classPrefix + 'item' || '';
        var classState = !this.state.state ? 'text-bold' : '';

        var $title = React.createElement('h1', {
            className: classPrefix + 'article-title'
        }, this.props.title);

        var $description = React.createElement('p', {
            className: classPrefix + 'title'
        }, this.props.description);

        var $button = React.createElement(Button, {
            className: classPrefix + 'btn-state',
            text: this.state.state ? 'Read' : 'Unread',
            clickHandler: this.clickHandler
        });

        return (
            React.createElement('article', {
                className: classPrefixItem + ' ' + classState
            }, $title, $description, $button)
        )
    }
});