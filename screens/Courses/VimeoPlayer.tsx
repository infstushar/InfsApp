import React from "react";
import { string, func } from "prop-types";
import WebView from "react-native-autoheight-webview";
import { useState } from "react";

const VimeoPlayer = ({ videoId, onError }) => {
  return (
    <WebView
      style={style}
      onError={onError}
      allowsFullscreenVideo={false}
      scrollEnabled={false}
      automaticallyAdjustContentInsets
      source={{
        html: `
          <html>
            <body>
              
            <iframe src="https://player.vimeo.com/video/${videoId}" width="100%" height="230" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
            
            </body>
          </html>
        `,
      }}
    />
  );
};

const style = {
  height: "100%",
  maxWidth: "100%",
};

VimeoPlayer.propTypes = {
  videoId: string,
  onError: func,
};

export default VimeoPlayer;
