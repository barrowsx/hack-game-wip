import React from 'react'
import { Window, TitleBar, Text } from 'react-desktop/macOs'
import Draggable from 'react-draggable'

class Shop extends React.Component {

  onStart = () => {
    let win = document.getElementsByClassName('shop-window')[0]
    win.style.zIndex = 10
  }

  onStop = () => {
    let win = document.getElementsByClassName('shop-window')[0]
    this.props.dragHandler(win)
    win.style.zIndex = this.props.zIndex
  }

  render () {
    return(
      <Draggable handle={'.can-drag'} onStart={this.onStart} onStop={this.onStop}>
        <Window className={'shop-window'} hidden={this.props.open} chrome height={'400px'} width={'500px'} padding={'10px'} horizontalAlignment={'center'}>
          <TitleBar className={'can-drag'} title={'Shamazon'} controls onCloseClick={this.props.onClose}/>
          <Text>{'At some point there will be a shop here, but for now this is just a placeholder'}</Text>
        </Window>
      </Draggable>
    )
  }
}

export default Shop;
