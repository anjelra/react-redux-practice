import PhoneInfo from "./PhoneInfo";
import React, {Component} from 'react';

class PhoneInfoList extends Component {
    static defaultPhone = {
        data: []
    };

    render() {
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(info => (<PhoneInfo 
                                            key={info.id} 
                                            info={info} 
                                            onRemove={onRemove}
                                            onUpdate={onUpdate}/>));
        return (
        <div>
            {list}
        </div>
        );
    }
}

export default PhoneInfoList;