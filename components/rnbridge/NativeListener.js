import {component} from 'react'
import { DeviceEventEmitter } from 'react-native';

class NativeListener extends component{
    componentWillMount() {
        DeviceEventEmitter.addListener('keyboardWillShow', function(event) {
            // handle event.
        });
    }
}
export default NativeListener;
