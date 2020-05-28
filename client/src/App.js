import React from 'react'
import Unity, { UnityContent } from 'react-unity-webgl'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.unityContent = new UnityContent('asparagus/build/Desktop.json', 'asparagus/build/UnityLoader.js')
	}

	render() {
		return <Unity unityContent={this.unityContent} />
	}
}
