/**
 * Created by Sergii_Azizov on 6/10/2016.
 */
var blogListData = [
    {
        key: 1,
        title: 'Краткое руководство по React JS',
        description: 'description 1',
        state: false
    },
    {
        key: 2,
        title: 'Жизненный цикл компонента React.js',
        description: 'description 2',
        state: true
    },
    {
        key: 3,
        title: 'Введение в React.js',
        description: 'description 3',
        state: false
    }
];

var App = React.createClass({
    render: function () {
        var classPrefix = 'blog-articles';
        return (
            React.createElement(BlogList, {
                    title: 'Blog title',
                    classPrefix: classPrefix + "__",
                    data: blogListData
                }
            )
        );
    }
});

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('app')
);