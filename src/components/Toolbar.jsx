import React from 'react'
import AppleMenu from 'react-apple-menu'
import Shop from './Shop'
import Chat from './Chat'
import Terminal from './Terminal'

class Toolbar extends React.Component {

  state = {
    terminalElement: 0,
    chatElement: 0,
    shopElement: 0,
    isShopHidden: true,
    isChatHidden: true,
    isTerminalHidden: true
  }

  closeShop = () => {
    this.setState({isShopHidden: true})
  }

  closeChat = () => {
    this.setState({isChatHidden: true})
  }

  closeTerminal = () => {
    this.setState({isTerminalHidden: true})
  }



  setZIndex = (element) => {
    this.setState({
      terminalElement: document.getElementsByClassName('terminal-window')[0],
      chatElement: document.getElementsByClassName('chat-window')[0],
      shopElement: document.getElementsByClassName('shop-window')[0]
    })
    const terminal = this.state.terminalElement
    const chat = this.state.chatElement
    const shop = this.state.shopElement

    if(element === this.state.terminalElement){
      terminal.style.zIndex = 2
      chat.style.zIndex = 1
      shop.style.zIndex = 0
      this.forceUpdate()
    } else if(element === this.state.chatElement) {
      chat.style.zIndex = 2
      shop.style.zIndex = 1
      terminal.style.zIndex = 0
      this.forceUpdate()
    } else if(element === this.state.shopElement) {
      shop.style.zIndex = 2
      chat.style.zIndex = 1
      terminal.style.zIndex = 0
      this.forceUpdate()
    } else {
      // ???
    }
  }



  render() {
    return (
      <div>
        <Shop onClose={this.closeShop.bind(this)} open={this.state.isShopHidden} dragHandler={this.setZIndex.bind(this)}/>
        <Chat onClose={this.closeChat.bind(this)} open={this.state.isChatHidden} dragHandler={this.setZIndex.bind(this)}/>
        <Terminal onClose={this.closeTerminal.bind(this)} open={this.state.isTerminalHidden} dragHandler={this.setZIndex.bind(this)}/>
        <AppleMenu>
          <img alt={'hiya'} onClick={() => {
            this.setState({isShopHidden: false})
          }} src="./shop.png"/>
          <img alt={'hiya'} onClick={() => {
            this.setState({isTerminalHidden: false})
          }} src="./terminal.png"/>
          <img alt={'hiya'} onClick={() => {
            this.setState({isChatHidden: false})
          }} src="./user.png"/>
          <img alt={'hiya'} onClick={() => {
            this.setState({isChatHidden: false})
          }} src="./chat.png"/>
          <img alt={'hiya'} onClick={() => {
            alert('i made the thing WOWEE (icons by https://icons8.com)')
          }} src="./help.png"/>
        </AppleMenu>
      </div>
    )
  }
}

export default Toolbar;
