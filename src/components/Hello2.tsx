import React, { Component } from 'react';

type NoticeProps = {
    msg: string
}

export default class Notice extends Component<NoticeProps> {
    static defaultProps = {
        msg: 'Hello everyone!'
    }
    
    render() {
        return <p>{this.props.msg}</p>
    }
}

const el = <Notice /> // Will compile in TS 3.0