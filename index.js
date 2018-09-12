'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    View,
    requireNativeComponent,
} = ReactNative;

const MarqueeLabel = React.createClass({
    propTypes: {
    },
    render: function () {
        const { children, ...props } = this.props;
        const nativeProps = Object.assign({}, props, { text: children });
        return (
            <RCTMarqueeLabel {...nativeProps} />
        );
    },
});

const RCTMarqueeLabel = requireNativeComponent('RCTMarqueeLabel', MarqueeLabel);
module.exports = MarqueeLabel;
