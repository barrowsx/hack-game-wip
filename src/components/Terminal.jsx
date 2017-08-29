import React from 'react'
import Draggable from 'react-draggable'
import { Window, TitleBar } from 'react-desktop/macOs'

class Terminal extends React.Component {

  state = {
    terminalValue: '',
    terminalLog: ''
  }

  onCloseClick = () => {
    this.setState({
      terminalLog: ''
    }, this.props.onClose)
  }

  onStart = () => {
    let win = document.getElementsByClassName('terminal-window')[0]
    win.style.zIndex = 10
  }

  onStop = () => {
    let win = document.getElementsByClassName('terminal-window')[0]
    this.props.dragHandler(win)
    win.style.zIndex = this.props.zIndex
  }

  handleChange = event => {
    this.setState({
      terminalValue: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let terminalBody = document.getElementsByClassName('terminal-body')[0]
    if(this.state.terminalValue.toLowerCase() === 'help') {
      this.setState({
        terminalLog: this.state.terminalLog.concat('God knows you need it right now\r\n'),
        terminalValue: ''
      }, () => {terminalBody.scrollTop = terminalBody.scrollHeight})
    } else if(this.state.terminalValue.toLowerCase() === 'bepis') {
      this.setState({
        terminalLog: this.state.terminalLog.concat("Don't type swears you bup\r\n"),
        terminalValue: ''
      }, () => {terminalBody.scrollTop = terminalBody.scrollHeight})
    } else {
      this.setState({
        terminalLog: this.state.terminalLog.concat("Invalid command '" + this.state.terminalValue.split(' ')[0] + "'\r\n"),
        terminalValue: ''
      }, () => {terminalBody.scrollTop = terminalBody.scrollHeight})
    }
  }

  render() {
    return(
      <Draggable handle={'.can-drag'} onStart={this.onStart} onStop={this.onStop}>
        <Window className={'terminal-window'} hidden={this.props.open} padding={'10px'} chrome height={'400px'} width={'500px'} horizontalAlignment={'center'} background={'black'}>
          <TitleBar className={'can-drag'} title={'Terminal'} controls onCloseClick={this.onCloseClick}/>
          <div className={'terminal-body'}>
            ReactOS v15.6.0
            <br></br>
            {this.state.terminalLog}
          </div>
          <div className={'terminal-text-field'}>
            <form className={'terminal-form'} onSubmit={this.handleSubmit}>
              > <input type={'text'} className={'terminal-input'} value={this.state.terminalValue} onChange={this.handleChange} />
              <input type={"submit"} style={{position: 'absolute', left: '-9999px'}}/>
            </form>
          </div>
        </Window>
      </Draggable>
    )
  }
}

export default Terminal;
