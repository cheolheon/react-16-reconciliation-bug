import React from 'react'
import Static from './Static'
import Dynamic from './Dynamic'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.mounted = false
    this.state = {
      loaded: !isBrowser
    }

    if (isBrowser) {
      new Promise((resolve) => {
        setTimeout(() => {
          const nextState = {
            loaded: true
          }
          if (this.mounted) {
            this.setState(nextState)
          } else {
            this.state = nextState
          }
        }, 200)
      })
    }
  }

  componentDidMount() {
    this.mounted = true
  }

  render() {
    return (
      <div>
        {this.state.loaded ? <Dynamic /> : null}
        <Static />
      </div>
    )
  }
}

export default App
