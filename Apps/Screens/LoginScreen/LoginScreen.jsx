import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import Colors from '../../Utils/Colors';

const videoSource = 'https://cdn.pixabay.com/video/2024/11/07/240330_large.mp4';

export default function LoginScreen() {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true; // Set the video to loop
        player.play();      // Start playing the video automatically
    });

    return (
        <View style={styles.container}>
            <VideoView 
                style={styles.video} 
                player={player} 
                contentFit="cover"
                nativeControls={false} // Disables playback controls
                disableGesture={true} // Disables gesture-based interactions
                disableControls={true} // Ensures no native controls are shown
            />
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Jobify </Text>
                <Text style={styles.subtitleText}>Ultimate place to explore your potential</Text>

                {/* Sign-in Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        {/* <Image 
                            source={require('../../../assets/google-logo.png')} 
                            style={styles.logo}
                        /> */}
                        <Text style={styles.buttonText}>Sign in with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        {/* <Image 
                            source={require('../../assets/facebook-logo.png')} 
                            style={styles.logo}
                        /> */}
                        <Text style={styles.buttonText}>Sign in with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        {/* <Image 
                            source={require('../../assets/email-logo.png')} 
                            style={styles.logo}
                        /> */}
                        <Text style={styles.buttonText}>Sign in with Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: '40%',
        transform: [{ translateY: '-50%' }],
    },
    titleText: {
        fontFamily: 'outfit-bold',
        color: Colors.WHITE,
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitleText: {
        fontFamily: 'outfit-regular',
        color: Colors.WHITE,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '80%',
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: 10, // Space between the logo and text
    },
    buttonText: {
        fontFamily: 'outfit-bold',
        color: Colors.WHITE,
        fontSize: 16,
        textAlign: 'center',
    },
});
