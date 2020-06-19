import PhoneInfo from "./PhoneInfo";
import React, {Component} from 'react';

class PhoneInfoList extends Component {
    static defaultPhone = {
        data: []
    };

    render() {
        const { data } = this.props;
        const list = data.map(info => (<PhoneInfo key={info.id} info={info}/>));
        return (
        <div>
            {list}
        </div>
        );
    }
}

export default PhoneInfoList;