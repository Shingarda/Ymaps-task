import React from 'react';
import { connect } from 'react-redux';
import DraggableList from 'react-draggable-list';
import { addPoint, deletePoint, updateList } from "../redux/actions";
import { mapStateToProps } from "../redux/selectors";
import PanelBar from "./PanelBar";

function ConfigPanel(props) {

    const onEnterPress = async function (event) {
        const address = event.target.value;

        if (event.key === 'Enter' && address) {
            const geoObject = await props.geocode(props.ymaps, address);
            props.addPoint(geoObject);
        }
    };

    return (
        <div>
            <input type="text" onKeyPress={onEnterPress}/>
            <DraggableList
                itemKey="id"
                list={props.markers}
                template={PanelBar}
                onMoveEnd={(list) =>
                    props.updateList(
                        list && list.map(
                            (element) => element.id
                        )
                    )
                }
                commonProps={{ deletePoint: props.deletePoint }}
            />
        </div>
    )
}

export default connect(
    mapStateToProps,
    { addPoint, deletePoint, updateList }
)(ConfigPanel);