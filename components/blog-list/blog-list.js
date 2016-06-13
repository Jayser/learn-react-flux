/**
 * Created by Sergii_Azizov on 6/10/2016.
 */
var BlogList = React.createClass({
    getInitialState: function () {
        return {data: this.props.data};
    },
    render: function () {
        var classPrefix = this.props.classPrefix;
        var items = this.state.data.map(function (item) {
            item = item || {};
            item.classPrefix = classPrefix;
            return (
                React.createElement(BlogItem, item)
            )
        });
        return (
            React.createElement('div', {
                    className: classPrefix + 'wrapper'
                },
                React.createElement('ul', {
                    className: classPrefix + 'list'
                }, items)
            )
        );
    }
});