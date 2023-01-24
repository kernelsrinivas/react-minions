import React, { Component } from 'react';
import { View, Text, Dimensions, EmitterSubscription } from 'react-native';
import Video from 'react-native-video';

interface Props {}
interface State {
  orientation: string;
}
class VideoPlayer extends Component<Props, State> {
  windowSubscriber: EmitterSubscription;
  constructor(props: Props) {
    super(props);
    this.state = {
      orientation: 'portrait',
    };
    this.windowSubscriber = {} as EmitterSubscription;
  }

  componentDidMount() {
    this.windowSubscriber = Dimensions.addEventListener('change', this.handleOrientationChange);
  }

  componentWillUnmount() {
   this.windowSubscriber?.remove();
  }

  handleOrientationChange = ({ window }: any): void => {
    const { width, height } = window;
    const orientation = width > height ? 'landscape' : 'portrait';
    this.setState({ orientation });
  }

  render() {
    const { orientation } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor:'#000' }}>
        <Video
          source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'  }}
          style={{
            width: '100%',
            height: '100%',
            alignSelf: 'center',
          }}
          controls={true}
          pictureInPicture={true}
          preventsDisplaySleepDuringVideoPlayback={true}
          playWhenInactive={false}
          useTextureView={true}
        />
      </View>
    );
  }
}

export default VideoPlayer;
