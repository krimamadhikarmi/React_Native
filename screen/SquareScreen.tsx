import {Text, View} from 'react-native';
import {Counter} from '../components/Counter';
import {useReducer, useState} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'change_red':
        return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};

    case 'change_green':
        return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
        
     
    case 'change_blue':
        return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
}

export function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;

  const COLOR_INCREMENT = 15;

  return (
    <View>
      <Counter
        color="red"
        onIncrease={() =>
          dispatch({type: 'change_red', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})
        }
      />
      <Counter
        color="green"
        onIncrease={() =>
          dispatch({type: 'change_green', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})
        }
      />
      <Counter
        color="blue"
        onIncrease={() =>
          dispatch({type: 'change_blue', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})
        }
      />
      <View
        style={{
          width: 100,
          height: 100,
          marginTop: 20,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
}
