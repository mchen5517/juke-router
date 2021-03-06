import React from 'react';
import {Link} from "react-router";

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    render: function () {
        let isActive = this.context.router.isActive(this.props.to, true),
            className = isActive ? "menu-item active" : "menu-item";

        return (
            <h4 className={className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </h4>
        );
    }
});