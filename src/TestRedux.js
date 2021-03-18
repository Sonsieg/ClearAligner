import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { testReduxAction } from './containers/store/action'

const TestRedux = () => {
    const testData = useSelector(state => state.testData)
    const dispatch = useDispatch();
    return (
        <View>
            <Text>Test : {testData}</Text>
            <TouchableOpacity style={{padding: 3, backgroundColor: "tomato"}} onPress={() => dispatch(testReduxAction())}>
                <Text>Cộng 1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TestRedux


