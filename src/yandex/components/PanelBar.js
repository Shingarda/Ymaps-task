import React from 'react';

export default class PanelBar extends React.Component {
    state = {
        isSelected: false
    };

    toggleInfo() {
        const { isSelected } = this.state;

        this.setState({
            isSelected: !isSelected
        });
    }

    render() {
        const { item, dragHandleProps} = this.props,
              { isSelected } = this.state;

        return (
            <div
                className={"map-point-label" + (isSelected ? " active" : "")}
                {...dragHandleProps}
            >
                <div
                    className={"text-block"}
                >
                    {`Точка маршрута ${item.id}`}
                </div>
                <div
                    className={"config-block"}
                >
                    <div
                        onClick={event => this.toggleInfo(event)}
                        className={"info"}
                    >
                    </div>
                    <div
                        onClick={() => this.props.commonProps.deletePoint(item.id)}
                        className={"close"}
                    >
                    </div>
                </div>
                <div
                    className={"description-block"}
                >
                    {item.marker && item.marker.getAddressLine()}
                </div>
            </div>
        )
    }
}